---
sidebar_position: 1
label: "Migrating 3.X to 4.X"
---

import * as BasketService from '@site/docs/android/advanced/_shared/_miamManager/_basketService/';
import SupplierId from '@site/docs/android/advanced/_shared/_miamManager/SupplierId.md';
import Analytics from '@site/docs/android/advanced/_shared/_miamManager/_analytics-notifiers/Analytics.md';
import Toaster from '@site/docs/android/advanced/_shared/_miamManager/_analytics-notifiers/Toaster.md';

# Updating MiamManager

This section is upgrading miam-sdk from Version 3 to Version 4. 

## Initialization 

First & foremost, you'll need to update how you initialize your miam-sdk inside your MiamManager. 
We have made it more straightforward & readable to initialize miam-sdk, which comes with changes to existing implementations.

### SupplierKey - base64 key to set information

<SupplierId />

### BasketHandler - Communicating with the Mealz Baskets

Previous, implementations would the `BasketHandler` to communicate with the two baskets.
The `BasketHandler` has been replaced in version 4 by protocols `BasketSubscriber` & `BasketPublisher`.

Your previous code would look something like this inside your MiamManager:

```kotlin
BasketHandlerInstance.instance.pushProductsToMiamBasket(retailerBasketSubject.value.items.map { product ->
    myProductTORetailerProduct(
        product
    )
})
BasketHandlerInstance.instance.setListenToRetailerBasket(func: initBasketListener)
BasketHandlerInstance.instance.setPushProductsToSupplierBasket(func: pushProductToBasket)
```

We'll go through the differences on these calls one by one.

<BasketService.NewBasketService />

#### onBasketUpdate - setListenToRetailerBasket

This code is very similar to before, but instead we put the code inside our `onBasketUpdate` function.
For example, your old code should be streaming your basket to the Mealz Basket, something like this:

```kotlin
private fun initBasketListener() {
    launch(coroutineHandler) {
        retailerBasketSubject.collect {
            basketHandler.pushProductsToMiamBasket(it.items.map { product ->
                myProductTORetailerProduct(
                    product
                )
            })
        }
    }
}
```

Now, you can move the content from `initBasketListener` directly into the `onBasketUpdate`.

<BasketService.OnBasketUpdate />

#### initialValue - pushProductsToMiamBasket

The `pushProductsToMiamBasket` creates the initial basket state.
Instead, we set this inside our new BasketService. 

<BasketService.InitializeBasket />

#### receive - setPushProductsToSupplierBasket

The last step of the `basketHandler` is to implement the `receive`.
This will update make sure both baskets are connected & up to date. 

<BasketService.UpdateBasketFromExternalSource />

### Putting it all together

You can now remove the previous `BasketHandler` & add this code:

<BasketService.FinalCodeBlock />

## User 

### ContextHandlerInstance

If you've implemented the above code, you can delete this line:
```kotlin
ContextHandlerInstance.instance.doInitMiam(base64_key = supplierKey)
```

### PointOfSaleHandler

Previously, to set the store, you'd call the `PointOfSaleHandler` like this:
```kotlin
PointOfSaleHandler.updateStoreId(storeId = "25910")
```

Now, you use `user` inside the Mealz SDK like this:
```kotlin
// set store
Mealz.user.setStoreId(storeId = "25910")
```

### UserHandler

Previously, to set the userId, you'd call the `UserHandler` like this:
```kotlin
UserHandler.updateUserId(userId = existingUserId)
```

Now, you use `user` inside the Mealz SDK like this:
```kotlin
// set userID
Mealz.user.updateUserId(userId = existingUserId, authorization = Authorization.userId)
```

### Additionally

You can also add this code to be explicit about enabled Favoriting Recipes & Personalized Recipes.
```kotlin
// allow profiling -> can we use your personal data to provide custom recipes?
Mealz.user.setProfilingAllowance(allowance = true)
// allow users to heart recipes
Mealz.user.setEnableLike(isEnable = true)
```

## Clear Basket

To clear the basket, you can remove this code:
```kotlin
BasketHandlerInstance.instance.clear()
```
& replace it with this:
```kotlin
Mealz.basket.clear()
```

## Set Price Book

To set the price book, you can remove this code:
```kotlin
BasketHandlerInstance.shared.instance.setPriceBookKey(priceBookKey = pricebook.rawValue)
```
& replace it with this:
```kotlin
Mealz.basket.setPriceBook(priceBookId = pricebook.rawValue)
```

## Handle Payment

To inform the SDK that recipes will be purchased, you can remove this code:
```kotlin
BasketHandlerInstance.instance.handlePayment(totalAmount = totalAmount)
```
& replace it with this:
```kotlin
Mealz.basket.handlePayment(totalAmount = totalAmount)
```

## Analytics & Notifications

### Analytics

Previously, you would use the `AnalyticsHandler` to follow the Mealz updates:
```kotlin
launch(coroutineHandler) { AnalyticsInstance.instance.observeSideEffect().collect { LogHandler.info("Analytics $it") } }
```
Now, you can call:
<Analytics />

### Notifications

Previously, you could use Mealz Toast like this:
```kotlin
ToasterHandler.setOnAddRecipeText("Well done !")
ToasterHandler.setOnLikeRecipeText("Good taste !")
```

<Toaster />

## Is Ready

Previously, you would use one of these functions to know if Mealz was ready
```kotlin
ContextHandlerInstance.instance.isReady()
```
or
```kotlin
launch(coroutineHandler) {
    ContextHandlerInstance.instance.observeReadyEvent().collect { it ->
        LogHandler.info("I know you are readdy !!! $it")
    }
}
```

Now, you can use our AvailabilityStore like this:
```kotlin
Mealz.environment.isAvailable()
```

## Recipe Count

Previously you could monitor the recipe count this way:
```kotlin
GroceriesListHandler.shared.onRecipeCountChanges { count ->
    // do stuff
    println(count)
}
```
Now you can access it with this:
```kotlin
Mealz.basket.getRecipeCountInBasket()
```
or listen to it with a subscriber like this:
```kotlin
Mealz.notifications.recipeCount()
```
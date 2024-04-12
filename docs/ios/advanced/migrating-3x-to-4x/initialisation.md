---
sidebar_position: 1
label: "Updating MealzManager"
---

import * as BasketService from '@site/docs/ios/advanced/_shared/_miamManager/_basketService/';
import SupplierId from '@site/docs/ios/advanced/_shared/_miamManager/SupplierId.md';
import Analytics from '@site/docs/ios/advanced/_shared/_miamManager/_analytics-notifiers/Analytics.md';
import Toaster from '@site/docs/ios/advanced/_shared/_miamManager/_analytics-notifiers/Toaster.md';

# Updating MealzManager

This section is upgrading miam-sdk from Version 3 to Version 4. 

## Initialization 

First & foremost, you'll need to update how you initialize your miam-sdk inside your MealzManager. 
We have made it more straightforward & readable to initialize miam-sdk, which comes with changes to existing implementations.

### SupplierKey - base64 key to set information

<SupplierId />

### BasketHandler - Comunicating with the Mealz Baskets

Previous, implementations would the `BasketHandler` to communicate with the two baskets.
The `BasketHandler` has been replaced in version 4 by protocols `BasketSubscriber` & `BasketPublisher`.

Your previous code would look something like this inside your MealzManager:

```swift
BasketHandlerInstance.shared.instance.pushProductsToMiamBasket(retailerBasket: [])
BasketHandlerInstance.shared.instance.setListenToRetailerBasket(func: initBasketListener)
BasketHandlerInstance.shared.instance.setPushProductsToSupplierBasket(func: pushProductToBasket)
```

We'll go through the differences on these calls one by one.

<BasketService.NewBasketService />

#### onBasketUpdate - setListenToRetailerBasket

This code is very similiar to before, but instead we put the code inside our `onBasketUpdate` function.
For example, your old code should be streaming your basket to the Mealz Basket, something like this:

```swift
private func initBasketListener() {
    cancelable = PretendBasket.shared.$items.sink { receiveValue in
        BasketHandlerInstance.shared.instance.pushProductsToMiamBasket(
            retailerBasket: self.pretendProductsToRetailerProducts(products: receiveValue)
        )
    }
}
```
where

<BasketService.PretendProductsToRetailerProducts />

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
```swift
ContextHandlerInstance.shared.instance.doInitMiam(base64_key: supplierKey)
```

### PointOfSaleHandler

Previously, to set the store, you'd call the `PointOfSaleHandler` like this:
```swift
PointOfSaleHandler.shared.updateStoreId(storeId: "25910")
```

Now, you use `user` inside the Mealz SDK like this:
```swift
// set store
Mealz.shared.user.setStoreId(storeId: "25910")
```

### UserHandler

Previously, to set the userId, you'd call the `UserHandler` like this:
```swift
UserHandler.shared.updateUserId(userId: existingUserId)
```

Now, you use `user` inside the Mealz SDK like this:
```swift
// set userID
Mealz.shared.user.updateUserId(userId: existingUserId, authorization: Authorization.userId)
```

### Additionally

You can also add this code to be explicit about enabled Favoriting Recipes & Personalized Recipes.
```swift
// allow profiling -> can we use your personal data to provide custom recipes?
Mealz.shared.user.setProfilingAllowance(allowance: true)
// allow users to heart recipes
Mealz.shared.user.setEnableLike(isEnable: true)
```

## Clear Basket

To clear the basket, you can remove this code:
```swift
BasketHandlerInstance.shared.instance.clear()
```
& replace it with this:
```swift
Mealz.shared.basket.clear()
```

## Set Price Book

To set the price book, you can remove this code:
```swift
BasketHandlerInstance.shared.instance.setPriceBookKey(priceBookKey: pricebook.rawValue)
```
& replace it with this:
```swift
Mealz.basket.setPriceBook(priceBookId: pricebook.rawValue)
```

## Handle Payment

To inform the SDK that recipes will be purchased, you can remove this code:
```swift
BasketHandlerInstance.shared.instance.handlePayment(totalAmount: totalAmount)
```
& replace it with this:
```swift
Mealz.shared.basket.handlePayment(totalAmount: totalAmount)
```

## Analytics & Notifications

### Analytics

Previously, you would use the `AnalyticsHandler` to follow the Mealz updates:
```swift
AnalyticsInstance.shared.instance.setOnEventEmitted( 
    onEventEmittedCallBack: { event in  
        print("event Miam \(event.eventType)  \(event.path)  \(event.props)")
    }
)
```
Now, you can call:
<Analytics />

### Notifications

Previously, you could use Mealz Toast like this:
```swift
ToasterHandler.shared.setOnAddRecipeText("Well done !")
ToasterHandler.shared.setOnLikeRecipeText("Good taste !")
```

<Toaster />

## Localization

If you have overwritten our localization, you can KEEP this line:
```swift
I18nResolver.shared.registerAppBundle(bundle: .main) // or the bundle/package where you store the localized files
```

## Is Ready

Previously, you would use one of these functions to know if Mealz was ready
```swift
ContextHandlerInstance.shared.instance.isReady()
```
or
```swift
 ContextHandlerInstance.shared.instance.onReadyEvent(callback: {
       // do your call back here
 })
```

Now, you can use our AvailabilityStore like this:
```swift
 Mealz.environment.isAvailable()
```

## Recipe Count

Previously you could monitor the recipe count this way:
```swift
GroceriesListHandler.shared.onRecipeCountChanges { count in
    // do stuff
    print(count)
}
```
Now you can access it with this:
```swift
Mealz.basket.getRecipeCountInBasket()
```
or listen to it with a subscriber like this:
```swift
Mealz.notifications.recipeCount()
```
---
sidebar_position: 3
label: "Supplier Initialisation"
---

import * as BasketService from '@site/docs/android/advanced/_shared/_miamManager/_basketService/';
import SupplierId from '@site/docs/android/advanced/_shared/_miamManager/SupplierId.md';


# Supplier Initialisation

You are a retailer and you have your owned groceries list that need to be syncronize with mealz groceries list

## SupplierKey - base64 key to set information

<SupplierId />

:::tip
Your keys will be provided by our Development team
:::

## Basic implementation

There is several options to configure that handle authless here we are considering a basic implemtation
were Mealz initialization process will only start after the user is **logged in** and has **selected a valid store**.
It will then need to complete the **basket synchronization**


First to init Mealz we need your application context and also your supplier key

:::note
Two key must have been send to you one for **developement** purpose and a **production** one
:::

```kotlin
import ai.mealz.core.Mealz

object MealzManager {

    private var isInitialized = false

    public fun initialize(applicationContext: Context){
        Mealz.Core {
        sdkRequirement {
            key = supplierKey
            context = applicationContext
            }   
        }
        isInitialized = true
    }
}
```

## Basket synchronization Setup

Most importantly, the Mealz Basket must be kept up to date with your in-app basket.
The SDK handles this complex logic by translating between Mealz Products & your real products.
This mechanism is **mandatory** -> otherwise products will not be able to be added nor deleted properly between the two stores.

For example, when a user adds a Mealz Recipe to their cart, they are adding Mealz products to their basket.
We then send them to you, the retailer, to be translated into your products & then added to your basket.

Likewise, when a product is deleted from your basket, the retailer, we listen for updates.
When we notice a product used in a Mealz Recipe was deleted, we update our basket to reflect that change as well.

:::tip
If at some point, you feel like products magically disappear from Mealz recipes, or are not removed
from the app basket while they should be, this is probably related to this part.
:::

### BasketSubscriber & BasketListener

We have two protocols `BasketSubscriber` & `BasketListener` to coordinate the two baskets together.
As the name suggestions, the listeners listens for updates from your basket.
The subscriber allows you to listen.

<BasketService.NewBasketService />

### onBasketUpdate

Now, we need a way to stream the updates from the Mealz Basket to your own.
We recommend using an observable.
From there, we can sink your basket (in this case, the `ExampleState`) with the updates from Mealz.

Here's our example:

<BasketService.OnBasketUpdate />

### initialValue

When Mealz is launching, we need to know the state of the current customer basket.
Whenever this basket changes, we will refresh the Mealz SDK.

<BasketService.InitializeBasket />

:::danger
IMPORTANT: passing an empty list to Mealz SDK on initialization when there are actual products in the basket will lead to unexpected side effects. If this is done, products in the user's basekt will appear as removed by the user in the Mealz basket.
:::

### receive

The last step of the `basketService` is to implement `receive`.
This will update make sure both baskets are connected & up to date.

<BasketService.UpdateBasketFromExternalSource />

### Putting it all together

<BasketService.FinalCodeBlock />

## Handle Payment

Now, to properly finish the Mealz session, you'll need to call the below function:
```kotlin
import com.miam.core.Mealz

Mealz.basket.handlePayment(totalAmount: <#T##Double#>)
```

This will clear the basket & lodge the products as purchased, especially with regard to our AI model.
The more a recipe is purchased, the more confident we are in the model & products associated.
Further, we also can use this data for analytics purposes to see which recipes are most frequently purchased.

This should be called directly before the user pays & is ***mandatory***.


## User setup

Here is how to pass the user ID to the SDK, directly within the host app:

:::info
You can also enable **authless** feature, more informations [**here**](../advanced/user-configuration/##AuthLess
).
:::

```kotlin
// existingUserId is your user id type String is expected
Mealz.user.updateUserId(userId = existingUserId)
```

Here is how to inform the SDK whenever the user login state changes. We recommend using Observables
or EventListeners to that end.

```kotlin 
import com.miam.core.Mealz

class Miam() {
  init {
    // CODE

    OBSERVABLE_ON_USER_OBJECT.collect { user ->
       Mealz.shared.user.updateUserId(userId = user.id)
    }
  }

  // CODE
}
```
:::info
To get full list of user feature check [**User configurations**](../advanced/user-configuration).
:::

## Store setup

For Mealz to work properly, your user must be connected to a specific store so we can accurately provide recipes with available ingredients.
To add the store that the user is currently at, you can use this code:

```kotlin
// From anywhere
import com.miam.core.Mealz

// STORE_ID_IN_HOST_APP is your store id type String is expected
Mealz.user.setStoreIdWithCallBack(storeId = <string>STORE_ID_IN_HOST_APP) { /** action to execute one mealz store has been fetch and set can be a rediretion */}
```

Congratulation **Mealz** is good to go 🥳
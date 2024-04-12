---
sidebar_position: 2
label: "Initialisation"
---

import * as BasketService from '@site/docs/android/advanced/_shared/_miamManager/_basketService/';
import SupplierId from '@site/docs/android/advanced/_shared/_miamManager/SupplierId.md';
import Analytics from '@site/docs/android/advanced/_shared/_miamManager/_analytics-notifiers/Analytics.md';
import Toaster from '@site/docs/android/advanced/_shared/_miamManager/_analytics-notifiers/Toaster.md';

# Initialisation

## Create Package

First & foremost, we recommend creating a new Android Module to house all your Mealz SDK related code.
We understand the issues associated with sharing your entire codebase with us, so creating a shareable package should quell those fears.
The reason we'd like to have it shareable is so that we can discover & solve bugs as quickly as possible.
Instead of "playing telephone" about underlying bugs, having access to your implementation will save you time (& money).

If creating a separate package for the MealzManager creates a circular dependency, it is okay to embed that with your existing code.
We just ask that you at least make your UI code a separate package so that we can advise you (& make updates if necessary).

## MealzManager

We recommend that all the mapping functions that will define the interactions between the SDK and
the host app be wrapped in a main **MealzManager** class.
This class will use methods and attributes defined in our core SDK classes to manage objects such
as the User profile, the Basket, or the selected Store.

:::tip
Make sure this main **MealzManager** class is a singleton and instantiated only once in your runtime.
Here
is a basic implementation
:::

```kotlin
import com.miam.core.Mealz

class MiamManager(val appContext: Context) {
   init {
     // Will contain calls to Miam SDK core class for modules (User, Basket, Store...)
  }
}
```

```kotlin
// MainActivity.kt
import com.miam.core.Mealz

class MainActivity: ComponentActivity(), CoroutineScope by CoroutineScope(Dispatchers.Main) {

private fun initMiam() {
    MiamManager(this@MainActivity)
}
```

## Minimum requirement

### SupplierKey - base64 key to set information

<SupplierId />

:::tip
Your keys will be provided by our Development team
:::

Mealz initialization process will only start after the user is **logged in** and has **selected a valid store**.
It will then need to complete the **basket synchronization**

## User setup

Here is how to pass the user ID to the SDK, directly within the host app:

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
Mealz.user.setStoreId(storeId = <string>STORE_ID_IN_HOST_APP)
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


## Clear Basket

To clear the basket, you can call this simple function:
```kotlin
import com.miam.core.Mealz

Mealz.shared.basket.clear()
```

This should be used on your own "clearBasket" button/implementation, as well as after a successful checkout process.

Congratulation **Mealz** is good to go 🥳
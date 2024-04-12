---
sidebar_position: 2
label: "Initialisation"
---

import * as BasketService from '@site/docs/ios/advanced/_shared/_miamManager/_basketService/';
import SupplierId from '@site/docs/ios/advanced/_shared/_miamManager/SupplierId.md';
import Analytics from '@site/docs/ios/advanced/_shared/_miamManager/_analytics-notifiers/Analytics.md';
import Toaster from '@site/docs/ios/advanced/_shared/_miamManager/_analytics-notifiers/Toaster.md';

# Initialisation

## Create Package

First & foremost, we recommend creating a Swift Package to house all your Mealz SDK related code.
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


```swift
// file MealzManager.swift
import Foundation

public class MealzManager {
  // Will contain calls to Miam SDK core class for modules (User, Basket, Store...)
  
  public static let sharedInstance = MealzManager()
}
```

```swift
//IosApp.swift

import SwiftUI

@main
struct ios_mealz_integrationApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // init Mealz
        let _ = MealzManager.sharedInstance
        return true
    }
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

```swift
// From anywhere
import miamCore

// existingUserId is your user id type String is expected
Mealz.shared.user.updateUserId(userId: existingUserId, authorization: Authorization.userId)
```

Here is how to inform the SDK whenever the user login state changes. We recommend using Observables
or EventListeners to that end.

```swift
// file MealzManager.swift
import miamCore

public class MealzManager {
  // CODE

  private init() {
    // CODE

    OBSERVABLE_ON_USER_OBJECT.sink { _  in
      // existingUserId is your user id type String is expected
      Mealz.shared.user.updateUserId(userId: existingUserId, authorization: Authorization.userId)
    }
  }
  // CODE
}
```

:::info
To get full list of user feature check [**User handler**](../advanced/user-configuration).
:::

## Store setup

For Mealz to work properly, your user must be connected to a specific store so we can accurately provide recipes with available ingredients.
To add the store that the user is currently at, you can use this code:

```swift
// From anywhere
import miamCore

// STORE_ID_IN_HOST_APP is your store id type String is expected
Mealz.shared.user.setStoreId(storeId: STORE_ID_IN_HOST_APP)
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

[//]: # (For convenience, we recommend defining a mapping function that transforms your products to MealzProducts & vice versa. )

[//]: # (Here's an example:)

[//]: # ()
[//]: # (<BasketService.PretendProductsToRetailerProducts />)

### BasketSubscriber & BasketListener

We have two protocols `BasketSubscriber` & `BasketListener` to coordinate the two baskets together.
As the name suggestions, the listeners listens for updates from your basket.
The subscriber allows you to listen. 

<BasketService.NewBasketService />

### onBasketUpdate

For convenience, we recommend defining a mapping function that transforms your products to MealzProducts & vice versa.
Here's an example:

<BasketService.PretendProductsToRetailerProducts />

Now, we need a way to stream the updates from the Mealz Basket to your own.
We recommend using an observable.
Especially, we recommend importing Combine & creating a cancellable object.
From there, we can sink your basket (in this case, the `PretendBasket`) with the updates from Mealz.

Here's our example:

<BasketService.OnBasketUpdate />

### initialValue

When Mealz is launching, we need to know the state of the current customer basket.
Whenever this basket changes, we will refresh the Mealz SDK.

<BasketService.InitializeBasket />

:::danger
IMPORTANT: passing an empty list to Mealz SDK on initialization when there are actual products in the basket will lead to unexpected side effects.
:::

### receive 

The last step of the `basketService` is to implement `receive`.
This will update make sure both baskets are connected & up to date.

<BasketService.UpdateBasketFromExternalSource />

### Putting it all together

<BasketService.FinalCodeBlock />

## Handle Payment

Now, to properly finish the Mealz session, you'll need to call the below function:
```swift
Mealz.shared.basket.handlePayment(totalAmount: <#T##Double#>)
```

This will clear the basket & lodge the products as purchased, especially with regard to our AI model.
The more a recipe is purchased, the more confident we are in the model & products associated.
Further, we also can use this data for analytics purposes to see which recipes are most frequently purchased.

This should be called directly before the user pays & is ***mandatory***.

## Set Price Book

To set the price book, you can use this code:
```swift
Mealz.basket.setPriceBook(priceBookId: pricebook.rawValue)
```

## Clear Basket

To clear the basket, you can call this simple function:
```swift
Mealz.shared.basket.clear()
```

This should be used on your own "clearBasket" button/implementation, as well as after a successful checkout process.
:::danger
IMPORTANT: Don't use this function after the basket is paid, otherwise our AI will not learn from users' choices.
:::

Congratulation **Mealz** is good to go 🥳
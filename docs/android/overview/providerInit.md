---
sidebar_position: 4
label: "Provider Initialisation"
---

import * as BasketService from '@site/docs/android/advanced/_shared/_miamManager/_basketService/';
import ProviderId from '@site/docs/android/advanced/_shared/_miamManager/ProviderId.md';


# Provider Initialisation

You are providing content you use Mealz as a link to retailers

## ProviderKey - base64 key to set information

<ProviderId />

:::tip
Your keys will be provided by our Development team
:::

## Basic implementation

There is several options to configure that handle authless here we are considering a basic implemtation
were Mealz initialization process will only start after the user is **logged in** and has **selected a valid


First to init Mealz we need your application context and also your provider key

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
            key = providerKey
            context = applicationContext
            }   
        }
        isInitialized = true
    }
}
```

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
Mealz.user.setStoreWithMealzIdWithCallBack(storeId = <string>STORE_ID_IN_HOST_APP) { /** action to execute one mealz store has been fetch and set can be a rediretion */}
```


Congratulation **Mealz** is good to go 🥳
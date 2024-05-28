---
sidebar_position: 2
label: "Initialisation"
---

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

Regarding your type of app you can be belong to one of the two type of initialisation :
  - **Provider** -> You provide recipe and use mealz to push it to a retailer 
  - **Supplier** -> You are a retailer and you have your owned groceries list 

:::tip
If you don't know whitch configuration you have to use you can either ask use or decode the base64 key
that we have send you and see whitch field between provider and supplier has been filled
:::



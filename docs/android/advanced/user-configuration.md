# User customisation

Mealz can provide a personalized experience for customers.
To achieve this we propose two solutions:

- Preferences: Locally stored _Actionable without customer consent by the retailer_
- Profiling : Back hosted tastes _Can be disabled by the customer_

:::note
These two solutions are GDPR-compliant
:::

## Preferences

The preferences uses the native Android preference to make them persistent. 
To enable this feature you need to provide a **context** and change the Mealz preference's configuration flag to `true`:

Example with **Jetpack Compose** :

```kotlin
import com.miam.core.Mealz

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Column {
                // EnablePreference show preference button on Catalog
                Catalog(this@MainActivity).apply { enablePreference(true) }.Content()
            }
        }
    }
}
 ```

## Profiling

Mealz offers to your customer a fully personalized experience based on their tastes.
Our AI will learn from the customer's choices and suggest more and more specific recipes and
product.

This feature can be disabled by the customer if they wish.

To do this, we expose this function:

```kotlin 
// file MealzManager.kt
import com.miam.core.Mealz

class MiamManager(val appContext: Context) {    
    // allow profiling -> can we use your personal data to provide custom recipes?
    Mealz.user.setProfilingAllowance(allowance: true)
}
```

## Like recipe

You can disable the Like feature as well

```kotlin 
// file MealzManager.kt
import com.miam.core.Mealz

class MiamManager(val appContext: Context) {    
    // allow users to heart recipes
    Mealz.user.setEnableLike(isEnable: true)
}
```

:::note
The like feature will be set to TRUE by default
:::

## AuthLess

AuthLess mode alow mealz to create an anonymous user and to find back previous list of none connected user.
Once user connect on your app Mealz will merge anonymous user's list to the conected user's one

:::info
AuthLess user feature is only available since version 4.1 and above 
:::

You can enable AuthLess feature in mealz initialisation

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
            option { isAnonymousModeEnabled = true}
        }
        isInitialized = true
    }
}
```
:::info
**isAnonymousModeEnabled** is defaulted to **false**
:::

You can also provide to Mealz a redirection function to your login page. Then we'll use this function when user connection become mandatory. In this case there is no anonymous user but you can still show mealz recipe even if mealz don't have all information it needs

```kotlin
import ai.mealz.core.Mealz

object MealzManager {

    private var isInitialized = false

    public fun initialize(applicationContext: Context){
        Mealz.user.setSignInRedirection =  { /** your signin navigation method*/ }
        Mealz.Core {
            sdkRequirement {
                key = supplierKey
                context = applicationContext
                }   
            option { isAnonymousModeEnabled = false}
        }
        isInitialized = true
    }
}
```
:::warning
 if **isAnonymousModeEnabled** is set to **true** Mealz will **never** call your redirection function
:::
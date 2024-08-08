```kotlin
import ai.mealz.core.Mealz

object MealzManager {

    private var isInitialized = false
    private val basketService: MyBasketService = MyBasketService()  

    public fun initialize(applicationContext: Context) {
        Mealz.Core {
            sdkRequirement {
                key = supplierKey
                context = applicationContext
                }   
            subscriptions {
                basket {
                    // Listen to Miam's basket updates
                    subscribe(basketService)
                    // Push client basket notifications
                    register(basketService)
                }
            }
        }
        isInitialized = true
    }
}
```
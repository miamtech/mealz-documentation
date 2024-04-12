```swift
private val basketService: MyBasketService = MyBasketService()    
    
// MEALZ SDK INIT
Mealz.Core() {
    sdkRequirement {
        key = supplierKey
        context = appContext
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
```
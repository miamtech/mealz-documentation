```swift
let demoBasketService = DemoBasketService(initialBasketList: PretendBasket.shared.items)
        
Mealz.shared.Core(init: { coreBuilder in
    // set supplier key
    coreBuilder.sdkRequirement(init: { requirementBuilder in
        requirementBuilder.key = supplierKey
    })
    // set listeners & notifiers
    coreBuilder.subscriptions(init:  { subscriptionBuilder in
        subscriptionBuilder.basket(init: { basketSubscriptionBuilder in
            // subscribe
            basketSubscriptionBuilder.subscribe(subscriber: demoBasketService)
            // push updates
            basketSubscriptionBuilder.register(publisher: demoBasketService)
        })
    })
})
```
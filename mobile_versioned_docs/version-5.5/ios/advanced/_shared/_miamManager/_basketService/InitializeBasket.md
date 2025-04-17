In our implementation, we create an initializer to pass our DemoProducts into before translating them.
Here is our code:

```swift
init(initialBasketList: [PretendProduct]) {
    self.initialValue = [] // First, initialize all properties as [] so we can use pretendProductsToRetailerProducts
        
    if initialBasketList.count > 0 {
        // Now convert (safely) if we have products
        self.initialValue = pretendProductsToRetailerProducts(products: initialBasketList)
    }
}
```

So now in our MealzManager, we can call:
```swift
let demoBasketService = DemoBasketService(initialBasketList: PretendBasket.shared.items)
```
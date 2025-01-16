We think it's best to start to create a new class that implements our new protocols.
You can copy this & change the name:

```swift
class YourNewBasketService: BasketSubscriber, BasketPublisher {
    var initialValue: [SupplierProduct]
    
    func receive(event: [SupplierProduct]) {
        <#code#>
    }
    
    func onBasketUpdate(sendUpdateToSDK: @escaping ([SupplierProduct]) -> Void) {
        <#code#>
    }
}
```

:::info
IMPORTANT: For all upcoming code examples, we will use `PretendProduct` to replicate YOUR product.
In your implementation, use your actual Product class.
:::

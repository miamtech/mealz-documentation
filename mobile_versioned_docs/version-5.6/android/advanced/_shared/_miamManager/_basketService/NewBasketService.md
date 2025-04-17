We think it's best to start to create a new class that implements our new protocols.
You can copy this & change the name:

```kotlin
class YourNewBasketService(): BasketPublisher, BasketSubscriber, CoroutineScope by CoroutineScope(Dispatchers.Main) {
    override var initialValue: List<SupplierProduct>
    
    override fun onBasketUpdate(sendUpdateToSDK: (List<SupplierProduct>) -> Unit) {
        TODO("Not yet implemented")
    }

    override fun receive(event: List<SupplierProduct>) {
        TODO("Not yet implemented")
    }
}
```
:::danger
IMPORTANT: For all upcoming code examples, we will use `MyProduct` to replicate **YOUR** product.
In your implementation, use your actual Product class.
:::
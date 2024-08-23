In our implementation, we create an observable that watches the state of your basket & listens for updates.
This observable is inside our `BasketService` sample implementation.
Here is our code:

```kotlin
class MyBasketService(): BasketPublisher, BasketSubscriber, CoroutineScope by CoroutineScope(Dispatchers.Main) {

    // we observe all the changes to your basket
    private val _RetailerBasketSubject: MutableStateFlow<ExampleState> = MutableStateFlow(pretendExampleState)

    // we set the initialValue of the BasketService to the items currently in your basket
    override var initialValue: List<SupplierProduct> = _RetailerBasketSubject.value.items.map { SupplierProduct(it.id, it.quantity, it.name, it.image) }
```

So now in our MealzManager or your local DI, we can call:
```kotlin
private val basketService: MyBasketService = MyBasketService()
```
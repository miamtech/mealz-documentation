```kotlin
override fun onBasketUpdate(sendUpdateToSDK: (List<SupplierProduct>) -> Unit) {
    launch {
        _RetailerBasketSubject.collect { state ->
            LogHandler.debug("[New Mealz] push basket update from supplier")
            sendUpdateToSDK(state.items.map { SupplierProduct(it.id, it.quantity) })
        }
    }
}
```
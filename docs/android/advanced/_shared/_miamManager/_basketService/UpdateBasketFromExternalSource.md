You'll need to create a new function, ours is named `updateBasketFromExternalSource` that accepts a list of SupplierProducts & updates your basket.
The function will iterate through the new products, checking if they are in your basket.
If yes, they will either delete them (if the quantity is 0), or update their quantity & info.
If no, they will be added to your basket.

IMPORTANT: you'll want to use `runBlocking` inside this function so that you can edit your basket ***all at once***.
If you update your basket with each product iteration, you will have unexpected behavior (& increase time complexity as you'll be iterating through a growing list).

Here is our example:

```kotlin
fun updateBasketFromExternalSource(products: List<SupplierProduct>) {
    runBlocking {
        products.forEach { sp ->
            val productToUpdateIdx =
                _RetailerBasketSubject.value.items.indexOfFirst { it.id == sp.id }
            if (productToUpdateIdx == -1) {
                val product = MyProduct(
                    sp.id,
                    attributes = ProductAttributes(name = sp.name ?: "a name", image = sp.imageURL ?: "", price = 1.0),
                    quantity = sp.quantity
                )
                _RetailerBasketSubject.value.add(product)
            } else if (sp.quantity == 0) {
                _RetailerBasketSubject.value.removeItem(productToUpdateIdx)
            } else {
                _RetailerBasketSubject.value.replaceItem(
                    index = productToUpdateIdx,
                    newProduct = _RetailerBasketSubject.value.items[productToUpdateIdx].copy(quantity = sp.quantity)
                )
            }
        }
    }

    launch {
        _RetailerBasketSubject.emit(
            ExampleState(
                _RetailerBasketSubject.value.items,
                _RetailerBasketSubject.value.recipeCount
            )
        )
    }
}
```
and then simply:
```kotlin
override fun receive(event: List<SupplierProduct>) {
    updateBasketFromExternalSource(event)
}
```
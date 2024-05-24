You'll need to create a new function, ours is named `updateBasketFromExternalSource` that accepts a list of SupplierProducts & updates your basket.
The function will iterate through the new products, checking if they are in your basket.
If yes, they will either delete them (if the quantity is 0), or update their quantity & info.
If no, they will be added to your basket.   

Here is our example:

```kotlin
fun updateBasketFromExternalSource(products: List<SupplierProduct>) {
    launch {
        products.forEach { sp ->
            val productToUpdateIdx =
                _RetailerBasketSubject.value.items.indexOfFirst { it.id == sp.id }

            // Product to add to your basket
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


:::danger 
Make sure to handle our event in a synchronious way otherwise your basket may emit too early and we might consider 
missing product as deleted.

If for example: 
- we send you a list of two products to add tomato and beans
- then you add tomato and emit your new basket 
- we will consider that beans have been removed

**Good way to proceed** can be to either add products in batches

- we send you a list of two products to add tomato and beans
- then you add tomato and beans in the same time *then* emit your new basket 

or 

- we send you a list of two products to add tomato and beans
- you add tomato without emiting your new basket 
- then add beans then emit your new basket 

:::
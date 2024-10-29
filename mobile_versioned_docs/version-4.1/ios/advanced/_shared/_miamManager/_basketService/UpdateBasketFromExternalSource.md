You'll need to create a new function, ours is named `updateBasketFromExternalSource` that accepts a list of SupplierProducts & updates your basket.
The function will iterate through the new products, checking if they are in your basket.
If yes, they will either delete them (if the quantity is 0), or update their quantity & info.
If no, they will be added to your basket.

:::info
IMPORTANT: you'll want to create a local temporary list inside this function so that you can edit your basket all at once.
If you update your basket with each product iteration, you will have unexpected behavior (& increase time complexity as you'll be iterating through a growing list).
:::

Here is our example:

```swift
private func updateBasketFromExternalSource(products: [SupplierProduct]) {
    // we need to update the basket all at once, otherwise we will have issues with Mealz updating too frequently
    var basketCopy = PretendBasket.shared.items
    
    for product in products {
        // check if we already have the product to remove or update info
        if let productToUpdateIndex = PretendBasket.shared.items.firstIndex(where: { $0.id == product.id }) {
            if product.quantity == 0 { // we know an item is deleted if the qty is 0
                if basketCopy.indices.contains(productToUpdateIndex) {
                    basketCopy.remove(at: productToUpdateIndex)
                }
            } else {
                let item = PretendBasket.shared.items[productToUpdateIndex]
                basketCopy[productToUpdateIndex] = PretendProduct( // your product
                    id: product.id,
                    name: product.name ?? item.name,
                    quantity: product.quantity,
                    imageUrl: product.imageUrl ?? item.imageUrl)
            }
        } else { // otherwise add it to the client basket
            let newProduct = PretendProduct( // your product
                id: product.id,
                name: product.name ?? "product",
                quantity: Int(product.quantity),
                imageUrl: product.imageURL
            )
            basketCopy.append(newProduct)
        }
    }
    // update your basket after all operations
    PretendBasket.shared.items = basketCopy
}
```
and then simply:
```swift
func receive(event: [SupplierProduct]) {
    updateBasketFromExternalSource(products: event)
}
```
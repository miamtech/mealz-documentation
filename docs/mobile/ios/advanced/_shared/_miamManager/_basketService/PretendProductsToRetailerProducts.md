```swift
private func pretendProductsToRetailerProducts(
    products: [PretendProduct]
) -> [SupplierProduct] {
    return products.map {
        return SupplierProduct(
            id: $0.id,
            quantity: Int32($0.quantity),
            name: $0.name,
            productIdentifier: nil,
            imageURL: $0.imageUrl
        )
    }
}
```
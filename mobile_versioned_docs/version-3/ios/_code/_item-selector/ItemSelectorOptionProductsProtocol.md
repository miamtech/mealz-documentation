```swift
ItemSelectorOptionProductsProtocol.content(params: ItemSelectorOptionProductsParameters)
```
where
```swift
ItemSelectorOptionProductsParameters {
    public let products: [Item]
    public let onItemSelected: (Item) -> Void
    public let onSeeItemDetails: (String) -> Void
}
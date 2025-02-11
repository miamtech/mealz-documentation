```swift
RecipeDetailsIgnoredProductProtocol.content(params: RecipeDetailsIgnoredProductParameters)
```
where
```swift
RecipeDetailsIgnoredProductParameters {
    public let ingredientName: String
    public let ingredientQuantity: String?
    public let ingredientUnit: String?
    public let guestsCount: Int
    public let defaultRecipeGuest: Int
    public let onChooseProduct: () -> Void
}
```
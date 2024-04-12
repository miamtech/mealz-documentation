CatalogRecipeCardProtocol.content(params: CatalogRecipeCardParameters)
where
CatalogRecipeCardParameters {
public var recipeCardDimensions: CGSize
public var recipe: Recipe
public var recipePrice: Double
public var numberOfGuests: Int
public var isCurrentlyInBasket: Bool
public var onAddToBasket: (String) -> Void
public var onShowRecipeDetails: (String) -> Void
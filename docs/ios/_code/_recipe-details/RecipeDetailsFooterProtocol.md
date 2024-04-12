RecipeDetailsFooterProtocol.content(params: RecipeDetailsFooterParameters)
where
RecipeDetailsFooterParameters {
public let totalPriceOfProductsAdded: Double
public let totalPriceOfProductsAddedPerGuest: Double
public let recipeStickerPrice: Double
public let numberOfGuests: Int
public let priceStatus: ComponentUiState
public let ingredientsStatus: IngredientStatus
public let isAddingAllIngredients: Bool
public let cookOnlyMode: Bool
public let currentSelectedTab: SelectedControlPage
public let callToAction: () -> Void
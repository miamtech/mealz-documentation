MyMealRecipeCardProtocol.content(params: MyMealRecipeCardParameters)
where
MyMealRecipeCardParameters {
public let recipeCardDimensions: CGSize
public let recipe: Recipe
public let numberOfGuests: Int
public let recipePrice: Double
public let numberOfProductsInRecipe: Int
public let isDeleting: Bool
public let onDeleteRecipe: () -> Void
public let onShowRecipeDetails: (String) -> Void
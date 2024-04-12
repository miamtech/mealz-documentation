RecipeDetailsHeaderProtocol.content(params: RecipeDetailsHeaderParameters)
where
RecipeDetailsHeaderParameters {
public let mediaURL: String?
public let title: String
public let difficulty: Int
public let totalTime: String
public let preparationTime: String
public let cookingTime: String
public let restingTime: String
public let isLikeEnabled: Bool
public let recipeId: String
public let recipeGuests: Int
public let currentGuests: Int
public let guestUpdating: Bool
public let isForMealPlanner: Bool
public let tags: [RecipeDetailTags]

public let onRecipeDetailsClosed: () -> Void
public let onUpdateGuests: (Int) -> Void
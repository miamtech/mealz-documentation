RecipeDetailsAddedProductProtocol.content(params: RecipeDetailsAddedProductParameters)
where
RecipeDetailsAddedProductParameters {
public let data: RecipeProductData
public let updatingQuantity: Bool
public let onDeleteProduct: () -> Void
public let onChangeProduct: () -> Void
public let updateProductQuantity: (Int) -> Void
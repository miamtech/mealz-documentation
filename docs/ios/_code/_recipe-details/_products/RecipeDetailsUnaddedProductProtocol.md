RecipeDetailsUnaddedProductProtocol.content(params: RecipeDetailsUnaddedProductParameters)
where
RecipeDetailsUnaddedProductParameters {
public let data: RecipeProductData
public let onAddProduct: () -> Void
public let onIgnoreProduct: () -> Void
public let onChooseProduct: () -> Void
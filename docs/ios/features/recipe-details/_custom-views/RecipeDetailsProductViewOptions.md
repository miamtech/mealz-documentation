#### Products - `RecipeDetailsProductViewOptions`

```swift
import MealziOSSDK

static let recipeDetailsProductViewOptions = RecipeDetailsProductViewOptions(
    ignoredProduct = TypeSafeRecipeDetailsIgnoredProduct(/* your new view*/),
    unaddedProduct = TypeSafeRecipeDetailsUnaddedProduct(/* your new view*/),
    addedProduct = TypeSafeRecipeDetailsAddedProduct(/* your new view*/),
    loadingProduct = TypeSafeLoading(/* your new view*/)
)
```
Components:
- [RecipeDetailsIgnoredProduct](../components/products/RecipeDetailsIgnoredProduct.mdx)
- [RecipeDetailsUnaddedProduct](../components/products/RecipeDetailsUnaddedProduct.mdx)
- [RecipeDetailsAddedProductProtocol](../components/products/RecipeDetailsAddedProduct.mdx)
- [RecipeDetailsLoadingProduct](../components/products/RecipeDetailsLoadingProduct.mdx)

#### Products - `RecipeDetailsProductViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let recipeDetailsProductViewOptions = RecipeDetailsProductViewOptions(
    ignoredProduct = TypeSafeRecipeDetailsIgnoredProduct(/* your new view*/),
    unaddedProduct = TypeSafeRecipeDetailsUnaddedProduct(/* your new view*/),
    addedProduct = TypeSafeRecipeDetailsAddedProduct(/* your new view*/),
    loadingProduct = TypeSafeLoading(/* your new view*/)
)
```
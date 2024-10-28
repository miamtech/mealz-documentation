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
Protocols:
- [RecipeDetailsIgnoredProductProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsignoredproductprotocol)
- [RecipeDetailsUnaddedProductProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsunaddedproductprotocol)
- [RecipeDetailsAddedProductProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsaddedproductprotocol)
- [LoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/loadingprotocol)

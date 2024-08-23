#### Package Row - `CatalogPackageRowViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let packageRowViewOptions = CatalogPackageRowViewOptions(
    callToAction: TypeSafeCatalogPackageCTA(/* your new view*/),
    recipeCard: TypeSafeCatalogRecipeCard(/* your new view*/),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* your new view*/)
)
```
Protocols:
- [CatalogPackageCTAProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogpackagectaprotocol)
- [CatalogRecipeCardProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogrecipecardprotocol)
- [RecipeCardLoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipecardloadingprotocol)
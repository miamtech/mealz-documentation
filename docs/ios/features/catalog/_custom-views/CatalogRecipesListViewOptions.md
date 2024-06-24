#### Catalog Recipes List - `CatalogRecipesListViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let recipesListViewOptions = CatalogRecipesListViewOptions(
    recipeCard: TypeSafeCatalogRecipeCard(/* your new view*/),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* your new view*/),
    title: TypeSafeBaseTitle(/* your new view*/),
    noResults: TypeSafeCatalogRecipesListNoResults(/* your new view*/),
    loading: TypeSafeLoading(/* your new view*/)
)
```
Protocols:
- [CatalogRecipeCardProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogrecipecardprotocol)
- [RecipeCardLoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipecardloadingprotocol)
- [BaseTitleProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/basetitleprotocol)
- [CatalogRecipesListNoResultsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogrecipeslistnoresultsprotocol)
- [LoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/loadingprotocol)

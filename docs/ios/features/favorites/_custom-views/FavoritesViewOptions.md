#### Favorites - `FavoritesViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let favoritesViewOptions = FavoritesViewOptions(
    title: TypeSafeBaseTitle(/* your new view*/),
    recipeCard: TypeSafeCatalogRecipeCard(/* your new view*/),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* your new view*/)
)
```
Protocols:
- [BaseTitleProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/basetitleprotocol)
- [CatalogRecipeCardProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogrecipecardprotocol)
- [RecipeCardLoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipecardloadingprotocol)
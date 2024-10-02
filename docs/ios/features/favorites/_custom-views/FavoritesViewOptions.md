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
Components:
- [FavoritesTitle](../components/FavoritesTitle.mdx)
- [CatalogRecipeCard](../../recipe-card/components/CatalogRecipeCard.mdx)
- [RecipeCardLoading](../../recipe-card/components/RecipeCardLoading.mdx)
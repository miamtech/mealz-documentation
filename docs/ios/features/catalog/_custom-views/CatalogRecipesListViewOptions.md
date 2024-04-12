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
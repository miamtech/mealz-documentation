#### Catalog Recipes List - `CatalogRecipesListViewOptions`

```swift
import MealziOSSDK

static let recipesListViewOptions = CatalogRecipesListViewOptions(
    recipeCard: TypeSafeCatalogRecipeCard(/* your new view*/),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* your new view*/),
    title: TypeSafeBaseTitle(/* your new view*/),
    noResults: TypeSafeCatalogRecipesListNoResults(/* your new view*/),
    loading: TypeSafeLoading(/* your new view*/)
)
```
Components:
- [CatalogRecipeCard](../../recipe-card/components/CatalogRecipeCard.mdx)
- [RecipeCardLoading](../../recipe-card/components/RecipeCardLoading.mdx)
- [RecipesListTitle](../components/catalog-recipes-list/RecipesListTitle.mdx)
- [CatalogRecipesListNoResults](../components/catalog-recipes-list/CatalogRecipesListNoResults.mdx)
- [Loading](../../base-page-views/Loading.mdx)

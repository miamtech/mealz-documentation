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
Components:
- [CatalogPackageCTA](../components/package-row/CatalogPackageCTA.mdx)
- [CatalogRecipeCard](../../recipe-card/components/CatalogRecipeCard.mdx)
- [RecipeCardLoading](../../recipe-card/components/RecipeCardLoading.mdx)
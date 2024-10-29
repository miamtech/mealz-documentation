#### Catalog View - `CatalogViewOptions`

```swift
import MealziOSSDK

static let catalogViewOptions = CatalogViewOptions(
    catalogToolbar: TypeSafeCatalogToolbar(/* your new view*/),
    resultsToolbar: TypeSafeCatalogToolbar(/* your new view*/),
    mealPlannerCTA: TypeSafeMealPlannerCTA(/* your new view*/),
    mealsInBasketButtonSuccess: TypeSafeMealsInBasketButtonSuccess(/* your new view*/),
    mealsInBasketButtonEmpty: TypeSafeEmpty(/* your new view*/)
)
```
Components:
- [CatalogToolbar](../components/CatalogToolbar.mdx)
- [MealPlannerCTA](../components/MealPlannerCTA.mdx)
- [MealsInBasketButtonSuccess](../components/MealsInBasketButton.mdx)
- [MealsInBasketButtonEmpty](../components/MealsInBasketButtonEmpty.mdx)
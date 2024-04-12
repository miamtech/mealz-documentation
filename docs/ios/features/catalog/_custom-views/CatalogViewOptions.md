#### Catalog View - `CatalogViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let catalogViewOptions = CatalogViewOptions(
    catalogToolbar: TypeSafeCatalogToolbar(/* your new view*/),
    resultsToolbar: TypeSafeCatalogToolbar(/* your new view*/),
    mealPlannerCTA: TypeSafeMealPlannerCTA(/* your new view*/),
    mealsInBasketButtonSuccess: TypeSafeMealsInBasketButtonSuccess(/* your new view*/),
    mealsInBasketButtonEmpty: TypeSafeEmpty(/* your new view*/)
)
```
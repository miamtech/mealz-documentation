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
Protocols:
- [CatalogToolbarProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogtoolbarprotocol)
- [MealPlannerCTAProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/mealplannerctaprotocol)
- [MealsInBasketButtonSuccessProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/mealsinbasketbuttonsuccessprotocol)
- [EmptyProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/emptyprotocol)
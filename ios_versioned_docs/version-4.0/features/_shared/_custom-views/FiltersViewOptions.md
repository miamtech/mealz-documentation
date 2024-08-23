#### Filters - `FiltersViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let filtersViewOptions = FiltersViewOptions(
    header: TypeSafeFiltersHeader(/* your new view*/),
    callToAction: TypeSafeFiltersCTA(/* your new view*/),
    section: TypeSafeFiltersSection(/* your new view*/),
    background: TypeSafeBackground(/* your new view*/)
)
```
Protocols:
- [FiltersHeaderProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/filtersheaderprotocol)
- [FiltersCTAProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/filtersctaprotocol)
- [FiltersSectionProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/filterssectionprotocol)
- [BackgroundProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/backgroundprotocol)

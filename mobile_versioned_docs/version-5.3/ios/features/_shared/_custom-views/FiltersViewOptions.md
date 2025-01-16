#### Filters - `FiltersViewOptions`

```swift
import MealziOSSDK

static let filtersViewOptions = FiltersViewOptions(
    header: TypeSafeFiltersHeader(/* your new view*/),
    callToAction: TypeSafeFiltersCTA(/* your new view*/),
    section: TypeSafeFiltersSection(/* your new view*/),
    background: TypeSafeBackground(/* your new view*/)
)
```
Components:
- [FiltersHeader](../../catalog/components/filters/Header.mdx)
- [FiltersCTA](../../catalog/components/filters/CTA.mdx)
- [FiltersSection](../../catalog/components/filters/Section.mdx)
- [Background](../../base-page-views/Background.mdx)

## Base Views

### View Options

#### Base Views - `BasePageViewParameters`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let baseViews = BasePageViewParameters(
    loading: TypeSafeLoading(/* your new view*/),
    empty: TypeSafeEmpty(/* your new view*/),
    background: TypeSafeBackground(/* your new view*/)
)
```
## Base Views

### View Options

#### Base Views - `BasePageViewParameters`

```swift
import MealzUIiOSSDK
import MealziOSSDK

static let baseViews = BasePageViewParameters(
    loading: TypeSafeLoading(/* your new view*/),
    empty: TypeSafeEmpty(/* your new view*/),
    background: TypeSafeBackground(/* your new view*/)
)
```

Protocols:
- [LoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/loadingprotocol)
- [EmptyProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/emptyprotocol)
- [BackgroundProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/backgroundprotocol)


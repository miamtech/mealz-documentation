#### Preferences - `PreferencesViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let preferencesViewOptions = PreferencesViewOptions(
    guestSection: TypeSafePreferencesGuest(/* your new view*/),
    dietSection: TypeSafePreferencesDiet(/* your new view*/),
    ingredientsSection: TypeSafePreferencesIngredients(/* your new view*/),
    equipmentSection: TypeSafePreferencesEquipment(/* your new view*/),
    footer: TypeSafePreferencesFooter(/* your new view*/)
)
```
Protocols:
- [PreferencesGuestProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/preferencesguestprotocol)
- [PreferencesDietProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/preferencesdietprotocol)
- [PreferencesIngredientsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/preferencesingredientsprotocol)
- [PreferencesEquipmentProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/preferencesequipmentprotocol)
- [PreferencesFooterProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/preferencesfooterprotocol)

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
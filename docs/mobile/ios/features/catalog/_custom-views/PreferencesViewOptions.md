#### Preferences - `PreferencesViewOptions`

```swift
import MealziOSSDK

static let preferencesViewOptions = PreferencesViewOptions(
    guestSection: TypeSafePreferencesGuest(/* your new view*/),
    dietSection: TypeSafePreferencesDiet(/* your new view*/),
    ingredientsSection: TypeSafePreferencesIngredients(/* your new view*/),
    equipmentSection: TypeSafePreferencesEquipment(/* your new view*/),
    footer: TypeSafePreferencesFooter(/* your new view*/)
)
```
Components:
- [PreferencesGuest](../components/preferences/Guest.mdx)
- [PreferencesDiet](../components/preferences/Diet.mdx)
- [PreferencesIngredients](../components/preferences/Ingredients.mdx)
- [PreferencesEquipment](../components/preferences/Equipment.mdx)
- [PreferencesFooter](../components/preferences/Footer.mdx)

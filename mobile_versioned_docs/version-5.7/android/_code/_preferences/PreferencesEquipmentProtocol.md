```kotlin 
interface PreferencesEquipmentSection {
    @Composable
    fun Content(params: PreferencesEquipmentSectionParameters)
}
```
where

```kotlin 
data class PreferencesEquipmentSectionParameters(
    val equipmentsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit
)
```
```koltin 
interface PreferencesEquipmentSection {
    @Composable
    fun Content(params: PreferencesEquipmentSectionParameters){

    }
}
```
where
```koltin 
data class PreferencesEquipmentSectionParameters(
    val equipmentsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit
)
```
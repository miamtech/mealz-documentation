```kotlin 
interface PreferencesIngredientSection {
    @Composable
    fun Content(params: PreferencesIngredientSectionParameters)
}
```
where
```kotlin 
data class PreferencesIngredientSectionParameters(
    val ingredientsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit,
    val goToSearch: () -> Unit
)
```
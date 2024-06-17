```koltin 
interface PreferencesIngredientSection {
    @Composable
    fun Content(params: PreferencesIngredientSectionParameters){

    }
}
```
where
```koltin 
data class PreferencesIngredientSectionParameters(
    val ingredientsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit,
    val goToSearch: () -> Unit
)
```
interface PreferencesIngredientSection {
    @Composable
    fun Content(params: PreferencesIngredientSectionParameters)
}
where
data class PreferencesIngredientSectionParameters(
    val ingredientsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit,
    val goToSearch: () -> Unit
)
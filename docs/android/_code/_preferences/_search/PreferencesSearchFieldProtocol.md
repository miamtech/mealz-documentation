interface PreferencesSearchField {
    @Composable
    fun Content(param: PreferencesSearchFieldParameters)
}
where
data class PreferencesSearchFieldParameters(
    val back: () -> Unit,
    val onChange: (value: String) -> Unit
)
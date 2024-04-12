interface PreferencesSearchResultRow {
    @Composable
    fun Content(param: PreferencesSearchResultRowParameters)
}
where
data class PreferencesSearchResultRowParameters(
    val name: String,
    val select: () -> Unit
)
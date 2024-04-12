interface PreferencesFooter {
    @Composable
    fun Content(params: PreferencesFooterParameters)
}
where
data class PreferencesFooterParameters(
    val recipesFound: Int,
    val closePref: () -> Unit,
    val applyPref: () -> Unit
)
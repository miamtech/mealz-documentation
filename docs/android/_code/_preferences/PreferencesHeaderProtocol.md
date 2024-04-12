interface PreferencesSuccessHeader {
    @Composable
    fun Content(params: PreferencesSuccessHeaderParameters)
}
where
data class PreferencesSuccessHeaderParameters(val close: () -> Unit)
interface PreferencesGuestSection {
    @Composable
    fun Content(params: PreferencesGuestSectionParameters)
}
where
data class PreferencesGuestSectionParameters(
    val guests: Int?,
    val guestChanged: (count: Int) -> Unit
)
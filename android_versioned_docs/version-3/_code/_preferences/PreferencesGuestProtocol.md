```koltin 
interface PreferencesGuestSection {
    @Composable
    fun Content(params: PreferencesGuestSectionParameters){

    }
}
```
where
```koltin 
data class PreferencesGuestSectionParameters(
    val guests: Int?,
    val guestChanged: (count: Int) -> Unit
)
```
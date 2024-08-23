```kotlin 
interface PreferencesGuestSection {
    @Composable
    fun Content(params: PreferencesGuestSectionParameters)
}
```
where
```kotlin 
data class PreferencesGuestSectionParameters(
    val guests: Int?,
    val guestChanged: (count: Int) -> Unit
)
```
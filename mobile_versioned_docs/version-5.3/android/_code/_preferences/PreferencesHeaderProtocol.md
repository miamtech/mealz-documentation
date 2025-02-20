```kotlin 
interface PreferencesSuccessHeader {
    @Composable
    fun Content(params: PreferencesSuccessHeaderParameters)
}
```
where
```kotlin 
data class PreferencesSuccessHeaderParameters(val close: () -> Unit)
```
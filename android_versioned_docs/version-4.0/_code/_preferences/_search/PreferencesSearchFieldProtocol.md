```kotlin 
interface PreferencesSearchField {
    @Composable
    fun Content(param: PreferencesSearchFieldParameters)
}
```
where

```kotlin 
data class PreferencesSearchFieldParameters(
    val back: () -> Unit,
    val onChange: (value: String) -> Unit
)
```
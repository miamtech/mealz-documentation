```kotlin 
interface PreferencesSearchResultRow {
    @Composable
    fun Content(param: PreferencesSearchResultRowParameters)
}
```
where

```kotlin 
data class PreferencesSearchResultRowParameters(
    val name: String,
    val select: () -> Unit
)
```
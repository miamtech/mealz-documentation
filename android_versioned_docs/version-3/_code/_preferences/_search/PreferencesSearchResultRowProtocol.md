```koltin 
interface PreferencesSearchResultRow {
    @Composable
    fun Content(param: PreferencesSearchResultRowParameters){

    }
}
```
where

```koltin 
data class PreferencesSearchResultRowParameters(
    val name: String,
    val select: () -> Unit
)
```
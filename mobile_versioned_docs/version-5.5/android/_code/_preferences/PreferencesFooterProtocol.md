```kotlin 
interface PreferencesFooter {
    @Composable
    fun Content(params: PreferencesFooterParameters)
}
```
where

```kotlin 
data class PreferencesFooterParameters(
    val recipesFound: Int,
    val closePref: () -> Unit,
    val applyPref: () -> Unit
)
```
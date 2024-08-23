```kotlin 
interface PreferencesDietSection {
    @Composable
    fun Content(params: PreferencesDietSectionParameters)
}
```
where

```kotlin 
data class PreferencesDietSectionParameters(
    val dietsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit
)
```
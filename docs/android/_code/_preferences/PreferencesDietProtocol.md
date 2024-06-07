```koltin 
interface PreferencesDietSection {
    @Composable
    fun Content(params: PreferencesDietSectionParameters){

    }
}
```
where
```koltin 
data class PreferencesDietSectionParameters(
    val dietsTag: `List<CheckableTag>`,
    val togglePreference: (tagIdToToggle: String) -> Unit
)
```
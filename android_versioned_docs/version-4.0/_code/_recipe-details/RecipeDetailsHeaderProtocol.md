```kotlin 
interface RecipeDetailHeader {
    @Composable
    fun Content(params: RecipeDetailHeaderParameters)
}
```
where
```kotlin 
data class RecipeDetailHeaderParameters(
    val title: String,
    val closeDialogue: () -> Unit
)
```
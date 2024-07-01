```koltin 
interface RecipeDetailHeader {
    @Composable
    fun Content(params: RecipeDetailHeaderParameters){

    }
}
```
where
```koltin 
data class RecipeDetailHeaderParameters(
    val title: String,
    val closeDialogue: () -> Unit
)
```
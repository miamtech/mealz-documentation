```koltin 
interface RecipeDetailSteps {
    @Composable
    fun Content(params: RecipeDetailStepsParamters){

    }
}
```
where

```koltin 
data class RecipeDetailStepsParamters(
    val steps: `List<RecipeStep>`
)
```
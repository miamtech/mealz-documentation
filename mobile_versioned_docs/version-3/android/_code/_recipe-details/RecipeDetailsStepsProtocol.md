```kotlin 
interface RecipeDetailSteps {
    @Composable
    fun Content(params: RecipeDetailStepsParamters){

    }
}
```
where

```kotlin 
data class RecipeDetailStepsParamters(
    val steps: `List<RecipeStep>`
)
```
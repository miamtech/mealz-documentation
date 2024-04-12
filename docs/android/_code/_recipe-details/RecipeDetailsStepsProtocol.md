interface RecipeDetailSteps {
    @Composable
    fun Content(params: RecipeDetailStepsParamters)
}
where
data class RecipeDetailStepsParamters(
    val steps: `List<RecipeStep>`
)
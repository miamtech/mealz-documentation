interface RecipeDetailHeader {
    @Composable
    fun Content(params: RecipeDetailHeaderParameters)
}
where
data class RecipeDetailHeaderParameters(
    val title: String,
    val closeDialogue: () -> Unit
)
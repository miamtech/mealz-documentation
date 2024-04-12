interface MyMealRecipeCardSuccess {
    @Composable
    fun Content(params: MyMealRecipeCardSuccessParameters)
}
where
data class MyMealRecipeCardSuccessParameters(
    val recipe: Recipe,
    val totalPrice: Double,
    val guestCount: Int,
    val numberOfProductsInRecipe: Int,
    val isDeleting: Boolean,
    val openRecipeDetail: () -> Unit,
    val delete: () -> Unit
)
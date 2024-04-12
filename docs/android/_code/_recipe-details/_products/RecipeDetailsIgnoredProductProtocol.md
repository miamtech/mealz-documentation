interface ProductIgnore {
@Composable
fun Content(params: ProductIgnoreParameters)
}
where
data class ProductIgnoreParameters(
val ingredientName: String,
val ingredientQuantity: String,
val ingredientUnit: String,
val guestsCount: `MutableStateFlow<Int>`,
val defaultRecipeGuest: Int,
val chooseProduct: () -> Unit
)
interface ProductSuccess {
    @Composable
    fun Content(params: ProductSuccessParameters)
}
where
data class ProductSuccessParameters(
val productName: String,
val productBrand: String,
val productQuantity: Int,
val productCapacityVolume: String,
val productUnit: String,
val productPrice: String,
val productImage: String,
val ingredientName: String,
val ingredientQuantity: String,
val ingredientUnit: String,
val guestsCount: `MutableStateFlow<Int>`,
val defaultRecipeGuest: Int,
val numberOfRecipeConcernsByProduct: Int,
val isLocked: Boolean,
val isSponsored: Boolean,
val isInBasket: Boolean,
val ean: String,
val replaceProduct: () -> Unit,
val ignoreProduct: () -> Unit,
val addProduct: () -> Unit,
val updateProductQuantity: (Int) -> Unit
)
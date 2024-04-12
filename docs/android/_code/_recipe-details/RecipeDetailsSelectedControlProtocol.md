interface Swapper {
    @Composable
    fun Content(params : SwapperParameters)
}
where
data class SwapperParameters constructor(
    val isShopping: Boolean,
    val toggle: () -> Unit
)
interface ItemSelectorSearch {
    @Composable
    fun Content(params: ItemSelectorSearchParameters)
}
where
data class ItemSelectorSearchParameters(
    val ingredientName: String,
    val ingredientQuantity: Int,
    val ingredientUnit: String,
    val onChanges: (String) -> Unit
)

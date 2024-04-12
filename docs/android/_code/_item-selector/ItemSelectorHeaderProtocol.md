interface ItemSelectorHeader {
    @Composable
    fun Content(params: ItemSelectorHeaderParameters)
}
where
data class ItemSelectorHeaderParameters(val previous: () -> Unit)
interface ItemSelectorSelectedItem {
    @Composable
    fun Content(params: ItemSelectorSelectedItemParameters)
}
where
data class ItemSelectorSelectedItemParameters(val selectedItem: Item)
```koltin 
interface ItemSelectorSearch {
    @Composable
    fun Content(params: ItemSelectorSearchParameters){

    }
}
```
where
```koltin 
data class ItemSelectorSearchParameters(
    val ingredientName: String,
    val ingredientQuantity: Int,
    val ingredientUnit: String,
    val onChanges: (String) -> Unit
)
```

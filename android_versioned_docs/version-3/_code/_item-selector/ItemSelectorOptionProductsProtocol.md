```koltin 
interface ItemSelectorSuccess {
    @Composable
    fun Content(params: ItemSelectorSuccessParameters)
}
```
where

```koltin 
data class ItemSelectorSuccessParameters(
    val items: `List<Item>`,
    val previous: () -> Unit,
    val select: (Item) -> Unit
)
```
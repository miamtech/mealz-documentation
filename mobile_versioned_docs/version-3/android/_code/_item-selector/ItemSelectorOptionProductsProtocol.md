```kotlin 
interface ItemSelectorSuccess {
    @Composable
    fun Content(params: ItemSelectorSuccessParameters)
}
```
where

```kotlin 
data class ItemSelectorSuccessParameters(
    val items: `List<Item>`,
    val previous: () -> Unit,
    val select: (Item) -> Unit
)
```
```kotlin 
interface ItemSelectorSelectedItem {
    @Composable
    fun Content(params: ItemSelectorSelectedItemParameters)
}
```
where

```kotlin 
data class ItemSelectorSelectedItemParameters(val selectedItem: Item)
```
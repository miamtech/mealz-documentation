```koltin 
interface ItemSelectorSelectedItem {
    @Composable
    fun Content(params: ItemSelectorSelectedItemParameters){

    }
}
```
where

```koltin 
data class ItemSelectorSelectedItemParameters(val selectedItem: Item)
```
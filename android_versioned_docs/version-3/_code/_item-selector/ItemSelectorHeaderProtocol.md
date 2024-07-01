```koltin 
interface ItemSelectorHeader {
    @Composable
    fun Content(params: ItemSelectorHeaderParameters){
        
    }
}
```
where

```koltin 
data class ItemSelectorHeaderParameters(val previous: () -> Unit)
```
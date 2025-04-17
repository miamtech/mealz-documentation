```kotlin 
interface ItemSelectorHeader {
    @Composable
    fun Content(params: ItemSelectorHeaderParameters)
}
```
where

```kotlin 
data class ItemSelectorHeaderParameters(val previous: () -> Unit)
```
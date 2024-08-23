```kotlin 
interface CatalogFloating {
    @Composable
    fun Content(params: CatalogFloatingParameters)
}
```
where

```kotlin 
data class CatalogFloatingParameters(
    val onClickAction: () -> Unit
)
```
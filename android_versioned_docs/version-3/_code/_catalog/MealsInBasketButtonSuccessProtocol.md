```koltin 
interface CatalogFloating {
    @Composable
    fun Content(params: CatalogFloatingParameters){

    }
}
```
where

```koltin 
data class CatalogFloatingParameters(
    val onClickAction: () -> Unit
)
```
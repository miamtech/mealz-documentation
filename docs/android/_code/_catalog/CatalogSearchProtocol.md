```koltin 
interface CatalogSuccessSearch {
    @Composable
    fun Content(params: CatalogSuccessSearchParameters){
    }
}
```

where

```koltin 
data class CatalogSuccessSearchParameters(
    val onClose: () -> Unit,
    val updateSearch: (String) -> Unit,
    val onApply: () -> Unit,
)
```
```koltin 
interface CatalogSuccessToolbar {
    @Composable
    fun Content(params: CatalogSuccessToolbarParameters){
        
    }
}
```
where
```koltin 
data class CatalogSuccessToolbarParameters(
    val content: CatalogContent,
    val openFilter: () -> Unit,
    val openSearch: () -> Unit,
    val goToFavorite: () -> Unit,
    val openPreferences: () -> Unit,
    val getActiveFilterCount: () -> Int,
    val goToBack: () -> Unit
)
```
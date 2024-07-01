```koltin 
interface FilterSuccess {
    @Composable
    fun Content(params: FilterSuccessParameters){

    }
}
```
where

```koltin 
data class FilterSuccessParameters(
    val difficulties: `List<CatalogFilterOptions>`,
    val costs: `List<CatalogFilterOptions>`,
    val times: `List<CatalogFilterOptions>`,
    val onCostFilterChanged: (option: CatalogFilterOptions) -> Unit,
    val onTimeFilterChanged: (option: CatalogFilterOptions) -> Unit,
    val onDifficultyChanged: (option: CatalogFilterOptions) -> Unit,
    val clearFilter: () -> Unit,
    val closeDialog: () -> Unit,
    val applyAndGo: () -> Unit,
    val numberOfResult: Int
)
```
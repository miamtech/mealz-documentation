import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import FilterSuccessProtocol from '../../../_code/_filters/FilterSuccessProtocol.md'

<details>
  <summary>Filters</summary>
  <div>
    <details>
        <summary>Filters View</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogFilterTemplate: (@Composable() (difficulties: List<CatalogFilterOptions>, costs: List<CatalogFilterOptions>,
        times: List<CatalogFilterOptions>, onCostFilterChanged: (option: CatalogFilterOptions) -> Unit,
        onTimeFilterChanged: (option: CatalogFilterOptions) -> Unit, onDifficultyChanged: (option: CatalogFilterOptions) -> Unit,
        clearFilter: () -> Unit, goToFilterResult: () -> Unit, closeDialog: () -> Unit,) -> Unit)?`}
             newCode={<FilterSuccessProtocol/>}/>
    </details>
  </div>
</details>
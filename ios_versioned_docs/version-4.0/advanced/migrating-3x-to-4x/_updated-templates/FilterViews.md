import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as FiltersProtocols from '@site/docs/ios/_code/_filters/'

<details>
  <summary>Filters</summary>
  <div>
    <details>
        <summary>Filters View</summary>
        <CodeUpdateComparison 
oldCode={`catalogFiltersViewTemplate: AnyView?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Section</summary>
        <CodeUpdateComparison 
oldCode={`catalogFiltersSectionTemplate: ((String, Array<CatalogFilterOptions>, @escaping (CatalogFilterOptions) -> Void) -> AnyView)?`}
            newCode={<FiltersProtocols.FiltersSectionProtocol/>}/>
    </details>
<details>
        <summary>Row</summary>
        <CodeUpdateComparison 
oldCode={`catalogFilterRowTemplate: ((CatalogFilterOptions, @escaping (CatalogFilterOptions) -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
  </div>
</details>
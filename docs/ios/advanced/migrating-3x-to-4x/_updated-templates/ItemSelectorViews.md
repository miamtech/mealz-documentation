import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as ItemSelectorProtocols from '@site/docs/ios/_code/_item-selector/'
import LoadingProtocol from '@site/docs/ios/_code/_base/LoadingProtocol.md'

<details>
  <summary>Item Selector</summary>
  <div>
    <details>
        <summary>Current Product</summary>
        <CodeUpdateComparison 
oldCode={`currentProductTemplate: ( (_: BasketPreviewLine) -> AnyView )?`}
            newCode=<ItemSelectorProtocols.ItemSelectorSelectedProductProtocol/>/>
    </details>
    <details>
        <summary>Product Options</summary>
        <CodeUpdateComparison 
oldCode={`productOptionListTemplate: ( (_: [BasketPreviewLine], (BasketPreviewLine, Int) -> Void) -> AnyView )?
`}
            newCode=<ItemSelectorProtocols.ItemSelectorOptionProductsProtocol/>/>
    </details>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`itemSelectorLoadingViewTemplate: ( () -> AnyView )?`}
            newCode=<LoadingProtocol/>/>
    </details>
  </div>
</details>
import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as ItemSelectorProtocols from '../../../_code/_item-selector/'
import LoadingProtocol from '../../../_code/_base/LoadingProtocol.md'
import EmptyProtocol from '../../../_code/_base/EmptyProtocol.md'

<details>
  <summary>Item Selector</summary>
  <div>
    <details>
        <summary>Current Product</summary>
        <CodeUpdateComparison 
oldCode={`var currentProductTemplate: (@Composable() (selectedItem: BasketPreviewLine) -> Unit)?`}
            newCode={<ItemSelectorProtocols.ItemSelectorSelectedProductProtocol/>}/>
    </details>
    <details>
        <summary>Product Options</summary>
        <CodeUpdateComparison 
oldCode={`var productOptionListTemplate: (@Composable() (options: List<BasketPreviewLine>, choose: (index: Int) -> Unit) -> Unit)?`}
            newCode={<ItemSelectorProtocols.ItemSelectorOptionProductsProtocol/>}/>
    </details>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`var itemSelectorLoadingTemplate: (@Composable() (back: () -> Unit) -> Unit)?`}
            newCode={<LoadingProtocol/>}/>
    </details>
<details>
        <summary>Empty</summary>
        <CodeUpdateComparison 
oldCode={`var itemSelectorEmptyTemplate: (@Composable() (back: () -> Unit) -> Unit)?`}
            newCode={<EmptyProtocol/>}/>
    </details>
  </div>
</details>
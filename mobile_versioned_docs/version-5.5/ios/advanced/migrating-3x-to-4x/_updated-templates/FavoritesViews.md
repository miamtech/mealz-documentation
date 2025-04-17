import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import EmptyProtocol from '../../../_code/_base/EmptyProtocol.md'

<details>
  <summary>Favorites</summary>
  <div>
<details>
        <summary>Success</summary>
        <CodeUpdateComparison 
oldCode={`favoritesSuccessViewTemplate: (([Recipe], @escaping () -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Empty</summary>
        <CodeUpdateComparison 
oldCode={`favoritesEmptyViewTemplate: ((@escaping () -> Void) -> AnyView)?`}
            newCode={<EmptyProtocol />}/>
    </details>
  </div>
</details>
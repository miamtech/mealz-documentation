import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import EmptyProtocol from '@site/docs/android/_code/_base/EmptyProtocol.md'
import LazyListLoaderProtocol from '@site/docs/android/_code/_base/LazyListLoaderProtocol.md'

<details>
  <summary>Favorites</summary>
  <div>
<details>
        <summary>Success</summary>
        <CodeUpdateComparison 
oldCode={`favoritesSuccessViewTemplate: (([Recipe], @escaping () -> Void) -> AnyView)?`}
            newCode=<LazyListLoaderProtocol />/>
    </details>
<details>
        <summary>Empty</summary>
        <CodeUpdateComparison 
oldCode={`var emptyFavoritePage: (@Composable() (visitCatalog: () -> Unit,) -> Unit)?`}
            newCode=<EmptyProtocol />/>
    </details>
  </div>
</details>
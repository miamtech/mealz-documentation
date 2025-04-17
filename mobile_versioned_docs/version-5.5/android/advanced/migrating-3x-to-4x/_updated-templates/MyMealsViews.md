import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import EmptyProtocol from '../../../_code/_base/EmptyProtocol.md'
import LoadingProtocol from '../../../_code/_base/LoadingProtocol.md'

<details>
  <summary>My Meals</summary>
  <div>
<details>
        <summary>Action Column</summary>
        <CodeUpdateComparison 
oldCode={`var myMealRecipeExpendableAction: (@Composable() (isExpended: Boolean, expend: () -> Unit, removeRecipe: () -> Unit,) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`var myMealLoaderTemplate: (@Composable() () -> Unit)?`}
            newCode={<LoadingProtocol />}/>
    </details>
<details>
        <summary>Empty</summary>
        <CodeUpdateComparison 
oldCode={`var myMealEmptyTemplate: (@Composable() (onButtonClickedWhenEmpty: () -> Unit) -> Unit)?`}
            newCode={<EmptyProtocol />}/>
    </details>
  </div>
</details>
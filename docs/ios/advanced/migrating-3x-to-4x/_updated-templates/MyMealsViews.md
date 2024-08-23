import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import EmptyProtocol from '../../../_code/_base/EmptyProtocol.md'
import LoadingProtocol from '../../../_code/_base/LoadingProtocol.md'

<details>
  <summary>My Meals</summary>
  <div>
<details>
        <summary>Action Column</summary>
        <CodeUpdateComparison 
oldCode={`myMealsActionColumnTemplate: ((MyMealsActionColumnTemplateParameters) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`myMealsLoadingViewTemplate: (() -> AnyView)?`}
            newCode={<LoadingProtocol />}/>
    </details>
<details>
        <summary>Empty</summary>
        <CodeUpdateComparison 
oldCode={`myMealsEmptyViewTemplate: ((@escaping () -> Void) -> AnyView)?`}
            newCode={<EmptyProtocol />}/>
    </details>
  </div>
</details>
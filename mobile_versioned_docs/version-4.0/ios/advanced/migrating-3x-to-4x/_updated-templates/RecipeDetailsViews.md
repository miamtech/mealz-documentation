import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as RecipeDetailsProtocols from '../../../_code/_recipe-details/'
import LoadingProtocol from '../../../_code/_base/LoadingProtocol.md'

<details>
  <summary>Recipe Details</summary>
  <div>
    <details>
        <summary>Title</summary>
        <CodeUpdateComparison 
oldCode={`recipeDetailsTitleBarTemplate: ((Bool, String) -> AnyView)?`}
            newCode="Removed"/>
    </details>
    <details>
        <summary>Header</summary>
        <CodeUpdateComparison 
oldCode={`recipeDetailsHeaderTemplate: ((String?, String, Int, String, Binding<Bool>,
        Bool, String) -> AnyView)?`}
            newCode={<RecipeDetailsProtocols.RecipeDetailsHeaderProtocol/>}/>
    </details>
    <details>
        <summary>Ingredients</summary>
        <CodeUpdateComparison 
oldCode={`recipeDetailsIngredientsViewTemplate: (([Ingredient], Int, Int, Bool,
        @escaping (Int) -> Void) -> AnyView )?`}
            newCode={<RecipeDetailsProtocols.RecipeDetailsIngredientsProtocol/>}/>
    </details>
    <details>
        <summary>Steps</summary>
        <CodeUpdateComparison 
oldCode={`recipeDetailStepsViewTemplate: (([RecipeStep]) -> AnyView )?`}
            newCode={<RecipeDetailsProtocols.RecipeDetailsStepsProtocol/>}/>
    </details>
<details>
        <summary>Footer</summary>
        <CodeUpdateComparison 
oldCode={`recipeDetailFooterTemplate: ((_: Recipe, _: Int, _: Bool, _: @escaping () -> Void,
        _: @escaping () -> Void) -> AnyView )?`}
            newCode={<RecipeDetailsProtocols.RecipeDetailsFooterProtocol/>}/>
    </details>
    <p>Products have moved to The Recipe Details</p>
<details>
        <summary>Added Product</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode={<RecipeDetailsProtocols.RecipeDetailsAddedProductProtocol/>}/>
    </details>
<details>
        <summary>Unadded Product</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode={<RecipeDetailsProtocols.RecipeDetailsUnaddedProductProtocol/>}/>
    </details>
<details>
        <summary>Ignored Product</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode={<RecipeDetailsProtocols.RecipeDetailsIgnoredProductProtocol/>}/>
    </details>
  </div>
</details>
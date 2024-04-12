import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as RecipeDetailsProtocols from '@site/docs/android/_code/_recipe-details/'
import LoadingProtocol from '@site/docs/android/_code/_base/LoadingProtocol.md'

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
oldCode={`var recipeDetailHeaderTemplate: (@Composable() (closeDetail: () -> Unit, recipe: Recipe) -> Unit)?`}
            newCode=<RecipeDetailsProtocols.RecipeDetailsHeaderProtocol/>/>
    </details>
    <details>
        <summary>Ingredients</summary>
        <CodeUpdateComparison 
oldCode={`var recipeDetailIngredientTemplate: (@Composable() (recipe: Recipe, vmRecipe: RecipeViewModel) -> Unit)?`}
            newCode=<RecipeDetailsProtocols.RecipeDetailsIngredientsProtocol/>/>
    </details>
    <details>
        <summary>Steps</summary>
        <CodeUpdateComparison 
oldCode={`var recipeDetailStepsTemplate: (@Composable() (steps: List<RecipeStep>,vmRecipe: RecipeViewModel) -> Unit)?`}
            newCode=<RecipeDetailsProtocols.RecipeDetailsStepsProtocol/>/>
    </details>
<details>
        <summary>Footer</summary>
        <CodeUpdateComparison 
oldCode={`var recipeDetailFooterTemplate: (@Composable() (recipe: Recipe, vmRecipe: RecipeViewModel, look: () -> Unit,
        buy: () -> Unit) -> Unit)? = null`}
            newCode=<RecipeDetailsProtocols.RecipeDetailsFooterProtocol/>/>
    </details>
    <p>Products have moved to The Recipe Details</p>
<details>
        <summary>Product Success</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode=<RecipeDetailsProtocols.RecipeDetailsProductSuccessProtocol/>/>
    </details>
<details>
        <summary>Ignored Product</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode=<RecipeDetailsProtocols.RecipeDetailsIgnoredProductProtocol/>/>
    </details>
  </div>
</details>
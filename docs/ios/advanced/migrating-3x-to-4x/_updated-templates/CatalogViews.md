import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as CatalogProtocols from '@site/docs/ios/_code/_catalog/'
import RecipeCardLoadingProtocol from '@site/docs/ios/_code/_base/RecipeCardLoadingProtocol.md'
import LoadingProtocol from '@site/docs/ios/_code/_base/LoadingProtocol.md'
import EmptyProtocol from '@site/docs/ios/_code/_base/EmptyProtocol.md'
import SearchProtocol from '@site/docs/ios/_code/_base/SearchProtocol.md'
import BaseTitleProtocol from '@site/docs/ios/_code/_base/BaseTitleProtocol.md'

<details>
  <summary>Catalog</summary>
  <div>
    <details>
        <summary>Recipe Card</summary>
        <CodeUpdateComparison 
oldCode={`recipeCardTemplate: ((Recipe?, Bool, Bool, Bool, @escaping () -> Void, @escaping () -> Void) -> AnyView)?`}
            newCode={<CatalogProtocols.CatalogRecipeCardProtocol/>}/>
    </details>
    <details>
        <summary>Recipe Card Loading</summary>
        <CodeUpdateComparison 
oldCode={`recipeCardLoadingViewTemplate: (() -> AnyView)?`}
            newCode={<RecipeCardLoadingProtocol/>}/>
    </details>
<details>
        <summary>Catalog Loading</summary>
        <CodeUpdateComparison 
oldCode={`catalogLoadingViewTemplate: ((String) -> AnyView)?`}
            newCode={<LoadingProtocol/>}/>
    </details>
<details>
        <summary>Catalog Empty</summary>
        <CodeUpdateComparison 
oldCode={`catalogEmptyViewTemplate: (() -> AnyView)?`}
            newCode={<EmptyProtocol/>}/>
    </details>
<details>
        <summary>Catalog Search</summary>
        <CodeUpdateComparison 
oldCode={`catalogSearchViewTemplate: ((@escaping () -> Void, @escaping () -> Void) -> AnyView)?`}
            newCode={<SearchProtocol/>} />
    </details>
<details>
        <summary>Catalog Recipe No Results</summary>
        <CodeUpdateComparison 
oldCode={`catalogRecipePageNoResultsViewTemplate: ((String, (() -> Void)?, Bool) -> AnyView)?`}
            newCode={<CatalogProtocols.CatalogRecipesListNoResultsProtocol/>}/>
    </details>
<details>
        <summary>Catalog Package Row</summary>
        <CodeUpdateComparison 
oldCode={`catalogPackageRowTemplate: ((CatalogPackage, @escaping (CatalogPackage) -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Header</summary>
        <CodeUpdateComparison 
oldCode={`catalogViewHeaderTemplate: (((() -> Void)?) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Toolbar</summary>
        <CodeUpdateComparison 
oldCode={`catalogViewToolbarTemplate: ((Bool, Bool, @escaping () -> Void, @escaping () -> Void,
        @escaping () -> Void, @escaping () -> Void, @escaping () -> Void
    ) -> AnyView)?`}
            newCode={<CatalogProtocols.CatalogToolbarProtocol/>}/>
    </details>
<details>
        <summary>My Meal Button</summary>
        <CodeUpdateComparison 
oldCode={`public var myMealButtonEmptyViewTemplate: (() -> AnyView)?`}
            newCode={<CatalogProtocols.MealsInBasketButtonSuccessProtocol/>}/>
    </details>
<details>
        <summary>Recipes List Title</summary>
        <CodeUpdateComparison 
oldCode={`recipesListTitleTemplate: ((CatalogPageTitleTemplateParameters) -> AnyView)?`}
            newCode={<BaseTitleProtocol/>}/>
    </details>
<details>
        <summary>Recipes Category List Title</summary>
        <CodeUpdateComparison 
oldCode={`recipesListCategoryTitleTemplate: ((CatalogPageTitleTemplateParameters) -> AnyView)?`}
            newCode={<BaseTitleProtocol/>}/>
    </details>
<details>
        <summary>Recipes Search Title</summary>
        <CodeUpdateComparison 
oldCode={`recipesListSearchTitleTemplate: ((CatalogPageTitleTemplateParameters) -> AnyView)?`}
            newCode={<BaseTitleProtocol/>}/>
    </details>
<details>
        <summary>Recipe Modal</summary>
        <CodeUpdateComparison 
oldCode={`recipeModalTemplate: ((String, RecipeCardVM, Binding<Bool>, Bool, @escaping () -> Void) -> AnyView)? = nil`}
            newCode="Removed"/>
    </details>
  </div>
</details>
import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as CatalogProtocols from '@site/docs/android/_code/_catalog/'
import LoadingProtocol from '@site/docs/android/_code/_base/LoadingProtocol.md'
import EmptyProtocol from '@site/docs/android/_code/_base/EmptyProtocol.md'

<details>
  <summary>Catalog</summary>
  <div>
    <details>
        <summary>Recipe Card</summary>
        <CodeUpdateComparison 
oldCode={ "var recipeCardTemplate: (@Composable() (recipe: Recipe, vmRecipe: RecipeViewModel, look: () -> Unit, buy: () -> Unit) -> Unit)?"}
            newCode={<CatalogProtocols.CatalogRecipeCardProtocol/>}/>
    </details>
    <details>
        <summary>Recipe Card Loading</summary>
        <CodeUpdateComparison 
oldCode={`var recipeLoaderTemplate: (@Composable() () -> Unit)?`}
            newCode={<RecipeCardLoadingProtocol/>}/>
    </details>
<details>
        <summary>Catalog Loading</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogResultPageLoadingTemplate: (@Composable() () -> Unit)?`}
            newCode={<LoadingProtocol/>}/>
    </details>
<details>
        <summary>Catalog Categories Empty</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogCategoriesEmptyTemplate: (@Composable() (action: () -> Unit,) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Search</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogSearchTemplate: (@Composable() (currentSearchValue: String, updateResearch: (newSearchValue: String) -> Unit,
        closeDialog: () -> Unit, goToResultPage: () -> Unit) -> Unit)?`}
            newCode={<CatalogProtocols.CatalogSearchProtocol/>}/>
    </details>
<details>
        <summary>Catalog Category</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogCategoryTemplate: (@Composable() (context: Context, category: Package, recipesID: List<String>,
        goToCategoryPage: (category: Package) -> Unit) -> Unit)?`}
           newCode={<CatalogProtocols.CatalogCategoriesPageCategory/>}/>
    </details>
<details>
        <summary>Catalog Header</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogHeader: (@Composable() (openFilter: () -> Unit, openSearch: () -> Unit, openPreferences: () -> Unit, goToFavorite: () -> Unit,
        goBackTOCatalog: () -> Unit, getActiveFilterCount: () -> Int, isMainPage: Boolean, isFavorite: Boolean) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Toolbar</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0"
            newCode={<CatalogProtocols.CatalogToolbarProtocol/>}/>
    </details>
<details>
        <summary>My Meal Button</summary>
        <CodeUpdateComparison 
oldCode={`var myMealButtonSuccessViewTemplate: (@Composable() (
        recipeCount: Int, onclick: () -> Unit) -> Unit)?`}
            newCode={<CatalogProtocols.MealsInBasketButtonSuccessProtocol/>}/>
    </details>
<details>
        <summary>Recipes List Title</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogPageTitleTemplate: (@Composable() (parameters: CatalogPageTitleTemplateParameters,) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Recipes Category List Title</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogCategoryTitleTemplate: (@Composable() (parameters: CatalogPageTitleTemplateParameters,) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Recipes Search Title</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogSearchTitleTemplate: (@Composable() (parameters: CatalogPageTitleTemplateParameters,) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Favorites Empty</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogFavoritEmptyTemplate: (@Composable() (returnToCatalog: () -> Unit) -> Unit)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Catalog Search Results Empty</summary>
        <CodeUpdateComparison 
oldCode={`var CatalogSearchResultEmptyTemplate: (@Composable() (returnToCatalog: () -> Unit, pageTitle: String) -> Unit)?`}
            newCode="Removed"/>
    </details>
  </div>
</details>
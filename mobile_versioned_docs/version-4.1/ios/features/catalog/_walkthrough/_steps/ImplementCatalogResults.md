import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After the CatalogView, you can implement the `CatalogResults` Page. 
`CatalogResults` can optionally take a categoryId & categoryTitle.
`CatalogResults` expects `params: CatalogParameters`, the same `CatalogParameters` as the `CatalogView.`

Additionally, `CatalogResults` expects `recipesListParams: CatalogRecipesListParameters` which also expects navigation functions & view options.

The last parameter is the gridConfig, which sets the number of columns, recipe dimensions, & spacing.
It is an instance of `CatalogRecipesListGridConfig.`

#### CatalogParameters
In our demo applications, we use the same instance of `CatalogParameters` to share between `CatalogView` & `CatalogResults.`
However, that is just our implementation, & for simplicity, you can refer to the above `CatalogParameters` for reference. 

#### CatalogRecipesListParameters
<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
CatalogRecipesListParameters(
    actions: CatalogRecipesListActions(
        onNoResultsRedirect: { [weak self] in 
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.popViewController(animated: true)
        },
        onShowRecipeDetails: { [weak self] recipeId in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
        },
        onRecipeCallToActionTapped: { [weak self] recipeId in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
        }
    )
),
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### CatalogRecipesListGridConfig
In our demo applications, we use the same instance of `CatalogRecipesListGridConfig` to share between `CatalogView` & `CatalogResults.`
However, that is just our implementation, & for simplicity, you can refer to the above `CatalogRecipesListGridConfig` for reference. 

#### Putting it all together

Now we have all the parameters we need for the `CatalogResults`.
The final product will look the same as the above `CatalogView`, so refer to that for the `UIHostingController` implementation in UIKit.

```swift
CatalogResults(
    params: /* the CatalogParameters we just made */,
    recipesListParams: /* the CatalogRecipesListParameters we just made */,
    categoryId: categoryId /* an optional String? */,
    title: categoryTitle /* an optional String? */,
    gridConfig: /* the CatalogRecipesListGridConfig we just made */
)
```
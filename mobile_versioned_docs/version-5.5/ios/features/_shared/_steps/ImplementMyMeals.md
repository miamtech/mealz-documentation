import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MyMeals` expects `params: MyMealsParameters` & `basketRecipesParams: BasketRecipeParameters`.
It also expects a `gridConfig: BasketRecipesGridConfig`.

#### MyMealsParameters
For the CatalogFeature, the `onNoResultsRedirect` can just redirect to the view that called it.
However, if MyMeals is a standalone page, this should navigate to the Catalog Feature when there are no recipes here.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MyMealsParameters(
    actions: MyMealsActions(
        onNoResultsRedirect: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.popViewController(animated: true)
        }
    )
)
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### BasketRecipeParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
BasketRecipeParameters(
    onReplaceProduct: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(ItemSelectorViewController(recipeId), animated: true)
    },
    onShowRecipeDetails: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
})
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### BasketRecipesGridConfig
```swift
BasketRecipesGridConfig(
    recipeSpacing: CGSize(width: 5, height: 5),
    productSpacing: CGSize(width: 6, height: 6),
    recipeOverviewDimensions: CGSize(width: 300, height: 150),
    isExpandable: true)
```

#### Putting it all together

Now we have all the parameters we need for the `MyMeals`.

```swift
MyMeals(
    params: /* the RecipeDetailParameters we just made */,
    basketRecipesParams: /* the BasketRecipeParameters we just made */,
    gridConfig: /* the BasketRecipesGridConfig we just made */
```
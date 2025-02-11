import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MealPlannerResults` expects `params: MealPlannerResultsParameters` where you can pass in the default `MealPlannerResultsParameters.`
The `MealPlannerResultsParameters` expects navigation functions & has optional `viewOptions` for customizing views.

The last parameter is the gridConfig, which sets the recipe dimensions, & spacing.
It is an instance of `MealPlannerRecipesListGridConfig.`

#### CatalogParameters
<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MealPlannerResultsParameters(
    onShowRecipeDetails: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId, isForMealPlanner: true), animated: true)
    },
    onOpenReplaceRecipe: { [weak self] indexOfRecipe in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MealPlannerRecipePickerViewController(indexOfRecipe), animated: true)
    },
    onNavigateToBasket: {[weak self] in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MealPlannerBasketViewController(), animated: true)
    }),
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### MealPlannerRecipesListGridConfig
```swift
MealPlannerRecipesListGridConfig(
    spacing: CGSize(width: 0, height: 0),
    recipeCardDimensions: CGSize(width: 300, height: 200)))
```

#### Putting it all together

Now we have all the parameters we need for the `MealPlannerResults`.
Here is an integration example:

```swift
MealPlannerResults(
    params: /* MealPlannerResultsParameters we just defined */,
    gridConfig: /* MealPlannerRecipesListGridConfig we just defined */)
```
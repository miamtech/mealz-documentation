import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MealPlannerBasket` expects `params: MealPlannerBasketParameters` & `basketRecipesParams: BasketRecipeParameters`.
It also expects a `gridConfig: BasketRecipesGridConfig`.

Both `BasketRecipeParameters` & `BasketRecipesGridConfig` are also expected from `MyMeals` from the Catalog Feature, so you can reuse these objects for this view too.

#### MealPlannerBasketParameters
<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MealPlannerBasketParameters(
    onNavigateToRecap: { [weak self] in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MealPlannerRecapPurchaseViewController(), animated: true)
    },
    onNavigateToBasket: { [weak self] in 
        // navigate to your Basket
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

#### BasketRecipeParameters
Again, this BasketRecipeParameters is the same as `MyMeals`. 
However, `RecipeDetails` should accept `isForMealPlanner: true` when it is called from the `MealPlannerBasket`.

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
        strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId, isForMealPlanner: true), animated: true)
})
```

So for example, you could have an object like this in UIKit to pass into both ViewControllers:

```swift
public func sharedBasketRecipeParameters(navigationController: UINavigationController?, isForMealPlanner: Bool) -> BasketRecipeParameters {
    return BasketRecipeParameters(
        onReplaceProduct: { recipeId in
            navigationController?.pushViewController(ItemSelectorViewController(recipeId), animated: true)
        },
        onShowRecipeDetails: { recipeId in
            navigationController?.pushViewController(RecipeDetailsViewController(recipeId, isForMealPlanner: isForMealPlanner), animated: true)
        }
    )
}
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
Again, this BasketRecipesGridConfig is the same as `MyMeals`.
```swift
BasketRecipesGridConfig(
    recipeSpacing: CGSize(width: 5, height: 5),
    productSpacing: CGSize(width: 6, height: 6),
    recipeOverviewDimensions: CGSize(width: 300, height: 150),
    isExpandable: true)
```

#### Putting it all together

Now we have all the parameters we need for the `MealPlannerBasket`.

```swift
MealPlannerBasket(
    params: /* the RecipeDetailParameters we just made */,
    basketRecipesParams: /* the BasketRecipeParameters we just made */,
    gridConfig: /* the BasketRecipesGridConfig we just made */
```
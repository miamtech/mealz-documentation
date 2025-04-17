import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `RecipeDetails` Page expects a `recipeId` string.
`RecipeDetails` also expects `params: RecipeDetailParameters`.

Additionally, `RecipeDetails` has an optional parameter `isForMealPlanner` that defaults to false.
If you are not implementing Meal Planner now or in the future, you can ignore this. 

#### RecipeDetailParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
RecipeDetailParameters(
    actions: RecipeDetailsActions(
        onClosed: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.popViewController(animated: true)
        },
        onSponsorDetailsTapped: { [weak self] sponsor in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(SponsorDetailsViewController(sponsor: sponsor), animated: true)
        },
        onContinueToBasket: { [weak self] in // this is ignored if the Recipe is already in the basket
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

#### Putting it all together

Now we have all the parameters we need for the `RecipeDetails`.

```swift
RecipeDetails(
    params: /* the RecipeDetailParameters we just made */,
    recipeId: recipeId /* the callback navigating to this view will provide this */,
    isForMealPlanner: isForMealPlanner // defaults to false
)
```

The default Miam Neutral Recipe Details Footer will NOT show the Call To Action if the item is already in the basket.
If you customize your footer, make sure you implement this same functionality. 
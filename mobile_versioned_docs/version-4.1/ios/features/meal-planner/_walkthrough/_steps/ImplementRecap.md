import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MealPlannerRecap` expects `params: MealPlannerRecapParameters`.

#### MealPlannerRecapParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MealPlannerRecapParameters(
    onNavigateAwayFromMealPlanner: { [weak self] in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.popToRootViewController(animated: true)
        // or to your Basket, Catalog Feature, etc
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

#### Putting it all together

Now we have all the parameters we need for the `MealPlannerRecap`.

```swift
MealPlannerRecap(
    params: /* the MealPlannerRecapParameters we just made */
)
```
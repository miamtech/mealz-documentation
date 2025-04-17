import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After the Call To Action, implement the `MealPlannerForm` Page.
`MealPlannerForm` expects `params: MealPlannerFormParameters`.

#### MealPlannerFormParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MealPlannerFormParameters(
    onNavigateToMealPlannerResults: { [weak self] recipes in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MealPlannerResultsViewController(), animated: true)
    }))
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

Now we have all the parameters we need for the `CatalogSearch`.

```swift
MealPlannerForm(
    params: /* MealPlannerFormParameters we just defined */
)
```

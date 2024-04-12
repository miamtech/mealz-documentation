import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Filters` expects a `FiltersInstance` object.
`Filters` also expects `params: FiltersParameters`.

Additionally, if you plan on adding Meal Planner Feature, `Filters` will also be used. 
The only change is that `Filters` should be popped instead of navigating to the `CatalogResults`

#### FiltersParameters
This object is fairly straightforward, however, because we want to pop the Filters page off the stack as we navigate, there is a little logic.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
FiltersParameters(
    actions: FiltersAction(
        onApplied: { [weak self] in
            guard let strongSelf = self else { return }
            if strongSelf.isForMealPlanner { // just pop VC if using Meal Planner
                strongSelf.navigationController?.popViewController(animated: true)
            } else {
                // this is overly complex so that when the user taps the apply button,
                // the next return will take them to Catalog, instead of back to filters
                guard let viewA = strongSelf.navigationController?.viewControllers.first else { return }
                let viewB = CatalogResultsViewController()
                strongSelf.navigationController?.setViewControllers([viewA, viewB], animated: true)
            }
        }, onClosed: { [weak self] in
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

#### Putting it all together

Now we have all the parameters we need for the `Filters`.

```swift
FiltersView(
    params: /* the FiltersParameters we just made */,
    filterInstance: filterInstance /* the callback navigating to this view will provide this */
)
```

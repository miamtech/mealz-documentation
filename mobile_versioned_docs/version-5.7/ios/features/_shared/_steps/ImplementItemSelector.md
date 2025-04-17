import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`ItemSelector` expects a `recipeId` string.
`ItemSelector` also expects `params: ItemSelectorParameters`.

#### ItemSelectorParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
ItemSelectorParameters(
    actions: ItemSelectorActions(
        onItemSelected: { [weak self] in
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

Now we have all the parameters we need for the `ItemSelector`.

```swift
ItemSelector(
    params: /* the ItemSelectorParameters we just made */,
    recipeId: recipeId /* the callback navigating to this view will provide this */
)
```
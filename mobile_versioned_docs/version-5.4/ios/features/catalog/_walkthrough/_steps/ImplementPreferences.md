import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Optionally, you can implement the `Preferences` Page.
`Preferences` expects `params: PreferencesParameters`.

Ensure that you have added the correct navigation function `onPreferencesTapped` in the `CatalogParameters`.

#### PreferencesParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
PreferencesParameters(
    actions: PreferencesActions(
        onClosed: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.popViewController(animated: true)
        },
        onGoToSearch: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(PreferencesSearchViewController(), animated: true)
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

Now we have all the parameters we need for the `Preferences`.

```swift
Preferences(
    params: /* the PreferencesParameters we just made */
)
```
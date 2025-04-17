import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After the `Preferences`, you can implement the `PreferencesSearch` Page.
`PreferencesSearch` expects `params: PreferencesSearchParameters`.

#### PreferencesSearchParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
PreferencesSearchParameters(
    actions: PreferencesSearch(
        onClosed: { [weak self] in
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

Now we have all the parameters we need for the `PreferenceSearchs`.

```swift
PreferencesSearch(
    params: /* the PreferencesSearchParameters we just made */
)
```
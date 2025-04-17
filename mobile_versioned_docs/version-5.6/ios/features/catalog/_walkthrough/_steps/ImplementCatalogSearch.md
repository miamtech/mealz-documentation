import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After the `Filters`, implement the `CatalogSearch` Page.
`CatalogSearch` expects a `FiltersInstance` object.
`CatalogSearch` also expects `params: CatalogSearchParameters`.

#### CatalogSearchParameters
This object is fairly straightforward, however, because we want to pop the CatalogSearch page off the stack as we navigate, there is a little logic.
The implementation is the same as the `Filters`.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
CatalogSearchParameters(
    actions: CatalogSearchActions(
        onApplied: { [weak self] in
            // this is overly complex so that when the user taps the apply button,
            // the next "back button" press will take them to Catalog, instead of back to CatalogSearch
            guard let strongSelf = self, let viewA = self?.navigationController?.viewControllers.first else { return }
            let viewB = CatalogResultsViewController()
            strongSelf.navigationController?.setViewControllers([viewA, viewB], animated: true)
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

Now we have all the parameters we need for the `CatalogSearch`.

```swift
CatalogSearch(
    params: /* the CatalogSearchParameters we just made */,
    filterInstance: filterInstance /* the callback navigating to this view will provide this */
)
```

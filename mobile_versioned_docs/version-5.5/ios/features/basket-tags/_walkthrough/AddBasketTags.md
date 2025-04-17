import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Presumably, you have already created a component in your application for the products in your basket.
You will be adding additional code to your Product in Basket Component.

The `BasketTag` expects a `retailerProductId` & `BasketTagParameters`.
The `BasketTagParameters` expects navigation functions & has optional `viewOptions` for customizing views.

Additionally, the last parameter is `scrollAlignment`, which defaults to `.vertical`. 
For our the image in the ingredients section above, we pass in `.horizontal`.

#### BasketTagParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
BasketTagParameters(
    actions: BasketTagActions(
        onShowRecipeDetails: { [weak self] recipeId in
            // this should navigate to the RecipeDetailsViewController, passing in the recipeId
        }
    )
)
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
BasketTagParameters(
    actions: BasketTagActions(
        onShowRecipeDetails: { recipeId in
            // this should navigate to the RecipeDetailsViewController, passing in the recipeId
        }
    )
)
```
</TabItem>
</Tabs>

#### Putting it all together

Now we have all the parameters we need for the `BasketTag`.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
private func configureBasketTags() {
    guard let id = productId else { return }
    let tags = BasketTag.init(
        params: BasketTagParameters(
            actions: BasketTagParameters(
                onShowRecipeDetails: { [weak self] recipeId in
                    guard let strongSelf = self else { return }
                    strongSelf.delegate?.didSelectRecipeDetail(with: recipeId)
                }
            )
        ),
        retailerProductId: id,
        scrollAlignment: .horizontal)
    let hostingController = UIHostingController(rootView: tags) // its a SwiftUI view so we need to wrap
    basketTags.subviews.forEach { $0.removeFromSuperview() } // Clear any previous tags or views in basketTags
    guard let tagView = hostingController.view else { return }
    basketTags.addSubview(tagView)
    tagView.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([ // Add constraints for the tags view to fit in basketTags
        tagView.leadingAnchor.constraint(equalTo: basketTags.leadingAnchor),
        tagView.trailingAnchor.constraint(equalTo: basketTags.trailingAnchor),
        tagView.topAnchor.constraint(equalTo: basketTags.topAnchor),
        tagView.bottomAnchor.constraint(equalTo: basketTags.bottomAnchor)
    ])
}

func didSelectRecipeDetail(with recipeId: String) {
    let detailsVC = RecipeDetailsViewController(recipeId)
    navigationController?.pushViewController(detailsVC, animated: true)
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

If there is no BasketTags related to the product, nothing will appear.
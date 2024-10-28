import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The first thing to be done is to create a FavoritesViewController or FavoritesView standalone page.
The only parameters this page may expect are those related to navigating to the Catalog Feature.
For example, you may want to pass a Navigation Delegate or a binding of the current tab.

The `FavoritesParameters` expects navigation functions & has optional `viewOptions` for customizing views.

Additionally, the last parameter is the gridConfig, which sets the number of columns, recipe dimensions, & spacing.
It is an instance of `CatalogRecipesListGridConfig.`

#### FavoritesParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
FavoritesParameters(
    onNoResultsRedirect: { [weak self] in 
        // navigate to where your Catalog Feature implementation is, usually its own Tab
    },
    onShowRecipeDetails: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
    }, onRecipeCallToActionTapped: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
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

#### CatalogRecipesListGridConfig
```swift
CatalogRecipesListGridConfig(
    numberOfColumns: 2,
    spacing: CGSize(width: 6, height: 6),
    recipeCardDimensions: CGSize(width: 300, height: 340),
    recipeCardFillMaxWidth: true)
```

#### Putting it all together

Now we have all the parameters we need for the `Favorites`.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
class FavoritesViewController: UIViewController {
    var swiftUIView: Favorites<
        FavoritesParameters> {
        return Favorites.init(
            params: FavoritesParameters(
                onNoResultsRedirect: { [weak self] in 
                    // navigate to Catalog Feature
                },
                onShowRecipeDetails: { [weak self] recipeId in
                    guard let strongSelf = self else { return }
                    strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
                }, onRecipeCallToActionTapped: { [weak self] recipeId in
                    guard let strongSelf = self else { return }
                    strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
                }),
            gridConfig: localRecipesListViewConfig
        )
    }
    // The hosting controller for your SwiftUI view
    private var hostingController: UIHostingController<Favorites<
        FavoritesParameters>>?

    override func viewDidLoad() {
        super.viewDidLoad()
        hostingController = UIHostingController(rootView: swiftUIView) // Initialize the hosting controller with your SwiftUI view
        guard let hostingController = hostingController, let hcView = hostingController.view else { return }
        hcView.translatesAutoresizingMaskIntoConstraints = false
        addChild(hostingController)
        view.addSubview(hcView)
        NSLayoutConstraint.activate([ //  you can also use SnapKit or other frameworks to set the bounds
            hcView.topAnchor.constraint(equalTo: view.topAnchor),
            hcView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            hcView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            hcView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        hostingController.didMove(toParent: self)
    }
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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After preparing the files, the next step is the landing page, the `CatalogView`.
Each page has their own custom parameters, titled the Page name followed by "Parameters."
For example, `CatalogView` expects `params: CatalogParameters` where you can pass in the default `CatalogParameters.`
The `CatalogParameters` expects navigation functions & has optional `viewOptions` for customizing views.

Additionally, `CatalogView` expects `catalogPackageRowParams: CatalogPackageRowParameters` which also expects navigation functions & view options.

The last parameter is the gridConfig, which sets the number of columns, recipe dimensions, & spacing.
It is an instance of `CatalogRecipesListGridConfig.`

#### CatalogParameters
<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
CatalogParameters(
    actions: CatalogActions(
        onFiltersTapped: { [weak self] filterInstance in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(FiltersViewController(filterInstance), animated: true)
        },
        onSearchTapped: { [weak self] filterInstance in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(CatalogSearchViewController(filterInstance), animated: true)
        },
        onFavoritesTapped: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(CatalogResultsViewController(), animated: true)
        },
        onPreferencesTapped: { [weak self] in // if Preferences isn't implemented, just leave an empty callback
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(PreferencesViewController(), animated: true)
        },
        onMealsInBasketButtonTapped: { [weak self] in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
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

#### CatalogPackageRowParameters
<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
CatalogPackageRowParameters(
    actions: CatalogPackageRowActions(
        onSeeAllRecipes: { [weak self] categoryId, categoryTitle in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(
                CatalogResultsViewController(
                    categoryId,
                    categoryTitle: categoryTitle
                ), animated: true)
        },
        onShowRecipeDetails: { [weak self] recipeId in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
        }, onRecipeCallToActionTapped: { [weak self] recipeId in
            guard let strongSelf = self else { return }
            strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
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

#### CatalogRecipesListGridConfig
```swift
CatalogRecipesListGridConfig(
    numberOfColumns: 2,
    spacing: CGSize(width: 6, height: 6),
    recipeCardDimensions: CGSize(width: 300, height: 340),
    recipeCardFillMaxWidth: true)
```

#### Putting it all together

Now we have all the parameters we need for the `CatalogView`.
Here is an integration example:

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

However, because `CatalogView` is a SwiftUI view, if you are using UIKit, it can get a bit more complicated.
We need to wrap the view in a `UIHostingController` & set the bounds.
This will need to be done on all of our views in a swiftUI view.

```swift
class CatalogViewController: UIViewController {
    var swiftUIView: CatalogView<
        CatalogParameters,
        CatalogPackageRowParameters> {
            return CatalogView.init(
                params: /* the CatalogParameters we just made */,
                catalogPackageRowParams: /* the CatalogPackageRowParameters we just made */,
                gridConfig: /* the CatalogRecipesListGridConfig we just made */
            )
        }
    // The hosting controller for your SwiftUI view
    private var hostingController: UIHostingController<CatalogView<
        CatalogParameters,
        CatalogPackageRowParameters>>?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Initialize the hosting controller with your SwiftUI view
        hostingController = UIHostingController(rootView: swiftUIView)
        guard let hostingController = hostingController, let hcView = hostingController.view
        else { return }
        // Since hostingController is optional, using guard to safely unwrap its view
        hcView.translatesAutoresizingMaskIntoConstraints = false
        addChild(hostingController)
        view.addSubview(hcView)
        NSLayoutConstraint.activate([ // you can also use Snapkit to set the constraints
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
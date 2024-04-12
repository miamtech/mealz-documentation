---
sidebar_position: 1
label: "Component Injection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Component Injection

There are two ways to inject Mealz components into the host app:

1. **SwiftUi** (preferred as nothing has to be changed on the component itself, except styling
adjustments)
2. **UIKit**

For the sake of the example, we will inject a component showing a recipe card in the host app.
In Mealz, recipe cards can either be "fixed" (= fetched by on a predefined ID) or "suggested" (= fetched based on the user navigation context)

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

However, using UIKit, it can get a bit more complicated.
We need to wrap the view in a `UIHostingController` & set the bounds.
This will need to be done on all of our views in a swiftUI view.

```swift
import UIKit
import SwiftUI
import MiamIOSFramework
import MiamNeutraliOSFramework

class YourViewController: UIViewController {

   override func viewDidLoad() {
        super.viewDidLoad()
        // Your Miam View with content 
        let swiftUIView = MiamNeutralRecipeCard().content(
            recipeCardDimensions: CGSize(width: 300, height: 300),
            recipe: FakeRecipe().createRandomFakeRecipe(),
            isCurrentlyInBasket: false,
            onAddToBasket: { recipeId in },
            onShowRecipeDetails: { recipeId in }
        )

        // Create a UIHostingController with MiamNeutralRecipeCard
        let hostingController = UIHostingController(rootView: swiftUIView)
        
        // Add the hostingController as a child view controller
        self.addChild(hostingController)
        
        // Add hostingController's view to the current view
        self.view.addSubview(hostingController.view)
        
        // Set hostingController's view size and position
        hostingController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([ // this can be used with SnapKit too
            hostingController.view.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            hostingController.view.centerYAnchor.constraint(equalTo: self.view.centerYAnchor),
            hostingController.view.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            hostingController.view.trailingAnchor.constraint(equalTo: self.view.trailingAnchor)
        ])
        // Notify the hostingController that it has been moved to the current view controller
        hostingController.didMove(toParent: self)
    }
}
```
</TabItem>
<TabItem value="swiftUI">

```swift
// ContentView.swift

import SwiftUI
import MiamIOSFramework
import MiamNeutraliOSFramework

var body: some View {
  VStack {
      MiamNeutralRecipeCard().content(
        recipeCardDimensions: CGSize(width: 300, height: 300),
        recipe: FakeRecipe().createRandomFakeRecipe(),
        isCurrentlyInBasket: false,
        onAddToBasket: { recipeId in },
        onShowRecipeDetails: { recipeId in }
    )
  }
```
</TabItem>
</Tabs>

### Creating components and navigating between them

We provide callbacks on our components in order to let you navigate between them and between them and your views: e.g. navigate to your basket view. 

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
See the full walkthrough [here](/docs/ios/features/favorites/walkthrough.md).

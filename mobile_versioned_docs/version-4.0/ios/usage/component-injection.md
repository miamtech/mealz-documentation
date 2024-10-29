---
sidebar_position: 1
label: "Component Injection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Component Injection

There are two ways to inject Mealz components into the host app:

1. **SwiftUI** (preferred as nothing has to be changed on the component itself, except styling
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
import MealziOSSDK
import MealzUIiOSSDK
import MealzNaviOSSDK

class YourViewController: UIViewController {

   let standaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipeId: "15434")

   override func viewDidLoad() {
        super.viewDidLoad()
       
        // Add the recipe card as a child view controller
        view.addSubview(standaloneRecipeCard.view)
        
        standaloneRecipeCard.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            standaloneRecipeCard.view.topAnchor.constraint(equalTo: view.topAnchor, constant: 10),
            standaloneRecipeCard.view.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 10),
            standaloneRecipeCard.view.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -10),
            standaloneRecipeCard.view.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -10),
            standaloneRecipeCard.view.heightAnchor.constraint(equalToConstant: CGFloat(300)) // Adjust the height as needed
        ])
    }
}
```
</TabItem>
<TabItem value="swiftUI">

```swift
// ContentView.swift

import SwiftUI
import MealziOSSDK
import MealzUIiOSSDK
import MealzNaviOSSDK

var body: some View {
  VStack {
     MealzStandaloneRecipeCardSwiftUI(recipeId: "15434")
  }
}
```
</TabItem>
</Tabs>
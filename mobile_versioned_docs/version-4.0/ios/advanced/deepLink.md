import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Link

## DeepLink
Mealz provides a parameter `categoryId` on `CatalogResults` that show desired categories.
It is design to be used with deeplinking.
Just pass the `catalogId` & the `title` as parameters in your link, you must pass BOTH:

<Tabs
defaultValue="UIKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'UIKit' },
{ label: 'SwiftUI', value: 'SwiftUI' },
]}>

<TabItem value="UIKit">

```swift
import UIKit
import MealziOSSDK
import MealzUIiOSSDK

// since these are standalone pages that shouldn't be created twice,
// we can create them once here for reuse
public let mealzCatalogFeature = MealzCatalogFeatureUIKit(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    catalogFeatureConstructor: MealzViewConfig.catalogConfig,
    myMealsViewOptions: MealzViewConfig.myMealsView,
    myMealsRecipesListGridConfig: MealzViewConfig.myMealsGridConfig
)

// *your view controller opening the Catalog*
    mealzCatalogFeature.openCatalogResults(catalogId: category, categoryTitle: title)
    self.present(mealzCatalogFeature, animated: true)
```

</TabItem>
<TabItem value="SwiftUI">

```swift
import SwiftUI
import MealziOSSDK
import MealzUIiOSSDK

struct CatalogTabView: View {
    var deepLinkedCategoryId: String
    var deepLinkedTitle: String

    var body: some View {
        MealzCatalogFeatureSwiftUI(
            catalogId: deepLinkedCategoryId,
            categoryTitle: deepLinkedTitle
        )
    }
}
```

</TabItem>
</Tabs>

:::tip
You can find Mealz category IDs on our back office <a target="https://partners.miam.tech/" href='https://partners.miam.tech/'> **Mealz Partner**</a>
:::

## Direct Link

You can also use this feature directly in your application.
To do so, you'll need to get current active catalog's categories.
Here's how you can do that:

```swift
import mealzcore

Mealz.shared.catalog.getCatalogCategories { categories in
    self.categories.categoriesList = categories
}
```

Then you can pass it to a component and use it to navigate directly to a category

```swift
import SwiftUI
import mealzcore

struct CategoriesMenu: View {

    @ObservedObject var category: Categories

    var body: some View {
        Menu("categories") {
            ForEach(category.categoriesList, id: \.self) { cat in
                Button(cat.title, action: { /*Do stuff here*/ })
            }
        }
    }
}
```

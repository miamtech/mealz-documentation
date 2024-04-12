# Link

## DeepLink
Mealz provides a parameter `categoryId` on `CatalogResults` that show desired categories.
It is design to be used with deeplinking.
Just pass the `catalogId` & the `title` as parameters in your link, you must pass BOTH:


```swift
import SwiftUI
import MiamIOSFramework
import MiamNeutraliOSFramework

struct CatalogTabView: View {
    var deepLinkedCategoryId: String
    var deepLinkedTitle: String

    var body: some View {
        CatalogView(
            params: localCatalogViewParams(navigationController: self.navigationController),
            catalogPackageRowParams: localCatalogPackageRowParams(navigationController: self.navigationController),
            categoryId: deepLinkedCategoryId,
            title: deepLinkedTitle,
            gridConfig: localRecipesListViewConfig
        )
    }
}
```

:::tip
You can find Mealz category IDs on our back office <a target="https://partners.miam.tech/" href='https://partners.miam.tech/'> **Mealz Partner**</a>
:::

## Direct Link

You can also use this feature directly in your application.
To do so, you'll need to get current active catalog's categories.
Here's how you can do that:

```swift
import miamCore

Mealz.catalog.getCatalogCategories { categories in
    self.categories.categoriesList = categories
}
```

Then you can pass it to a component and use it to navigate directly to a category

```swift
import SwiftUI
import miamCore

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

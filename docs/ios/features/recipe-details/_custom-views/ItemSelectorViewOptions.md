#### Item Selector - `ItemSelectorViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let itemSelectorViewOptions = ItemSelectorViewOptions(
    searchBar = TypeSafeSearch(/* your new view*/),
    title = TypeSafeBaseTitle(/* your new view*/),
    selectedProduct = TypeSafeItemSelectorSelectedProduct(/* your new view*/),
    productOptions = TypeSafeItemSelectorOptionProducts(/* your new view*/),
    noResults = TypeSafeItemSelectorNoResults(/* your new view*/)
)
```
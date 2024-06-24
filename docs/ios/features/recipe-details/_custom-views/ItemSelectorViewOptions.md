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
Protocols:
- [SearchProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/searchprotocol)
- [BaseTitleProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/basetitleprotocol)
- [ItemSelectorSelectedProductProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/itemselectorselectedproductprotocol)
- [ItemSelectorOptionProductsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/itemselectoroptionproductsprotocol)
- [ItemSelectorNoResultsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/itemselectornoresultsprotocol)

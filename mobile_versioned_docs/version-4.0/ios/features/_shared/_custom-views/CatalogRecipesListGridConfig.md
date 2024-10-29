#### Catalog Recipes List Grid Config

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let recipesListGridConfig = CatalogRecipesListGridConfig(
    numberOfColumns: 2, 
    spacing: CGSize(width: 4, height: 4),
    recipeCardDimensions: CGSize(width: 300, height: 180),
    recipeCardFillMaxWidth: true // if set to true, the width set above is ignored & it will take all the available space
)
```
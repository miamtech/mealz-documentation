```swift
static let recipeCardConfig = StandaloneRecipeCardConstructor(
    recipeCard: TypeSafeCatalogRecipeCard(/* Your custom RecipeCard */),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* Your custom RecipeCardLoading */),
    recipeCardDimensions: CGSize(width: /* */, height: /* */)
)
```
Protocols:
- [CatalogRecipeCardProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/catalogrecipecardprotocol)
- [RecipeCardLoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipecardloadingprotocol)
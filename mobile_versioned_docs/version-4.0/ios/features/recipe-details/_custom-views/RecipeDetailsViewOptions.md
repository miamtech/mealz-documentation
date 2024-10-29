#### Recipe Details - `RecipeDetailsViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let recipeDetailsViewOptions = RecipeDetailsViewOptions(
    header = TypeSafeRecipeDetailsHeader(/* your new view*/),
    sponsor = TypeSafeRecipeDetailsSponsor(/* your new view*/),
    selectedControl = TypeSafeRecipeDetailsSelectedControl(/* your new view*/),
    ingredients = TypeSafeRecipeDetailsIngredients(/* your new view*/),
    steps = TypeSafeRecipeDetailsSteps(/* your new view*/),
    footer = TypeSafeRecipeDetailsFooter(/* your new view*/),
    ingredientsAtHomeToggleButton = TypeSafeBaseButton(/* your new view*/),
    unavailableIngredientsToggleButton = TypeSafeBaseButton(/* your new view*/),
    ingredientsAtHome = TypeSafeNotInBasketProduct(/* your new view*/),
    unavailableIngredients = TypeSafeNotInBasketProduct(/* your new view*/)
)
```
Protocols:
- [RecipeDetailsHeaderProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsheaderprotocol)
- [RecipeDetailsSponsorProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailssponsorprotocol)
- [RecipeDetailsSelectedControlProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsselectedcontrolprotocol)
- [RecipeDetailsIngredientsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsingredientsprotocol)
- [RecipeDetailsStepsProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsstepsprotocol)
- [RecipeDetailsFooterProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipedetailsfooterprotocol)
- [BaseButtonProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/basebuttonprotocol)
- [NotInBasketProductProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/notinbasketproductprotocol)
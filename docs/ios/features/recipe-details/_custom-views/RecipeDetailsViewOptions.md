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
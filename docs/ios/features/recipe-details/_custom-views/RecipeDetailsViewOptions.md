#### Recipe Details - `RecipeDetailsViewOptions`

```swift
import MealziOSSDK

static let recipeDetailsViewOptions = RecipeDetailsViewOptions(
    floatingHeader = TypeSafeRecipeDetailsFloatingHeader(/* your new view*/),
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
Components:
- [RecipeDetailsFloatingNavigation](../components/RecipeDetailsFloatingNavigation.mdx)
- [RecipeDetailsHeader](../components/RecipeDetailHeader.mdx)
- [RecipeDetailsSponsor](../components/RecipeDetailSponsorBanner.mdx)
- [RecipeDetailsSelectedControl](../components/RecipeDetailSwapper.mdx)
- [RecipeDetailsIngredients](../components/RecipeDetailIngredients.mdx)
- [RecipeDetailsSteps](../components/RecipeDetailSteps.mdx)
- [RecipeDetailsFooter](../components/RecipeDetailFooter.mdx)
- [IngredientsAtHomeToggleButton](../components/RecipeDetailIngredientsAtHomeToggleButton.mdx)
- [UnavailableIngredientsToggleButton](../components/RecipeDetailUnavailableIngredientsToggleButton.mdx)
- [IngredientsAtHome](../components/products/RecipeDetailsNotInBasketProduct.mdx)
- [UnavailableIngredients](../components/products/RecipeDetailsNotInBasketProduct.mdx)
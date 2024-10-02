#### MyMeals - `MyMealsViewOptions`

```swift
import MealzUIModuleIOS
import MiamIOSFramework

static let myMealsViewOptions = MyMealsViewOptions(
    recipeCard: TypeSafeMyMealRecipeCard(/* your new view*/),
    recipeCardLoading: TypeSafeRecipeCardLoading(/* your new view*/)
)
```
Protocols:
- [MyMealRecipeCard](../components/MyMealRecipeCard.mdx)
- [RecipeCardLoading](../../recipe-card/components/RecipeCardLoading.mdx)
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
- [MyMealRecipeCardProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/mymealrecipecardprotocol)
- [RecipeCardLoadingProtocol](https://miamtech.github.io/MealziOSSDKRelease/documentation/mealziossdk/recipecardloadingprotocol)
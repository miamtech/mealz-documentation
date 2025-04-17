#### Order Details - `OrderDetailsViewOptions`

```swift
import MealziOSSDK

static let orderDetailsViewOptions = OrderDetailsViewOptions(
    mySpaceSelectedControl: TypeSafeMySpaceSelectedControl(/* your new view*/),
    mySpaceHeader: TypeSafeBaseHeader(/* your new view*/),
    mealsInBasketButtonSuccess: TypeSafeMealsInBasketButtonSuccess(/* your new view*/),
    mealsInBasketButtonEmpty: TypeSafeEmpty(/* your new view*/)
)
```
Components:
- [OrderDetailsHeader](../components/OrderDetailsHeader.mdx)
- [OrderDetailsRecipeCard](../components/OrderDetailsRecipeCard.mdx)
- [MealsInBasketButtonSuccess](../components/MealsInBasketButton.mdx)
- [MealsInBasketButtonEmpty](../components/MealsInBasketButtonEmpty.mdx)
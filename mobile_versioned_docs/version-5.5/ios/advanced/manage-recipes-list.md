# Groceries list

Information relating to the Mealz recipes can be accessed in the Mealz init.

## Recipes count

You can get the count of recipes added to cart by the user:
```swift
import mealzcore

Mealz.shared.basket.getRecipeCountInBasket()
```
or use a notifier to listen to the recipe count:
```swift
import mealzcore

Mealz.shared.notifications.recipesCount
```

## Reset groceries list

You can provide a new groceries list to your customer :

```swift
import mealzcore

Mealz.shared.basket.clear()
```

:::tip
It depends on the user experience you want: but you can link this reset to your customer cart reset,
or use it only for development purposes to avoid weird test behaviours.
:::
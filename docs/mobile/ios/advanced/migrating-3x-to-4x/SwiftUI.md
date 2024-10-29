---
sidebar_position: 2
label: "SwiftUI Apps"
---

# SwiftUI Apps

If your app is in SwiftUI, the migration is very quick & painless on the View side. 
All you'll need to do is change a few lines. 

## Catalog Feature

Before, the Catalog Feature navigation was all done on a single SwiftUI page.
We have switched to using a UIKit coordinator so have proper navigation functionality & experience.

To change your `CatalogView()` you'll just need to replace it with this: `MealzCatalogFeatureSwiftUI()`.

### Customizing

You can completely configure all the templates & pages in the Catalog Feature.
You can read about it [here](/docs/ios/features/catalog/customize-views).

## Standalone Recipe Card Feature

Before, the Recipe Card Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

To change your `RecipeCardView()` you'll just need to replace it with one of these:
```swift
import MealziOSSDK

MealzStandaloneRecipeCardSwiftUI(recipeId: /* your String recipe id */)
MealzStandaloneRecipeCardSwiftUI(recipe: /* your Recipe object */)
MealzStandaloneRecipeCardSwiftUI(criteria: /* your SuggestionsCriteria object */)
```

### Customizing

You can completely configure all the templates & pages associated with the Recipe Card Feature.
You can read about it [here](/docs/ios/features/recipe-card/customize-views).

## Favorites Feature

Before, the Favorites Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

To change your `FavoritesView()` you'll just need to replace it with this: 
```swift
MealzFavoritesFeatureSwiftUI(
    favoritesFeatureConstructor: FavoritesFeatureConstructor(
        navigateToCatalog: /* navigate to the MealzCatalogFeature */))
```

### Customizing

You can completely configure all the templates & pages in the Favorites Feature.
You can read about it [here](/docs/ios/features/favorites/customize-views).

## MyMeals Feature (Recipes in your basket)

Before, the MyMeals Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

To change your `MyMealsView()` you'll just need to replace it with this:
```swift
MealzMyMealsFeatureSwiftUI(
    myMealsContructor: MyMealsFeatureConstructor(
        navigateToCatalog: /* navigate to the MealzCatalogFeature */))
```

### Customizing

You can completely configure all the templates & pages in the MyMeals Feature.
You can read about it [here](/docs/ios/features/myMeals/customize-views).

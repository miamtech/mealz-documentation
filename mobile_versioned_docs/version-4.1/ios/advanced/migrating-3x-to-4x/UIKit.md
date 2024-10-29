---
sidebar_position: 3
label: "UIKit Apps"
---

# UIKit Apps

If your app is in UIKit, the migration has changed to support UIKit better.
Instead of just wrapping SwiftUI pages with SwiftUI navigation, we have moved to using a UIKit coordinator.

## Catalog Feature

Before, the Catalog Feature navigation was all done on a single SwiftUI page.
We have switched to using a UIKit coordinator so have proper navigation functionality & experience.

Before, your code would look something like this:

```swift
let miamView = CatalogView()
let hostingViewController = UIHostingController<CatalogView>
```

The minimum instance of the CatalogFeature is this:

```swift
let mealzCatalogFeature = MealzCatalogFeatureUIKit() // this is a standalone UINavigationController

// where you will present or push the UINavigationController 
self.present(mealzCatalogFeature, animated: true)
```

You will need to import the `MealzNavModuleIOS`.

### Customizing

You can completely configure all the templates & pages in the Catalog Feature.
You can read about it [here](/docs/ios/features/catalog/customize-views).

## Standalone Recipe Card Feature

Before, the Recipe Card Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

Before, your code would look something like this:

```swift
let miamView = RecipeCardView(/* with a recipeId, criteria, or Recipe passed in */)
let hostingViewController = UIHostingController<RecipeCardView>
```

To change your `RecipeCardView()` you'll just need to replace it with one of these:

```swift
import MealziOSSDK
import MealzNavModuleIOS

mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipeId: /* your String recipe id */)
mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipe: /* your Recipe object */)
mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(criteria: /* your SuggestionsCriteria object */)

// then add it to whatever View you're currently inside
mealzStandaloneRecipeCard.view.addTo(cell, Pin(.all))
```

### Customizing

You can completely configure all the templates & pages associated with the Recipe Card Feature.
You can read about it [here](/docs/ios/features/recipe-card/customize-views).

## Standalone Recipe Card Feature

Before, the Recipe Card Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

Before, your code would look something like this:

```swift
let miamView = RecipeCardView(/* with a recipeId, criteria, or Recipe passed in */)
let hostingViewController = UIHostingController<RecipeCardView>
```

To change your `RecipeCardView()` you'll just need to replace it with one of these:

```swift
import MealziOSSDK
import MealzNavModuleIOS

mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipeId: /* your String recipe id */)
mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipe: /* your Recipe object */)
mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(criteria: /* your SuggestionsCriteria object */)

// then add it to whatever View you're currently inside
mealzStandaloneRecipeCard.view.addTo(cell, Pin(.all))
```

### Customizing

You can completely configure all the templates & pages associated with the Recipe Card Feature.

You can read about it [here](../../features/recipe-card/customize-views.md).

## Favorites Feature

Before, the Favorites Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

Before, your code would look something like this:

```swift
let miamView = FavoritesView({ /* nav to CatalogFeature */ })
let hostingViewController = UIHostingController<FavoritesView>
```

To change your `FavoritesView` you'll just need to replace it with this:
```swift
let mealzFavoritesFeature = MealzFavoritesFeatureUIKit(
    favoritesFeatureConstructor: FavoritesFeatureConstructor(
        navigateToCatalog: // nav to the catalog
    ))
)

// where you will present or push the UINavigationController 
self.present(mealzFavoritesFeature, animated: true)
```

You will need to import the `MealzNavModuleIOS`.

### Customizing

You can completely configure all the templates & pages in the Favorites Feature.
You can read about it [here](/docs/ios/features/favorites/customize-views).

## MyMeals Feature (Recipes in your basket)

Before, the MyMeals Feature navigation used SwiftUI Modals, it is now also a UIKit Coordinator.

Before, your code would look something like this:

```swift
let miamView = MyMealsView(discoverRecipesNaviation: /* nav to CatalogFeature */)
let hostingViewController = UIHostingController<MyMealsView>
```

To change your `MyMealsView` you'll just need to replace it with this:
```swift
let mealzMyMealsFeature = MealzMyMealsFeatureUIKit(
    myMealsFeatureConstructor: MyMealsFeatureConstructor(
        navigateToCatalog: // nav to the catalog
    ))
)

// where you will present or push the UINavigationController 
self.present(mealzMyMealsFeature, animated: true)
```

You will need to import the `MealzNavModuleIOS`.

### Customizing

You can completely configure all the templates & pages in the MyMeals Feature.
You can read about it [here](/docs/ios/features/myMeals/customize-views).

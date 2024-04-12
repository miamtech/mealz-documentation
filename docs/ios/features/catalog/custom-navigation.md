---
sidebar_position: 3
label: "Custom Navigation"
---

import * as Steps from './_walkthrough/_steps';
import * as SharedSteps from '@site/docs/ios/features/_shared/_steps/';

# Custom Navigation

If you don't want to use the provided Mealz navigation, you can recreate the navigation yourself.
We have documented a simple walkthrough, but feel free to implement your practice of Coordinators.

## 1. Create Files & ViewControllers/Pages
<Steps.CreateFiles />

## 2. Implement CatalogView
<Steps.ImplementCatalogView />

## 3. Implement CatalogResults
<Steps.ImplementCatalogResults />

## 4. Implement Filters
<SharedSteps.ImplementFilters />

## 5. Implement CatalogSearch
<Steps.ImplementCatalogSearch />

## 6. Implement RecipeDetails
<SharedSteps.ImplementRecipeDetails />

## 7. Implement SponsorDetails
<SharedSteps.ImplementSponsorDetails />

## 8. Implement MyMeals
<SharedSteps.ImplementMyMeals />

## 9. Implement ItemSelector
<SharedSteps.ImplementItemSelector />

## 10. Implement Preferences - Optional
<Steps.ImplementPreferences />

## 11. Implement PreferencesSearch - Optional
<Steps.ImplementPreferencesSearch />

## Customization
<LinkToCustomization />

## Next Steps

After integrating Catalog, you have the bulk of the Miam functionality in your iOS application.
However, we also have other features & standalones pages.
You can integrate a standalone `MyMeals` page, `Favorites` page, or our full feature `Meal Planner`.
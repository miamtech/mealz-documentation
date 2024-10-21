---
sidebar_position: 11
---

## Changelog

## v8.7.1 - [17/10/2024]

#### Updated
- *analytics*:
  - Added event pageview on no-supplier-onboarding with steps_completed props
  - Added event close on no-supplier-onboarding with steps_completed props
  - Added event action on no-supplier-onboarding with steps_completed props
  - Added event close on store-locator with time_passed props
  - Added event props supplier_name on pos.selected event for store-locator
  - Added event recipe.show on recipe-card-cta if called with a recipe-ext-id or recipe-name
  - Added event close on recipe-details with time_passed props
  - Added event continue on recipe-details with time_passed props

#### Fixed
- *no-supplier-onboarding*:
  - Could be opened again after it was closed
- *meals-planner*:
  - Fix ingredients-regrouped banner would be displayed even if not necessary
  - Fix page refresh on the basket-preview when deleting or updating an entry, or modifying recipe quantities
  - Fix basket-preview progress bar did not refresh correctly

#### Internal:
- *mealzInternal.getStickyHeaderHeight*:
  - New observable to get sticky header height
- *catalog*:
  - Add methods to open filter and preferences modal
  - Add loadMoreRecipes method
- *mealzInternal*:
  - user.getLanguage() method added
  - supplier.getToken() method added
  - Added a method user.isAuthenticated that returns an observable of a boolean with the current authentication status of the user
  - Added a method recipes.recipeLikeUpdated that returns an observable of the recipe id and its like status
- *basket-entry*:
  - removed deprecated relationship items

Merged 8.6.5 in 8.7 -> See v8.6.5 for changes

## v8.7.0 - [03/10/2024]

#### Added:
- *store-locator*:
  - Added search.store event
- *no-supplier-onboarding*:
  - Added an onboarding popup for users who have never used the "no-supplier" experience (i.e. Mealz for recipe websites)
- *warning-store-locator*:
  - Added a temporary warning popup for suppliers for which deeplinks are a problem
- *window.miam*:
  - Added `basket.overrideTransferUrl: (url: string) => void` for testing purposes to override the transfer url for the basket transfer

#### Updated:
- *window.miam*:
  - Added window.miam.setAbTestKey
- *analytics-service*:
  - Removed Google Optimize

#### Fixed:
- *basket-preview-block*:
  - Opening the basket preview without a selected point of sale was sending the pageview event and the store locator event
- *recipe-details*:
  - Opening the recipe details without a selected point of sale was sending the pageview event and the store locator event

#### Internal
- Updated mealz-components to 0.5

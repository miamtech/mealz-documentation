---
sidebar_position: 11
---

## Changelog

## v8.8.12 - [02/09/2025]

#### Added:
- *catalog-category*
  - Add data-category-key attributes to retrieve category name normalized

## v8.8.11 - [29/08/2025]

#### Fixed:
- *recipe-details*:
  - Update product-cards when the selected-item of an ingredient changes after modifying the number of guests.

## v8.8.10 - [20/03/2025]

#### Updated:
- *store-locator-warning*:
  - Doesn't appear for any retailer anymore

#### Fixed:
- *recipe-details*:
  - Moved the recipe.display event to the recipe-card-cta
  - Fixed guest counter didn't update the quantities of ingredients
  - pageview wasn't sent when the drawer was opened
- *basket-preview*:
  - pageview was sent when recipe-modal was closed

## v8.8.9 - [07/03/2025]

#### Fixed:
- *recipe-card*:
  - Like button was not displaying as expected in the top container.

## v8.8.8 - [21/02/2025]

#### Fixed:
- *basket-transfer*:
  - Safari blocked calls to window.open with _blank attribute, so the supplier's website couldn't be opened
- *store-locator*
  - The modal now closes even if the user hasn't chosen a store
- *supplier-onboarding*:
  - Wording didn't match the CTA anymore

#### Internal:
- *window.miam.pos.openNoSupplierOnboarding*
  - New method to open the no supplier onboarding popup

## v8.8.7 - [30/01/2025]

#### Fixed:
- *recipe-pricing*:
  - Prices were not displayed on recipe-card since 8.8.6

## v8.8.6 - [24/01/2025]

#### Added:
- *store-locator-link*
  - Added an info icon next to suppliers' stores for web-mobile users. Clicking the icon opens a temporary warning popup regarding potential issues with deep links

#### Fixed:
- *analytics*:
  - Called setAffiliate method when the value changes from localStorage
- *counter-input*
  - Fixed price not updating when changing product quantity after product replacement in recipe
- *recipe-card-cta*:
  - Updated the route that fetches recipes from their ext-id to the newest one to fix a bug that happened with some origins
- *product-card*
  - Fixed quantities were displayed at NaN if the recipe-details was opened from the recipe-card-cta
- *recipe-details*
  - Fixed `recipe.display` to trigger only when the recipe is viewed, not when the StoreLocator is shown.
- *recipe-catalog*
  - Apply preferences refreshes the page instead of opening a new filtered one

## v8.8.5 - [16/01/2025]

#### Added:
- *recipe-card-cta*
  - Add a CSS class to the recipe card CTA button to allow easier customization

#### Internal:
- Added new method for the route recipes/search in RecipesService

## v8.8.4 - [10/01/2025]

#### Removed:
- Deprecated & unused personal recipes feature was entirely removed, with all subcomponents

#### Fixed:
- Removed automatic statuses & recipe-type fetches on library startup
- *toolbar*:
  - Added CSS class for toolbar to do full width on Firefox
- *store-locator*:
  - Fixed supplier filter on store locator search

## v8.8.3 - [28/11/2024]

#### Updated:
- *warning-store-locator*:
  - The middle part of the warning text was moved in a \<b\> tag
- *recipe-card-cta*:
  - Now emits a "hidden" event when the recipe is not found

#### Fixed:
- *basket-preview*:
  - When replacing a product in the "Products" tab, the view didn't always come back on said product upon returning from the replace view

## v8.8.2 - [15/11/2024]

Merged 8.5.8 in 8.8 -> See v8.5.8 for changes

## v8.8.1 - [05/11/2024]

Merged 8.3.13 in 8.8 -> See v8.3.13 for changes
Updated mealz-component to 0.6

## v8.8.0 - [31/10/2024]

#### Updated:
- *basket-transfer*:
  - Now opens "My meals" drawer after the transfer is complete
  - Changed the wording for the warning-store-locator component
- *no-supplier-onboarding*:
  - Changed the wording and moved the text above the image
- *miam-ds*:
  - Changed --miam-ds-color-neutral-black fallback from #1F3543 to #0F191F

#### Fixed:
- *replace-item*:
  - ingredients quantity shown now updates on number of guests
- *window.miam*:
  - *user.setLocation* now correctly stops the store-locator loading state if called with undefined or any other falsy value

#### Internal:
- Added an environment variable for mealz-components base url
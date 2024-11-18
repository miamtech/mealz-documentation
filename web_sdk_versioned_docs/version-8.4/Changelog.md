---
sidebar_position: 11
---

## Changelog

## v8.4.6 - [14/10/2024]

Merged 8.3.12 in 8.4 -> See v8.3.12 for changes

## v8.4.5 - [03/10/2024]

Merged 8.3.11 in 8.4 -> See v8.3.11 for changes

## v8.4.4 - [09/09/2024]

Merged 8.3.10 in 8.4 -> See v8.3.10 for changes

## v8.3.10 - [Unreleased]

#### Fixed:
- *window.miam*:
  - basket.confirm emptied the basket while confirming it, which prevented basket.confirm event sending

## v8.4.3 - [29/08/2024]

#### Fixed:
- *list-scan*:
  - Now waits for the user to confirm adding products before letting the basket-sync process updates from Mealz basket
- *basket-sync*:
  - Now updates Mealz products after adding the new products to avoid ignoring duplicate basket-entries that can be generated in the list-scan
  - Now cleans basket-entries with no products that can be generated in the list-scan
  - Now takes into account that list-scan can generate duplicate basket-entries when checking for products to remove from Mealz basket


## v8.4.2 - [23/07/2024]

#### Fixed:
- *list-scan*:
  - mobile CTA didn't trigger the file input
- *modal*
  - centered modals were off-centered on mobile & were too big
- [FROM 8.3.9] *preferences*:
  - "meal_type" tags could be researched in preferences_search, but were not displayed in preferences.
- [FROM 8.3.9] *recipe-card*:
  - Fixed recipe loading logic in ngOnChanges method to remove unnecessary calls to loadRecipeFromContext

## v8.4.1 - [17/07/2024]

#### Added:
- *list-scan*:
  - New input isSchoolList (boolean). If true, specifies that all list scanned with the feature will be school products lists, to improve the results from the AI

#### Removed:
- *list-scan*:
  - Input disableIngredientsMatching was removed

## v8.4.0 - [08/07/2024]

#### Added:
- *list-scan*: 
  - Reimplemented the feature as it didn't work since version 7.0.0 && redesigned it to match other features (Notably the "Product" view from the no-supplier experience)
- *product-addiction-card*:
  - Added a css class on the title of the card
  - Removed view encapsulation on the component which made it impossible to override the CSS

#### Removed:
- *overlay-button*: removed component - unused
- *ingredient-list*: removed component - did not work

#### Fixed:
- *basket*: when adding or removing products, products that weren't linked to an ingredient were all skiped except the last one **(use-case specific to the list-scan feature)**
- *basket-synchronization*: was running in double if the supplier changed value
- *analytics*: removed_products analytics could break if a basket-entry in basket was unavailable **(use-case specific to the list-scan feature)**
- *replace-item*: Broken view when trying to replace an unavailable product whose basket-entry was in basket **(use-case specific to the list-scan feature)**

#### Internal:
- *list-scan*: moved most of the logic to a dedicated service
- *demo-app*: added a tab for the list-scan feature

---
sidebar_position: 11
---

## Changelog

## v8.5.8 - [14/11/2024]

#### Fixed:
- Basket could be updated by retailer during confirmation - Added a lock on it to make the synchronization wait

## v8.5.7 - [05/11/2024]

Merged 8.3.13 in 8.5 -> See v8.3.13 for changes

## v8.5.6 - [14/10/2024]

Merged 8.3.12 in 8.5 -> See v8.3.12 for changes

## v8.5.5 - [03/10/2024]

Merged 8.3.11 in 8.5 -> See v8.3.11 for changes

## v8.5.4 - [18/09/2024]

#### Fixed:
- *basket-preview*:
  - Opening the basket preview in no-supplier mode with no POS chosen did not open the store-locator
  - Added missing analytics event on basket transfer

## v8.5.3 - [09/09/2024]

Merged 8.3.10 in 8.5 -> See v8.3.10 for changes

## v8.5.2 - [03/09/2024]

#### Fixed:
- *basket-transfer*:
  - Fixed forcePosCallback wasn't called when transfer was started with no POS

## v8.5.1 - [29/08/2024]

Merged 8.4.2 in 8.5 -> See v8.4.2 for changes
#### Fixed:
- *basket-transfer*:
  - Fix issue where changing POS after forcePosCallback send a basketTransfer request again

- *user-service*:
  - Fix setUserInfo returned observable completion (avoid using forkJoin with BehaviourSubjects)
- *recipe-catalog*:
  - Fix catalog initialization that couldn't complete if the API did not return any catalog setting for the supplier


## v8.5.0 - [16/07/20224]

#### Added:
- *basket-transfer-modal*:
  - Added a new component basket-transfer-modal which appears on affiliated website after the user is redirected to the supplier's website. The modal disappears when the user clicks on the CTA if the basket transfer was completed; if not, it asks the user if they want to abort the transfer and add new recipes or if they want to complete the transfer, in which case they are redirected again.
- *products-picker*:
  - Legal mentions for alcohol recipes
- *window.miam.features.collapseUnavailableProductsByDefault*:
  - Added method to enable collapsing of unavailable products by default
- *window.miam.supplier.getAffiliateSuppliers*:
  - Added new method to retrieve affiliated suppliers

#### Updated:
- *window.miam.analytics* eventSent$:
  - **entry.add**: Added **product_quantity** prop
  - **entry.delete**: Added **product_quantity** prop

#### Fixed:
- *affiliate basket transfer*:
  - Basket transfer could start before supplier/pos has been set, which would always call forcePosCallback
  - Basket transfer could sometimes end in an infinite loop of current basket refreshes
  - Added support for custom url param "magasin_id"
- *recipe-modal*:
  - Fixed recipe-modal is always at max-width when stor-locator is opened
  - Fixed store-locator was displayed in double when opened from recipe-details
- *window.miam*:
  - user.setLocation now takes a GeolocationPosition as param
- *openPreview*:
  - calls openBasket with a default EventTrace that does not crash
- *i18n*:
  - Added 128 missing EN translations
- *miam-interface*:
  - Added missing JSDoc

#### Internal:
- *store-locator*:
  - Update to 0.2: Removed Coordinates interface as store-loactor now takes a GeolocationPosition as input
- *basket*:
  - 'status' attribute was added to basket model && to sparse fields in basket service
- *window.miam.pos.getByAddress*:
  - Added a suppliers[] parameter
- *window.miam.pos.getByCoordinates*
  - Added a suppliers[] parameter
- *point-of-sales-service*:
- Added a suppliers[] parameter to getByAddress and getByCoordinates methods to filter the suppliers
- *recipe-details service*
  - Add a getter for checking alcohol presence in recipes
  - Subscribed to recipeDetailsOpened$ to fetch recipe details, initialize state, and trigger change detection.
- *window.mealzInternal*
  - Created mealzInternal interface to communicate with Lit components
- *window.mealzInternal.basket.recipesAddedToBasket*
  - Added a method that returns an observable of an array of recipe IDS when recipe are added to the basket
- *window.mealzInternal.basket.getPricingFromBasket*
  - Added a method that returns an observable of an array containing the pricing information for the recipes in the basket
- *window.mealzInternal.recipes.openDetails*
  - Added a method that opens the recipe details by calling the `openRecipeDetails` method of the `recipesService`
- *window.mealzInternal.recipes.updateRecipeLike*
  - Added a method that updates or creates a recipe like entry
- *window.mealzInternal.recipes.guestsUpdated*
  - Added a method that emits an observable notifying when the number of guests has been updated for a recipe
- *window.mealzInternal.recipes.recipePriceUpdated*
  - Added a method that emits an observable notifying when recipe price has been updated
- *window.mealzInternal.recipes.fetchPricing*
  - Added a method that fetches the pricing information for a specific recipe based on the provided parameters.

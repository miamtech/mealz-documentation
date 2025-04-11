---
sidebar_position: 12
---

## Changelog

## v9.1.12 - [04/04/2025]

#### Fixed:
- *basket-sync*:
  - Replacing a product with the same quantity could result in a quantity of 0

## v9.1.11 - [03/04/2025]

#### Fixed:
- *recipe-details*:
  - Fixed null error on out-of-stock check

## v9.1.10 - [03/04/2025]

#### Fixed:
- *recipe-details*
  - Fixed an issue where opening recipe-details from SSR did not correctly update the guest count
- *basket-sync*:
  - Does not send to retailer actions with a quantity of 0 anymore
  - Compared quantity to add with the quantity of deleted entries, resulting in ADD actions with negative quantities
- *basket-preview*:
  - Price was displayed on 3 lines

#### Internal:
- *store-out-of-stock-service*:
  - Now when adding a product times out, it updates its status into out-of-stock and store it in session-storage

## v9.1.9 - [28/03/2025]

#### Fixed:
- *preferences*:
  - Filter tags by supplier

#### Internal:
- Remove tagsWhitelist from:
  - *environment.ts*
  - *environment.uat.ts*
  - *environment.prod.ts*

## v9.1.8 - [26/03/2025]

#### Fixed:
- *recipes-service*:
  - Turned recipeDetailsOpened$ to a Subject to prevent stale data emissions on init

## v9.1.7 - [21/03/2025]

#### Fixed:
- Translations files after 9.1.6

## v9.1.6 - [21/03/2025]

#### Fixed:
- *meals-planner*:
  - Can now open again list of ingredients from recipe in the meals planner view
- *replace-item*:
  - Fixed replacing item from the product view in basket-preview
- *order-history*:
  - Fixed drawer script was called twice when order-history was called in webc
  - Fixed favorites tab did not work when order-history was called in webc
  - Fixed calls to ssr were blocked because they were caught by the interceptor
  - SDK now uses mealz-components@1.2 as history does not exist in 0.7
- *basket-sync*:
  - Basket-sync could sometimes try to compare the retailer cart & the basket before fetching the entries, resulting in not deleting the entries that were not in the retailer cart anymore

#### Internal:
- *analytics*:
  - Handle `journey` property on events

## v9.1.5 - [07/02/2025]

#### Added:
- *window.mealz.basketSync*:
  - Added `defineAddProductsToCart` and `defineRemoveProductsFromCart` as an optional replacement for `definePushProductsToCart` to separate products added and removed

#### Fixed:
- *replace-item*:
  - Fix error when trying to replace an item that was unavailable
- *preferences*:
  - Removed unnecessary tags requests that were done on script init
- *analytics*:
  - Event methods are now queued if library is not initialised yet instead of not being sent

#### Internal:
- *recipe-details*:
  - Use price from BasketEntry instead of fetching items/price
- *basket-preview-product*:
  - Use price from BasketEntry instead of fetching items/price

## v9.1.4 - [31/01/2025]

#### Internal:
- *analytics*:
  - Fixed analytics disabling needed two separate tokens on the client side

## v9.1.3 - [31/01/2025]

#### Fixed:
- *basket*:
  - Fixed incorrect field name on recipes fetch which made the request return more data than necessary

## v9.1.2 - [17/01/2025]

#### Fixed:
- *recipe-details*
  - Price briefly showing "0,00 €" when reopening a recipe in the cart. The price is now hidden during loading

#### Internal:
- *pricings*:
  - Updated `price_per_serve` attribute to `price-per-serve`

## v9.1.1 - [10/01/2025]

#### Added:
- *recipe-catalog*
  - Add search functionality to history tab

#### Updated:
- *analytics*:
  - Can now disable events tracking from supplierToken
- *packages*:
  - Now when retrieving packages, we filter with forced_completion_perc to prevent replacing sponsored product with a non-sponsored one
- *history*:
  - The "explore our catalog" button when there is no order history now redirects to the catalog url defined with mealz.router.setRecipeCatalogUrl('...')
- *drawer-history*:
  - Now refreshing page with drawer history opened will open it back
- *recipe-card*:
  - Added the attribute aria-hidden="true" to recipe picture as redundant with recipe label

#### Fixed:
- *analytics*:
  - Called setAffiliate method when the value changes from localStorage
- *basket-synchro*:
  - Fix skip condition that was wrongly update from `=== 0` to `< 1`
- *replace-item*:
  - Fix regression where selected item was not at the top of the list
- *store-locator*:
  - getByCoordinates had inverted coordinates parameters in miam-interface

#### Internal:
- *window.mealzInternal.user.setSessionId*:
  - New method to synchronize the session ID with SSR

Merged 9.0.8 in 9.1 -> See v9.0.8 for changes

## v9.1.0 - [20/12/2024]

#### Added:
- *promotions*:
  - New promotion badges on product cards and on replace-item cards, also displays the old and new price before / after the promotion
  - New promotion badge on recipe cards
  - New promotions banner on catalog page, it is hidden by default and must be displayed manually
- *recipe-details*
  - Displayed a "Last Order" badge showing the date of the user's most recent order (if applicable)
  - Added the logic for the "Last Order" modal
  - Added a banner under the recipe steps in the "Cooking" tab to allow users to reorder previously ordered recipes
  - Can now replace unavailable products
- *last-order-modal*
  - Created a component triggered by clicking the "Last Order" badge, allowing users to reorder recipes not currently in their basket
- *basket-preview*
  - Add footer to redirect to client's cart
- *analytics*:
  - New basket.display event sent on click on "X recipes in your basket" in catalog
  - New home.display event sent on click on "See more recipes" in recipe details
  - New recipe.shopping.display event sent on click on "Shopping" in recipe details
  - New recipe.coooking.display event sent on click on "Cooking" in recipe details
  - New entry.ignore event sent on click on "Ignore" in product card
  - New entry.replace event sent on click on "Replace" or "Choose a product" in product card
- *window.mealz.basket.openPreview*:
  - New `analyticsPath` property for analytics
- *window.mealz.user*:
  - Added a method `loadWithAuthlessId: (id: string, forbidProfiling?: boolean) => void` to inform Mealz of the authless-id fetched with the SSR route /generate-authless-token
  - Added a method `updateForbidProfiling: (forbidProfiling: boolean, userId: string, isAuthless: boolean) => void` to inform Mealz that the profiling permission has changed during execution. It can be used for both logged mode and authless mode (ex: logged user : `updateForbidProfiling(true, 'user-id')` | authless user: `updateForbidProfiling(true, 'MEALZ-AUTHLESS-12345', true)`)

#### Updated:
- *catalog-header*
  - Header label changes to "My space" when history is enabled; otherwise, it remains "Favorites"
- *catalog-toolbar*
  - "Filters" and "Preferences" buttons are now hidden in the "Favorites" page
  - "Filters" and "Preferences" are not applied in the "Favorites" page
  - Button label changes to "My space" when history is enabled; otherwise, it remains "Favorites"
- *recipe-catalog*
  - Text changes to "My space" when history is enabled; otherwise, it remains "Favorites"
  - Display "Favorites" and "History" tabs when history is enabled
  - History content is shown only when order history is enabled.
- *recipe-details*
  - Removed the footer with the CTA "Add X products (XX,XX€)" in the "Cooking" tab
- *products-picker*:
  - Unavailable products now display into the default section
- *product-card*:
  - New view for unavailable state
- *modal*
  - Adjusted CSS using ">" selectors to prevent styles from affecting multiple simultaneously displayed modals
  - Removed the footer with the CTA "Add X products (XX,XX€)" in the "Cooking" tab
- *product-card-skeleton*:
  - Updated design regression
- *window.mealz.supplier.setupWithToken*
  - Now checks for orderHistory attribute in the supplier token and sets orderHistoryEnabled accordingly
- *in-viewport*:
  - Handle unsubscription to prevent memory leaks
- *basket-preview-line*:
  - Updated recipe total price to take in account discounted products

#### Fixed:
- *preferences*:
  - Fix issue where removing every preferences manually wouldn't remove them from the cache

#### Internal:
- *window.mealzInternal.analytics*:
  - New sendEvent method to send analytics events via mealz-shared-analytics
- *window.mealzInternal.recipes.openDetails*:
  - New `analyticsPath` and `categoryId` properties for analytics
  - Added a parameter to open the recipe details on a specific tab
- *window.mealzInternal.recipes.updateRecipeLike*:
  - New `path` property for analytics
- *price-service*:
  - Add new service to handle prices display
- *basket-entries*:
  - Add new price attribute to basket entries type
- *prices*:
  - Changed prices type from string to number
- *unavailable-badge*:
  - Created new components to display the number of unavailable products and on unavailable products itself
  - Add scroll to product card event
- *out-of-stock-overlay*:
  - Created new component that overlay product card when a product is out of stock

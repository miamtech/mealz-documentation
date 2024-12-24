---
sidebar_position: 12
---

## Changelog

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

## v9.0.7 - [16/12/2024]

#### Updated:
- *my-meals*:
  - Reverted the no meals commit as it was potentially breaking

## v9.0.6 - [13/12/2024]

#### Added:
- *window.mealz.config.mealzLogs(param)*:
  - Call method in order to filter mealz logs with 'none' < 'error' < 'warn' < 'all' as parameter

#### Updated:
- *basket-sync*:
  - Now adding a basketEntry on status initial from the replace-item view also fetches the required quantity
  - Added sync method to update Mealz basket with retailer cart if updates were not caught manually
  - Timeout on action is now set to 10 seconds
  - Change remove condition to `quantity < 1` rather than `quantity === 0` in order to prevent edge cases
- *product-card*:
  - Now uses `sponsored` attribute from item to display sponsor badge
- *replace-item*:
  - Now displays sponsored badge, item weight and price per unit
- *my-meals*:
  - Added picture to no meals view and centered the view on the modal

#### Fixed:
- *basket-sync*:
  - Fixed `compareProducts` method that wrongly compared mealz basket with retailer cart
- *recipe-details*
  - Fix guests update request being sent on SSR component init
  - Fixed loaders in footer were infinite when the basket actions timed out

#### Internal:
- *deepClone*:
  - Moved deepCloneWithClass to its own specific file
- *product-badges*:
  - Split the product badges (sponsored, capacity, price per unit) into a new component

## v9.0.5 - [29/11/2024]

#### Fixed:
- *preferences*
  - Only cache preferences for SSR
- *window.miam.analytics.eventSent$*:
  - Fixed a duplicated origin and missing "/miam" in the path
- *recipe-details*:
  - Fix guests update request being sent on component init
- *basket-sync*:
  - Removing a recipe with deleted products tried to remove said products again from retailer cart
  - Fix recipe tried to be removed/udpated/added again if precedent request had failed

## v9.0.4 - [21/11/2024]

#### Fixed:
- *recipe-details*:
  - Fixed an issue where loaders would get stuck when attempting to update the number of guests for a recipe not present in the basket.

#### Updated:
- *basket-synchro*:
  - Now handles authless basket transfer

#### Internal:
- Added StatesService to hold various global states and avoid circular dependencies

## v9.0.3 - [20/11/2024]

#### Fixed:
- *basket-synchro*:
  - Now works for every basket entry updates from *meals planner*

## v9.0.2 - [15/11/2024]

#### Added:
- *preferences-component*:
  - webc-miam-preferences-modal is now available in DOM and can be opened through mealzInternal.catalog.openPreferences()

#### Updated:
- *basket-synchro*:
  - Added flexibility to specify whether the callback should be invoked with a single BasketEntry or an array of BasketEntry objects.
  - Added cdr.detectChanges() to loading indicators to improve responsiveness and provide a smoother user experience.
- *product-card*:
  - Slight design tweaks
- *recipe-details*:
  - Added disabled state to guest counter input when updates are being made to the basket

#### Fixed:
- *basket-synchro*:
  - Resolved issue with recipe removal when ingredients are shared across multiple recipes.

#### Internal
- *mealzInternal.catalog*:
  - Add *preferencesCount* observable to display number of selected preferences
  - Add *openPreferences* method to open preference modal
  - Add *preferencesModalChanged* observable to notify when preferences have changed

Merged 8.3.13 in 9.0 -> See v8.3.13 for changes

## v9.0.1 - [24/10/2024]

#### Updated:
- *basket-synchro*:
  - Fixed some issues with mix of retailer cart and Mealz basket actions
  - Now compare basket with basket entry and not retailer cart, had to adapt most logics
  - basketEntry has now attribute quantity and quantity_to_add, adapting basket update routes that uses from-ingredient route
  - Now store previousSupplierCart to be able to compare it with current supplier cart
  - Adjust quantity on basket entry and not item as it didn't work properly on replace item with different quantities
  - Improved logic on recipe deletion
  - Logic needed to replace item has moved to match basket synchro process
- *recipe-details*:
  - Remaining price is now calculated on basketEntry total price * **quantity_to_add** and not **quantity** anymore
- *counter-input*:
  - Now add class disabled on whole counter input to be able to override style
- *replace-item*:
  - Now specifies number of guests when using /items/search route

#### Internal:
- *replace-item*:
  - Add guest parameter to search route

#### Fixed:
- *recipe-details*:
  - Fixed the recipe-details picture's height on smaller screens
- *basket.service*:
  - Replace route /baskets/**basketID**/update_pricebook with /baskets/update_pricebook
- *basket-synchro*:
  - Improved unsubscribe logic that broke once testing on suppliers website
- *mealz.basket.reset()*:
  - Fixed usage on basket with recipes without ingredients

## v9.0.0 - [18/10/2024]

#### Breaking changes:
- *product-card*:
  - Design has changed to accommodate the upcoming promotions update:
    - the products img and infos are in a row instead of a column
    - price & CTA have moved to a second row between the infos and the replace / ignore buttons
    - Replace and ignore buttons are now on the third row
  - Added *.miam-product-card__promotion__container* for the blank space where the promotions will be in the future
  - *.miam-product-card__replace-product* has been moved to new block *.miam-product-card__footer__actions*
  - *.miam-product-card__ignore-product* has been moved to new block *.miam-product-card__footer__actions*
- *recipe-card*:
  - For recipes that are drinks, the badge in the upper left now reads "Drink Idea" instead of "Meal idea"
- *counter-input*:
  - Removed *.ghost* and *.small* classes on buttons *.miam-counter-input__plus* and *.miam-counter-input__minus* except for the counter-inputs present on the product-cards
  - Changed the default color of the plus and minus img for the product-card to black
- *miam-price*:
  - Moved the price to a div.miam-price__current to prepare for the future promotions update
- *window.miam*:
  - Renamed to window.mealz
- *window.mealz*:
  - *user.setLanguage()*:
    - for configuration purposes, the client is now required to call `window.mealz.user.setLanguage('...')` with the desired language in ISO 639-1 format or their custom language code if using Mealz-API-SSR
  - *basketSync.definePushProductsToBasket*:
    - renamed method to *definePushProductsToCart* to make the distinction between the term Basket (= Mealz side) and Cart (= Retailer side)
  - *basket-synchronization*:
   - The new basket synchronization needs the retailer to send an update of the user's cart so that Mealz products are visually added to cart
   - **A further update will be needed to permit actions on Mealz' basket without receiving a retailer cart**
  - *analytics.init()*:
    - Removed Optimize Key param

#### Added:
- *skeleton*:
  - New component that is used as placeholder for loading data
- *product-card-skeleton*:
  - Take the same HTML hierarchy as product-card and replace data placeholder with *skeleton*
- *product-card*:
  - Added a debounce on the counter-input 
- *interceptor-service*:
  - Added method to manage session id in headers instead of cookies
- *analytics*:
  - new recipe.sponsor event sent on click on the sponsor's "Learn more" button in recipe details
  - new planner.started event sent on start of the Meal Planner journey
  - new planner.recipe.delete event sent on recipe removal in the Meal Planner's results
  - new planner.finalize event sent on click on "Finalize" button in Meal Planner
  - new category.display event sent on click on "See all" button in categories

#### Updated:
- *basket-synchro*:
  - Moved previous basket synchro to legacy-basket-synchro, and created a new one with new logic
- *product-card*:
  - Changed appearance to fit promotion
  - Now displays the price per unit

#### Fixed:
- *recipe-card*:
  - Fixed an issue where the recipe-card listener reset the guest count to its initial value when the recipe was in the basket and the guest count was updated.
- *analytics*:
  - Fixed some events (entry.replace, planner.confirm, recipe.display, pageviews, ...) timing and props

#### Internal:
- *interceptor-service*:
  - Moved the version number to a separate file so that we only need to update it once.
- *analytics*:
  - Use mealz-shared-analytics instead of internal service
- *retailer-cart-demo*:
  - New demo tab to simulate a retailer cart and interactions with the products (add, update, remove)
- *mealzInternal*:
  - user.getLanguage() method added
  - supplier.getToken() method added
  - getStickyHeaderHeight method added
  - Added a method user.isAuthenticated that returns an observable of a boolean with the current authentication status of the user
  - Added a method recipes.recipeLikeUpdated that returns an observable of the recipe id and its like status
  - *catalog*:
    - Add methods to open filter and preferences modal
    - Add loadMoreRecipes method
- Replaced the previous method of storing the session ID in cookies with a new session-id header, with the value stored in sessionStorage.


## Upgrading from 8.7

#### Setup
- Change all window.miam with window.mealz
- Change `window.mealz.basketSync.definePushProductsToBasket` to `window.mealz.basketSync.definePushProductsToCart`
- If planning to use Mealz-SSR-API: Add a call to `window.mealz.user.setLanguage()` after `window.mealz.supplier.setupWithToken`

#### Components

**Recipe card**:
- If you have overridden the badge, the drink badge will either override your change or be overridden itself. You should consider overriding it with your current badge until you decide to set a specific override for the drink badge.

**Counter-input**:
- The counter-input on the product-card now has a bicolor style, which adds the class '.bi-color' to the component and removes '.ghost' and '.small' class to the buttons
- Check if the new 'bi-color' parameter requires you to update your overrides of the component

**Miam-price**:
- Make sure your overrides are still working, and consider moving them to the new class to prepare for future updates

**Product-card**:
- A lot of style has changed (see the Changelog for full details). Consider doing a full checkup on the style, and feel free to ask us for advice on updating your mockups, especially if you are interested in the promotions update that will come later to fill the current blanks in the product-card

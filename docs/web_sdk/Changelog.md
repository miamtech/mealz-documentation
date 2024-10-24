---
sidebar_position: 11
---

## Changelog

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

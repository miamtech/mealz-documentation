---
sidebar_position: 12
---

## Changelog

## 10.0.3 - [28/11/2025]

#### Internal:
- Update mealz-component version to 2.0.2

## 10.0.2 - [28/11/2025]
Merged 9.1.23 in 10.0 -> See v9.1.23 for changes

## 10.0.1 - [10/11/2025]

#### Internal:
- *analytics*
  - Added `journey` param to sendEvent analytic function.
  - Update `mealz-shared-analytics` to `4.9.0`

## v10.0.0 - [30/10/2025]

/!\ This version is intended to work only with the SSR project. Do not use it as a standalone SDK.

#### Breaking changes:
- Upgraded from `miam-ds@1.2.6` to `mealz-ds@2.0.0`. The design system was renamed from `miam-ds` to `mealz-ds`, and all references were updated accordingly.
- All `ng-miam-*` and `webc-miam-*` components listed below have been renamed using the `mealz-*` prefix. Additionally, all CSS class names with `miam` have been updated to `mealz`.
  - *ng-miam-no-pos-selected*
  - *ng-miam-products-picker*
  - *ng-miam-slider-tabs*
  - *ng-miam-replace-item*
  - *webc-miam-basket-transfer-modal*
  - *webc-miam-last-order-modal*
  - *webc-miam-no-supplier-onboarding*
  - *webc-miam-recipe-addon*
  - *webc-miam-recipe-details*
- The following components have been renamed:
  - *ng-miam-progress-tracker* → *mealz-planner-budget-gauge*
  - *ng-miam-store-locator* → *mealz-store-locator-drawer*
  - *webc-miam-recipe-details-infos* → *mealz-details-infos*
  - *webc-miam-recipe-details-ingredients* → *mealz-details-ingredients*
  - *webc-miam-recipe-details-steps* → *mealz-details-steps*
  - *webc-miam-recipe-modal* → *mealz-drawer-view-swapper*
  - *webc-miam-store-locator-link* → *mealz-store-indicator*
- All sponsor-related components have been deprecated and replaced by a single, unified component: *mealz-sponsor-block*
  (Note: The internal CSS classes remain unchanged)
  - *ng-miam-sponsor-block-container*
  - *ng-miam-sponsor-image-and-text-block*
  - *ng-miam-sponsor-image-with-text-block*
  - *ng-miam-sponsor-logo-block*
  - *ng-miam-sponsor-picture-block*
  - *ng-miam-sponsor-small-picture-block*
  - *ng-miam-sponsor-small-text-block*
  - *ng-miam-sponsor-small-title-block*
  - *ng-miam-sponsor-text-and-image-block*
  - *ng-miam-sponsor-text-block*
  - *ng-miam-sponsor-title-block*
- The following components were removed due to lack of usage:
  - *ng-miam-tabs*
  - *ng-miam-time-picker*
  - *ng-miam-toaster*
  - *webc-miam-toaster-stack*
- These components have been fully removed as they are deprecated and no longer maintained:
  - *ng-miam-addon-link*
  - *ng-miam-guests-dropdown*
  - *ng-miam-meals-planner-basket-confirmation*
  - *ng-miam-meals-planner-basket-preview*
  - *ng-miam-meals-planner-catalog*
  - *ng-miam-meals-planner-form*
  - *ng-miam-meals-planner-result*
  - *ng-miam-preferences*
  - *ng-miam-tooltipable-content*
  - *webc-miam-basket-preview-block*
  - *webc-miam-basket-preview-disabled*
  - *webc-miam-basket-preview-line*
  - *webc-miam-meals-planner*
  - *webc-miam-recipes-history*
  - *webc-miam-sponsor-storytelling*
  - *webc-miam-warning-store-locator*
- *window.mealz*
  - *basketSync.defineRemoveProductsFromCart*: the callback is now called with products with positive quantities
  - *features.enableGuestsInputOnMyMeals*: Removed method as unused
  - *features.enableArticlesInCatalog*: removed, do not call this feature anymore

#### Updated:
- Now uses mealz-component drawer for:
  - *basket-preview*
  - *history-drawer*
  - *recipe-addon*
  - *recipe-details*
  - *replace-item*
- *no-supplier-onboarding*:
  - Removed component
- *meals-planner*:
  - removed component
- *mealz-ds*:
  - Update to 2.0.0
- *articles*:
  - Removed everything related to articles
- *webpack-config*:
  - Refactored webpack output function name for improved SDK compatibility and conflict resolution
  - Enhanced build configuration to support concurrent SDK versions
- *context-service*:
  - Improved window assignments to prevent overwriting existing properties
  - Enhanced RxJS stream handling for better performance

#### Added:
- *add-to-cart-cta*:
  - Created new AddToCartCtaService that extends LoadSsrScriptsAndLinksService for loading SSR-based add-to-cart CTA components
- *recipe-suggestions*:
  - Enhanced recipe suggestion URL construction to include user preferences filters, improving the relevance of suggested recipes

#### Fixed:
- *replace-item*:
  - Fixed issue where searching for a product without number of guest did not work, made the parameter optional
  - Fixed issue where switching between recipes and product view always scrolled to previous recipe shown
  - Replacing a basket-entry without information about its ingredient now works
- *recipes*
  - Resolved an issue where the `loadRecipes` function failed to load recipe titles, resulting in empty recipe badge names in the product view of the basket preview
- *modal-injection*:
  - Enhanced modal injection logic for better reliability and conflict prevention
  - Improved modal component initialization and lifecycle management
- *add-to-menu*:
  - Removed parameter check that prevented add-to-menu requests in some cases
- *baskets-service*:
  - Renamed `recipesInBasket()` method to `recipePricesInBasket()` for better clarity and consistency
  - Updated all references to the renamed method across context, recipe-details-products, and recipe-details services

#### Internal:
- *analytics-service*:
  - Update MealzSharedAnalytics to 4.7 and add environment parameter on init 
- *meals-planner-service*:
  - Created new service to give access to meals-planner routes (menu, menu-recipes)
- *interceptor-service*:
  - Now update requests content-type header to application/vnd.api+json if not set already
- *url-params-handler*:
  - Removed logic that added / removed url params depending on the drawer view and migrate it on mealz-component side
- *basket-synchro*:
  - Link actions on item without recipe to basket synchro
  - Added action to add item without recipe to basket
- *basketUtilsService*:
  - Created service that currently add methods to retrieve required basket preview data
- *context-registry*:
  - Added **service** to store variables, callbacks and main data observables, will require full migration later
- *git-hooks*:
  - Added a pre-push hook that runs tests before pushing anything upstream
- *new-recipe-details-service*:
  - Created new service to improve recipe-details service and give access to data to mealzInternal
- *product-replacement-service*:
  - Move its content to replace-item service and deleted service
- *readme*:
  - Edit README.md since documentation is now online
- *recipe-details-products-service*:
  - Created new service to diminish recipe-details service responsibilities and give access to data to mealzInternal
- *recipe-details-products-planner-service*:
    - Created new service to give access to data to mealzInternal in planner view
- *replace-item-service*:
  - Created new service and moved logics from component to service and gave access to it in mealzInternal
- *load-lit-drawer-service*:
  - Created new service in order to load lit-drawer
- *load-ssr-scripts-and-links-service*:
  - Created new service in order to load scripts and links from SSR in a generic way
- *window.mealzInternal.basket*:
  - Added *removeRecipe* to remove a recipe from the basket
  - Added *transfer* to transfer the basket to a retailer
  - Added *displayProductsInBasket* to retrieve if we display the product segment in the basket preview
  - Added *basketPreviewState* to get the state of the basket preview
  - Added *updateRetailerBasketFromPlanner* to update the retailer basket from the planner
- *window.mealzInternal.catalog*
  - Removed *openPreferences*
  - Removed *preferencesModalChanged*
  - Removed *preferencesCount*
- *window.mealzInternal.html*:
  - Added *like* to retrieve the like button HTML with its initial state from a recipe-id
- *window.mealzInternal.planner*:
  - Added *itemToReplace$* to emit the item to replace from recipe details view
  - Added *itemsWithPricesList* to emit the list of items with prices
  - Added *fetchingItemLoading$* to emit if items are getting fetched
  - Added menuPrice$ to emit the total price of the menu in the planner
  - Added plannerRecipePrice$ to emit the price of the recipe currently displayed in the planner
  - Added *getMenuRecipeId* to get the menu recipe id for a recipe
  - Added *selectProduct* to select a product in the planner
  - Added *unselectProduct* to unselect a product in the planner
  - Added *replaceProduct* to replace a product in the planner
  - Added *rejectRecipe* to reject a recipe in the planner
  - Added *getSuggestedRecipes* to retrieve suggested recipes
  - Added *replaceProduct* to replace a product in the planner from the replace item modal
  - Added *openReplaceItemView* to open replace item view
  - Added *searchItem* to search for an item from replace item modal
  - Added *updateGuests* to update the guests count
  - Added *getGuestsForRecipe* to get the number of guests for a recipe using its ID
- *window.mealzInternal.pos*:
  - Added *currentPos* to retrieve the current POS
  - Added *loadPos* to load point of sale data
  - Added *basketLoadedForNewPos* to retrieve the updated basket after a new POS has been selected
- *window.mealzInternal.preferences*:
  - Added *preferencesCount* to get the number of selected preferences
  - Added *guests$* to listen to guests changes
  - Added *resetTagsActions* to reset tags actions
  - Added *tagShouldBeChecked* to check if a tag should be checked
  - Added *resetPreferences* to reset all preferences
  - Added *sendCacheRequest* to manage preferences cache
  - Added *preferencesInStorage* to get preferences from storage
  - Added *tagsToAdd* to get tags to add
  - Added *addTag* to add a tag to preferences
  - Added *removeTag* to remove a tag from preferences
  - Added *updatePreferences* to update preferences
  - Added *preferencesChanged$* to listen to preferences changes
  - Added *preferencesChanged* to notify subscribers when the preferences have changed
  - Added *addPreferencesToRemoteFilters* to add preferences to remote filters
  - Added *newTagFromSearch* to add a new tag from search
- *window.mealzInternal.products*:
  - Added *changeQuantity* to change the quantity a product
  - Added *removeProduct* to remove a product
- *window.mealzInternal.productAddition*:
  - Added *productAdded$* that triggers when a product is added from the add drawer
- *window.mealzInternal.recipes*:
  - Added *displayedRecipe$* to retrieve the currently displayed recipe
  - Added *productsByCategory$* to retrieve the products by category
  - Added *productsPlannerByCategory$* to retrieve the products by catagory in planner view
  - Added *noPosDisplay$* to retrieve the state of the no POS display
  - Added *invalidPosDisplay$* to retrieve the state of the invalid POS display
  - Added *remainingBasketEntries$* to retrieve the remaining basket entries
  - Added *recipePrice$* to retrieve the recipe price
  - Added *replaceBasketEntry* to open replaceItem view with the basket entry to replace
  - Added *orderHistoryDate$* to fetch the label of the last order date
  - Added *addAllIngredientsToBasket* to add every ingredient from a recipe to the basket
  - Added *allIngredientsToBasketLoading$* to listen to the state of the method addAllIngredientsToBasket
  - Added *productIsBeingAdded* to listen on product additions and return true if the product provided is being added
  - Added *addToBasket* to add a recipe to the basket
  - Added *ingredientToBasketLoading$* to check if an ingredient is being added to the basket
  - Added *ingredientRemoved* to remove an ingredient from the basket
  - Added *updateProductQuantity* to update the quantity of a product
  - Added *updateIngredientFromBasketLoading* to listen to the state of the method updateProductQuantity
  - Added *ignoreProduct* to ignore a product
  - Added *productsLoading$* to listen on products loading
  - Added *updateGuests* to update the number of guests for a recipe
  - Added *getIsRecipeDetailsSSR* to listen whether the recipe details is being rendered server-side (SSR)
  - Added *setIsRecipeDetailsSSR* to set the server-side rendering (SSR) state for the recipe details
  - Added *isRecipeInBasket* to check if a recipe is in the basket
  - Added *getRecipeLike* to retrieve recipe like status by recipe ID
- *window.mealzInternal.replaceItem*:
  - Added *basketEntryToReplace$* to retrieve the basket entry to replace
  - Added *replaceProductFromPreviewOpen$* to get replace item modal state and basket entry from basket-preview
  - Added *additionModalOpen$* to get replace item modal state from product addition
  - Added *itemsWithPricesList$* to get the list of item to display in replace item modal
  - Added *fetchingItemLoading$* to get fetching item loading state
  - Added *searchItem* to call to fetch item from query
  - Added *onSelectItem* to call to select item from replace item modal
  - Added *replaceItemLoading$* to fetch loading state when selecting a product
- *window.mealzInternal.router*:
  - Added *getRetailerCartUrl* to retrieve the retailer cart URL
- *window.mealzInternal.sponsor*
  - Added *hasStorytelling* to check if a sponsor has storytelling content available
  - Added *getSponsorBlocks* to retrieve all sponsor blocks associated with a given sponsor, sorted by position
- *window.mealzInternal.storeLocator*:
  - Added *open* to open the store locator
  - Added *openWarning* to open the store locator warning modal
  - Added *newStoreSelected* to notify subscribers that a new store has been selected
  - Added *changePosAndSupplier* to change the POS and Supplier from the store locator
  - Added *close* to close the store locator with event analytics
- *window.mealzInternal.supplier*:
  - Added *isNoSupplier* to check if the retailer is a not a supplier
  - Added *currentSupplier* to retrieve the current Supplier
- *window.mealzInternal.tags*:
  - Added *all* to retrieve all tags with remote filtering by tag type and supplier
  - Added *autocomplete* to search tags with autocomplete functionality
- *window.mealzInternal.hook*:
  - Added hookCallback for supplier logging and POS validation
- *window.mealzInternal.user*:
  - Added userCoordinates$ to observe the user's geolocation coordinates
- *window.mealzInternal.noSupplier*:
 - Added addRecipeToBasketFromIdAndOpenPreview to be able to add a recipe to basket following noSupplier journey and open the basket preview when done
 - Added displaySupplierSelector$ to be able to open the supplierSelector in mealz component from SDK

## v9.2.9 - [30/10/2025]
Merged 9.1.22 in 9.2 -> See v9.1.22 for changes

## v9.2.8 - [02/10/2025]

#### Added:
- *recipe-card*:
  - Added `contextId` input to support per-card batched suggestion contexts (used for shelf positions)

#### Internal:
- *recipes*
  - Replaced per-card single recipe fetches with debounced batch requests

## v9.2.7 - [01/09/2025]

#### Fixed:
- *recipe-details*:
  - Update product-cards when the selected-item of an ingredient changes after modifying the number of guests

## v9.2.6 - [04/08/2025]

#### Fixed:
- Event analytics url for recipe.add

## v9.2.5 - [23/06/2025]

#### Fixed:
- condition related to pricebook deprecated

## v9.2.4 - [23/06/2025]

#### Removed:
- *pricebook*:
  - No more used, we removed all related code

## v9.2.3 - [10/06/2025]

#### Fixed:
- Accessibility fixes on recipes picture aria-hidden, badge alt and role lists

## v9.2.2 - [09/06/2025]

#### Updated:
Improved accessibility across components (recipe-details, counter-input, like-button, modal ...) following French RGAA standards

Merged 9.1.15 in 9.2 -> See v9.1.15 for changes

## v9.2.1 - [31/03/2025]

#### Fixed:
- *recipe-card*:
  - Generic card didn't redirect to catalog

## v9.2.0 - [28/03/2025]

#### Added:
- *recipe-card*:
  - Added a generic card to redirect to the catalog instead of leaving the card empty when no recipe has been found
- *recipe-catalog*:
  - Added new "All recipes" button

#### Fixed:
- *recipe-catalog*:
  - mandatory completion filters were added on all filters instead of in-place

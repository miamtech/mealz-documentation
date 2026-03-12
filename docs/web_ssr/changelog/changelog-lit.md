---
sidebar_position: 2
---

# Mealz components Changelog

## 2.6.3 [Unreleased]

#### Fixed
- *basket-transfert-modal*
  - Fix define component was `mealz-basket-preview` instead `mealz-basket-transfert-modal`

## 2.6.2 [03/03/2026]

#### Updated
- *no-pos-selected*:
  - Use `mealzInternal.hook.hookCallback(false, true)` to open the store selector of the supplier
- *planner-current-menu*:
  - When landing directly on the planner URL endpoint, default to the featured suggestions journey (prefill menu with current suggestions) without requiring the `fromFeatured` query parameter.
  - Removed deprecated planner assets: `planner-dashboard`, `planner-card-link`, `planner-banner`.
  - Cache current recipe URL in `sessionStorage` before opening the store selector so users return to the same recipe after POS selection
  - Cache finalize-menu URL in `localStorage` and automatically resume finalize flow after login and POS initialization when returning to the planner

#### Fixed
- *planner-current-menu*:
  - Prevent DOM lookup guard from blocking the footer button update when `storeId` is missing (icons are not rendered in that state).
- *planner-onboarding*:
  - Updated the planner onboarding with the new quick-menu component
- *product-card-planner*:
  - Guard against undefined `product`
- *accordion*:
  - Preserve slotted DOM nodes (avoid `innerHTML`) so Lit property bindings survive; fixes planner "Déjà dans le placard" items rendering empty cards

## 2.6.1 [12/02/2026]

#### Fixed
- *all-components*
  - Removed the @customElement decorator to avoid duplicate custom element registration

## 2.6.0 - [12/02/2026]

#### Added
- *catalog-category*
  - Added `journey: "meals-space-header"` to pageview events to identify traffic coming from the header
- *catalog-home-header*
  - Triggered `category.display` on click of the header CTA
- *recipe-card-cta*
  - Added optional `toBasketOnClick` (via starting-data): when true, CTA adds all ingredients to basket on click instead of opening recipe details, with loading state and `entry.add-all` analytics
- *recipe-to-basket*:
  - Added component orchestrating guests counter, products list and CTA
  - Reads `starting-data` (recipeId, guests, planner) and initializes SDK
  - New CSS for component

#### Updated
- *planner*
  Can now add recipe to menu without having to be authenticated. authentication is required when trying to push menu to Basket
- *products-to-basket-cta*:
  - SSR-hydratable CTA to add all remaining recipe ingredients to basket
  - Sends analytics event `entry.add-all` with `recipe_id` and `entry_count`
  - New CSS for component
- *counter*:
  - Add SSR hydration path (reuse server DOM) and `starting-data` parsing
  - Sync value and minus-button state via DOM selectors; debounce event emission
- *price*:
  - Read `starting-data` for `price`/`oldPrice`; init formatter on connect
- *product-badges*:
  - Read `starting-data`; conditionally render capacity and price-per-unit only when available
  - Locale-aware number formatting for capacity
- *product-card*:
  - Default property values; safer props mapping; improved image `alt`
  - Normalize SSR product (resolve included `selected-item`, map `ext-id`)
  - Open Replace Item drawer directly when outside recipe details; rename replace buttons classes
- *products-picker*:
  - SSR-friendly hydration with skeletons; remove SSR template once client data flows
  - Parse `starting-data` (planner, analyticsPath, recipeId) and null-safe counts/tags
- *replace-item*:
  - Integrate `GuestObserverService`; accept initial/current guests through stream; type-safety cleanups
- *drawer*:
  - Initialize component stylesheet via `styleURL` in constructor
- *planner-entry*:
  - Replaced CSS variables with existing one

#### Fixed
- *drawer*
  - Added fallback value for z-index calculation to ensure proper layering when CSS variable is not defined
- *recipe-details*
  - Improved CSS selector specificity for like-button styling to prevent style conflicts
- *planner-quick-menu*
  - Removing a recipe on mobile on suggestion view did not update the recipe list display
- *products-to-basket-cta*:
  - Preserve SSR-rendered count and remaining price until live data arrives
  - Properly toggle disabled/loading states and format price via `PriceService`
- *product-card*:
  - Prevent runtime errors with missing relationships/attributes; guard DOM updates when disconnected
  - Safer calculation of “in X recipes” and guests-based quantities
- *replace-item*:
  - Guard undefined inputs; compute banner quantity using ingredient attributes fallback
- *counter*:
  - Improve initial state handling and minus-button "remove" state at min value

#### Internal
- *planner-onboarding-modal*
  - Added `init-planner-onboarding-modal` helper for SSR-injected scripts
- *like-button*, *recipe-card-cta*
  - Added style URL initialization in constructor to ensure styles are properly loaded
- *no-shadow-element*
  - Enhanced style management to support style injection into Shadow DOM or document head based on context
  - Improved style cleanup logic to handle Shadow DOM scenarios and prevent style leaks
  - Added automatic detection of ShadowRoot context for proper style container selection

## 2.5.1 - [05/02/2026]

#### Fixed
- *planner-quick-menu*
  - Loading thumbs in webview version was unstable

#### Updated
- *catalog-home-header*
  - Increase header height to 200px on desktop for custom header

## 2.5.0 - [22/01/2026]

#### Added
- *planner-current-menu*
  - Added support for prefilled recipes from "selection du moment" when coming from planner-entry
  - Added public API method `displayCurrentMenuModal()` to centralize modal logic for menu replacement scenarios
  - Added handling for prefilled recipes flow with automatic addition to menu when menu is empty
  - Added modal prompt when menu already contains recipes, allowing user to replace or keep current menu
  - Add auth check on suggestion add recipe, add menu to basket and add recipe from catalog

#### Updated
- *planner-current-menu*
  - Refactored to handle prefilled recipes from starting-data (recipesId and recipeImgs)
  - Improved recipe addition flow with loader display during prefilled recipes processing
  - Enhanced menu replacement logic to remove existing recipes before adding prefilled ones
- *planner-form*
  - Refactored to use centralized `displayCurrentMenuModal()` method from planner-current-menu component
  - Improved loader state management when user chooses to keep current menu
- *planner-menu-option*
  - Simplified code by moving prefilled recipes logic to planner-current-menu component
  - Improved menu title management with `shouldUpdateMenuTitleOnRedirect` flag for better title consistency
  - Removed redundant methods (startPrefilledRecipesFlow, displayAddToBasketLoaderView, etc.) now handled by planner-current-menu
  - Remove auth check on click
  - Added props guest to `planner.mode.select` event

#### Internal
- *planner-current-menu*
  - Added `firstValueFrom` import from rxjs for async recipe operations
  - Added state tracking for prefilled recipes (prefilledRecipeIds, prefilledRecipeImgs, hasAddedPrefilledRecipes)
  - Centralized modal display logic to reduce code duplication across planner components

## 2.4.2 - [13/01/2026]

#### Fixed
- *planner-current-menu*
  - Page now scrolls to top when arriving on the current menu planner page
- *recipe-card*
  - In planner mode, recipe details no longer open automatically when adding a recipe to the menu from the recipe list catalog

## 2.4.1 - [11/01/2026]

#### Updated
- *details-footer*
  - Updated remove-from-menu button styling with secondary button class and improved icon (Cross_primary.svg)
  - Added hover effect to change icon on hover for better visual feedback

#### Fixed
- *onboarding*
  - Fixed pointer-events restoration after onboarding completion to ensure click handlers work properly on recipe suggestion action buttons
- *preferences*
  - Fixed preferences update order to ensure cache is updated before emitting `preferencesChanged()` event, preventing consumers from using stale data
- *planner-recipe-list*
  - Fixed CSS selector specificity for suggestions button to properly hide on desktop viewports (≥1024px)
- *planner*
  - Menu title is now consistently set/updated across planner flows (including direct redirect flows), using a shared formatter that includes the date.
  - Guests are now retrieved from planner-entry storage (`_mealz/planner/guests`, validated 1–30) when needed (e.g. menu reset / prefilled menu flows), avoiding mismatches with the user selection.
  - Now reloads the page when the user gives up their menu instead of redirecting to the catalog home page
- *planner-onboarding*
  - In planner mode, the recipe-details onboarding step now targets the first available product checkbox instead of assuming the first card is selectable.
- *planner-recipe-suggestion*
  - Prevent repeated "Ajouter au menu" actions when the add button is already in a loading state.
  - Added max-height breakpoints to ensure the suggestion's CTAs and arrow always stay visible
  - Fixed preferences refresh to replace existing suggestions instead of appending, ensuring fresh suggestions when preferences change
  - Added deferred refresh mechanism to handle preferences changes during animations or loading states, preventing UI desynchronization
- *recipe*
  - Added optional chaining to prevent errors when accessing sponsor logo URL when sponsor data is missing
- *recipe-card*
  - Prevent duplicate add/remove actions while the CTA is loading.
  - In planner mode, delay opening recipe details until the add-to-menu request completes to avoid duplicate additions, and keep guests state consistent with the value used for add-to-menu.
- *recipe-card-cta*
  - In planner mode, let `recipe-card` own CTA clicks (add/remove + details opening) to prevent concurrent add-to-menu + details opening.
  - Fix loader sizing/positioning for consistent rendering.

#### Internal
- *planner-menu-option*
  - Streamlined event handling and method organization, and added `planner.mode.select` analytics event on mode selection.

## 2.4.0 - [29/12/2025]

#### Added
- *planner-quick-menu*
  - Added `planner-quick-menu` component with responsive design
- *modal*
  - Added `disable-mobile-bottom-sheet` attribute to prevent the mobile bottom-sheet layout when needed
- *onboarding*
  - Added `fixedPosition` / `fixedOffset` options for popover positioning

#### Updated
- *planner*
  - Updated design from V2 to V3 (helped by our client 7th house)
- *planner-quick-menu*
  - Updated CSS styles
  - Enhanced functionality and added dynamic thumbs synchronization
- *planner-current-menu*
  - Updated footer layout and visibility
  - Added placeholders to indicated that more recipes can be added
  - Keep footer CTA pinned to the viewport bottom while the current-menu section is visible (via new `viewport-sticky-footer` helper)
  - Cleaned up integration with planner quick menu
- *planner-onboarding*, *planner-onboarding-modal*
  - Updated onboarding steps ordering, copy, and mobile positioning for better responsiveness
- *planner-welcome-modal*
  - Prevented the mobile bottom-sheet layout to keep modal content readable on small screens
- *planner-recipe-suggestion*
  - Updated layout spacing for improved visual balance
  - Added animations when skipping recipes or when adding a recipe to the menu
  - Now show the next recipe behind the current suggestion
  - The badges used for navigation have been removed
- *onboarding*
  - Improved popover responsiveness and positioning/clipping behavior across viewports
- *catalog-list*
  - Added meals type filters when the catalog list is opened from the planner

#### Removed:
- *meals-extras*:
  - Subcomponent has been rempoved from the planner and was replaced by filters in the calatog-list

#### Fixed
- *drawer*, *modal*
  - Added fallback values for modal overlay z-index CSS variables
- *planner-current-menu*
  - Fixed mobile header menu toggle button display/alignment when switching between recipe and menu views
- *recipe-details*, *planner-recipe-suggestion*
  - In planner mode, clicking "Ajouter au menu" from recipe details now reuses the suggestion card add flow when the recipe matches, preventing view desynchronization
- *recipe-card-cta*
  - Sync DOM to prevent wrong CTA state
- *store-locator*
  - Fixed Leaflet crash (`Cannot read properties of undefined (reading 'x')`) by delaying address marker creation until the map container has a non-zero size and by scoping map container lookup to the component instance.

## 2.3.2 - [16/12/2025]

#### Fixed
- *planner-entry*
  - Fix css tablet padding and media-queries
  - Now updates the menu title before redirecting, consistent with `planner-form`

## 2.3.1 - [16/12/2025]

#### Fixed
- *planner-current-menu*
  - Fix missing redirection to retailer cart when finalizing menu if basket loader already exists in DOM.

## 2.3.0 - [16/12/2025]

#### Breaking changes:
- *no-supplier-add-to-cart-cta*
  - Component `add-to-cart-cta` renamed to `no-supplier-add-to-cart-cta`
- *store-locator*:
  - Component is no longer in Shadow DOM, class names were updated using `mealz-store-locator` prefix

#### Added:
- *drawer-view-swapper*: 
  - Added window.mealzInternal.noSupplier.displaySupplierSelector$ observer rather than locally in order to retrieve action on SDK side

#### Updated:
- *store-locator*
  - Refactored the component to match other components structure
  - Can now see the marker of the location entered
- *product-addition*
 - Changed the design to match the mock up
- *accordion*
  - Added `noStyling` option and related CSS classes to allow integrating header and content without default styles
- *basket-preview*
  - Updated place order button label from "Passer commande" to "Finaliser ma commande"
- *basket-transfer*
  - Exposed V10 SDK hooks (`basketTransfer`, `refreshCurrentBasket`) so Lit modal can mirror Angular flow
  - Lit modal now uses `mealz-modal` API, auto-opens on transfer start, and supports abort/navigate via SDK
  - Basket preview disables order while a transfer runs and triggers the modal/transfer via `basketTransfer` entry point
  - Basket total now includes standalone products not linked to recipes
- *products-picker*
  - Wrapped "Déjà dans le placard" (often ignored products) list inside an accordion and avoid rendering lower content in noSupplier mode
- *store-locator*
  - Replaced native supplier `<select>` with reusable `mealz-select` component in `selectSupplierTemplate`
  - Improved UX: highlighted selected option with `var(--mealz-ds-color-primary)` on text and `var(--mealz-ds-color-primary-100)` on background
  - A dded accessibility wiring and preserved existing `filterChange` behavior

#### Fixed
- *planner-budget-gauge*
  - Don't display gauge when no budget is set
  - Allow submitting empty budget to reset the value
- *planner-menu-option*
  - Display current-menu modal for featured recipe when current menu is not empty
- Added protection against double registration of components

## 2.2.0 - [12/12/2025]

#### Added
- *planner-entry*
  - Added new component for planner home entry with guest stepper and menu options
  - Supports guest selection (1-30) with localStorage persistence
  - Integrates with planner-menu-option for seamless menu creation flow
- *planner-budget-edit-modal*
  - Added new modal component for editing planner budget
  - Supports budget limit input with currency formatting
- *planner-budget-gauge*
  - Added budget edit functionality with edit button
  - Added budget define button when no budget is set
  - Improved layout for budget display when limit is not defined
- *catalog-home-header*:
  - Added css for components

#### Updated
- *planner-current-menu*
  - Added budget update functionality via budgetUpdated event
  - Updated to redirect to catalog home instead of dashboard when menu is reset
  - Improved height calculations for better responsive layout
  - Enhanced budget gauge UI update logic
- *planner-menu-option*
  - Integrated with planner-entry component for direct menu creation from home
  - Added support for planner guests changes from planner-entry
  - Added modal to handle menu replacement when clicking custom menu with existing menu
  - Improved flow to skip dashboard/form when coming from planner-entry
- *catalog-home*
  - Added styling for planner-entry component integration
- *planner-onboarding-modal*
  - Improved modal display handling with type checking
  - Enhanced event handling for modal close requests
- *planner-recipe-suggestion*
  - Fixed recipe display update when menu already has recipes
- *to-basket-loader*
  - Improved positioning when displayed from catalog-home
  - Removed auto-scroll when displayed from planner-entry
- *no-shadow-element*
  - Improved error message for missing supplier token or user language
  - Added early return to prevent infinite retry loops
- *http*
  - Added fallback values for language-id and supplier-token headers
- *catalog-home*:
  - Removed header related css now handled by `catalog-home-header`

#### Internal
- Removed redundant customElements.define calls (handled by decorators)
- Improved TypeScript type safety in planner components

## 2.1.2 - [11/12/2025]

#### Added
- *recipe-card*
  - Added price per serve update on product ignore

#### Internal:
  - *select*
    - Created new reusable `mealz-select` Web Component
    - Emits `valueChange` with `{ value, label }`; inputs: `options`, `value`, `placeholder`, `disabled`

#### Fixed
- *recipe-details*
  - Could see button "Voir plus d'idées repas" in no supplier mode
- *basket-preview-product*
  - Fix infinite loader when updating product quantity
- *product-picker*:
  - noSupplier guest counter was not plugged
- *recipe-card*, *recipe-pricing*
  - Fix update price by guests

## 2.1.1 [04/12/2025]

#### Fixed
- *recipe-priging*
  - Fix hidden display overrided by retailer

## 2.1.0 [03/12/2025]

#### Updated
- *recipe-card-cta*, *recipe-pricing*, *like-button*
  - Update these components to be called individually in dedicated routes

## 2.0.2 [28/11/2025]

#### Fixed
- *planner-recipe-suggestion*
  - Fix call order between last recipe rejection and get new suggestion functions

## 2.0.1 [10/11/2025]

#### Fixed:
- *planner-recipe-suggestion*
  - Prevent duplicate recipes from appearing in suggestions when fetching new suggestions after rejection
- *planner-onboarding-modal*
  - Fix text for onboarding modal menu step 1

#### Internal:
- *planner-menu-option*
  - Add event `planner-mode-select` on menu option selection
- *planner-current-menu*
  - Add `recipe_source`, `journey` and `mode` information in recipe.add event
  - Add `recipe.add` event on `planner.finalize` for each recipe added and set `recipe_source` info
  - Add `mode`, `budget` and `journey`informations in `planner.finalize`
- *recipe-pricing* *recipe-card*
  - Remove function to avoid multiple calls to API on catalog drawer open. Function seems to be useless.

## 2.0.0 [30/10/2025]

#### Fixed:
- *catalog-components*:
  - Enhanced SDK robustness with `waitForMealzInternal()` for proper initialization
  - Added method existence checks before subscription to prevent errors
  - Improved error handling with try/catch blocks and warning logs
- *catalog-history*:
  - Added non-null type assertions for private properties
  - Enhanced DOM selector handling and added `isHandlingHistory` protection against infinite recursion
- *history-drawer*:
  - Fixed recursive call protection and improved type safety for optional properties

#### Updated:
- *css-variables*:
  - Migrated all CSS custom properties from `--miam-*` to `--mealz-*` across all components
- *catalog-toolbar*:
  - Added `flex-wrap` and `gap` for better responsive design
- *drawer*:
  - Simplified media queries for more consistent width handling
- *loader*:
  - Renamed animation from `miam-loader-spin` to `mealz-loader-spin`


## 2.0.0-beta.9 [09/10/2025]

#### Fixed:
- *recipe-card-cta*:
  - Fixed CTA status not updating dynamically when adding/removing recipes from menu
  - Enhanced starting-data parsing to support both JSON payload (planner context) and plain recipe ID string (SSR cards)
- *details-footer*:
  - Fixed isRecipeInMenu$ subscription to re-bind when recipeId changes, preventing stale status from first recipe
  - Added proper subscription cleanup and reactive updates for recipe changes in drawer navigation
- *onboarding*
  - Fixed scrollbar in modal onboarding
  - Fixed pointer-events restoration after onboarding completion to ensure click handlers work properly on recipe suggestion elements
  - Fixed highlighted element with huge z index which created layout inconsistency

#### Updated:
- *recipe-details*:
  - in meals planner, when adding recipe to the menu, it closes automatically the recipe details modal

## 2.0.0-beta.8 [29/09/2025]

#### Updated:
- *planner-current-menu*
  - Updated to redirect to retailer cart URL after menu finalization instead of catalog home
  - Added fallback to previous behavior if retailer cart URL not configured
  - Fixed TypeScript linting issue with attribute access

#### Fixed:
- *planner-recipe-suggestion*:
  - Fixed duplicate analytics events for recipe suggestions
  - Added deduplication logic to only send analytics for new recipe suggestions
- *recipe-details*:
  - Fixed potential memory leaks in subscription management

#### Internal:
- *planner-recipe-suggestion*:
  - Added `lastShownRecipeId` tracking to prevent duplicate analytics
  - Enhanced `suggestionShownEvent()` method with deduplication logic
- *recipe-details*:
  - Refactored subscription management from array-based to Subject + takeUntil pattern
- *onboarding*:
  - Refactored onboarding flow and modal to improve analytics coverage and event handling
  - Centralized onboarding analytics constants and tracking with detailed events for display, step changes, start/skip/complete
  - Improved planner integration with openPlannerOnboardingModal helper and analytics context
  - Simplified onboarding experience by removing scroll prevention methods and adding instant scroll handling
  - Improved event binding performance and added CSS-based mobile detection with automatic cleanup

## 2.0.0-beta.7 [23/09/2025]

#### Added:
- *onboarding*
  - Added component with tour functionality
  - Added localStorage tracking for onboarding completion
  - Added scroll prevention during tours
- *planner-onboarding*
  - Added wrapper component for planner-specific tours
  - Chooses tour type based on viewport: mobile uses `*-mobile` variants
- *planner-onboarding-modal*
  - Added new onboarding modal component with step-by-step guide
- *planner-welcome-modal*
  - Added component for first-time user experience
- *recipe-details*
  - Added recipe details onboarding for first-time users in planner mode

#### Internal:
- *planner*:
  - Track recipe suggestions; send analytics only for new recipes
- *recipe-details*:
  - Replace Subscription array with Subject and takeUntil for lifecycle management

## 2.0.0-beta.6 [04/09/2025]

#### Added:
- *planner*:
  - Set menu view as default on mobile page load (width ≤ 768px) when arriving via window.location.href
  - Added setDefaultMobileView() method to automatically show menu view on mobile

#### Updated:
- *planner-current-menu*:
  - Mobile default view behavior: now shows menu instead of recipe view by default
  - Only applies to initial page load, not window resize events
- *recipe-details*:
  - Updated button icon with Pot icon in details footer planner

## 2.0.0-beta.5 [01/09/2025]

#### Fixed:
- *catalog-load-more*:
  - Added recipeTypeId parameter to LoadMore functionality to properly filter recipes by type

#### Updated:
- *planner*:
  - Refactored CSS for planner recipe list and suggestion components

## 2.0.0-beta.4 [27/08/2025]

#### Internal:
- Refactor components styles URL system import method

## 2.0.0-beta.3 [27/08/2025]

#### Fixed:
- Paths to css files in components with an other method

## 2.0.0-beta.2 [26/08/2025]

#### Fixed:
- Paths to css files in components

## 2.0.0-beta.1 [22/08/2025]

#### Breaking changes:
Upgraded from `miam-ds@1.2.6` to `mealz-ds@2.0.0`. The design system was renamed from `miam-ds` to `mealz-ds`, and all references were updated accordingly.
- *catalog-breadcrumb*
  - The component *mealz-catalog-breadcrumb* has been renamed to *mealz-breadcrumb*

#### Added:
- *accordion*
  - Added component
- *planner*
  - Added *planner-abandon-modal*
  - Added *planner-budget-gauge*
  - Added *planner-catalog*
  - Added *planner-current-menu*
  - Added *planner-current-menu-modal*
  - Added *planner-dashboard*
  - Added *planner-form*
  - Added *planner-menu-option*
  - Added *planner-recipe-card*
  - Added *planner-recipe-list*
  - Added *planner-recipe-suggestion*
  - Added *product-card-planner*
  - Added *planner-open-catalog-modal*
- *preferences*
  - Added component
- *recipe-details*
  - Added planner mode
- *url-params-handler*:
  - Now adds url parameters depending on the drawer opened in order to open it back on refresh
- *add-to-cart-cta*:
  - Created Lit element (mealz-add-to-cart-cta) with interactive behavior, intersection observer for fixed button display, and event handling
- *planner-recipe-suggestion*:
  - Enhanced recipe suggestion functionality with preferences subscription to refresh suggestions when user preferences change

#### Updated:
- *planner*:
  - Updated recipe addition to menu logic to use current point of sale value across planner components
  - Changed toBasketLoader insertion point after MealzPlannerCurrentMenu for better positioning
  - Passes the planner selections (`toPickProducts`) to SDK when adding a recipe to menu to avoid circular dependency in SDK
- *recipe-card*
  - Updated recipe card width and height
  - Added an overlay and a badge when a recipe is in the basket (applies to catalog view in the planner)
- *recipe-pricing*
  - Updated layout and colors

#### Fixed:
- *planner*:
  - Adjusted margin for mealz-breadcrumb in planner current menu for improved layout
  - Updated min-height for planner components to enhance layout consistency  
  - Added padding to planner dashboard title for improved layout

#### Removed:
- Remove window context from calls to mealzInternal and mealz

#### Internal:
- *catalog-load-more*
  - Add the auto-load more recipes on drawer scroll
  - Prevent load-more when list is hidden
- *no-shadow-element*:
  - Added `elements` and `selectors` properties
  - Added `initSelectors`and `addClickListener` methods
- *basketPreviewState$*:
  - replaced basketPreviewIsOpen\$ observable with basketPreviewState\$ in order to have the initial tab info rather than just a boolean
- Refactored all components to use `mealzInternal` and `mealz` import instead of `window.mealzInternal` and `window.mealz`
- Enhanced menu redirection logic in planner components
- Adjusted `recipe-card` and `details-footer` to forward `toPickProducts` to `mealzInternal.planner.addRecipeToMenu`
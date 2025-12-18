---
sidebar_position: 2
---

# Mealz components Changelog

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
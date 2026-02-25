---
sidebar_position: 1
---

# Mealz SSR API Changelog


## 2.6.1 [12/02/2026]

#### Internal
- Update mealz-components to 2.6.1

## 2.6.0 [12/02/2026]

#### Added
- *recipe-card-cta*
  - Added class variants to separate default and planner usecase
- *packages*
  - Added `from=header` query parameter to package URLs when redirecting from the header
  - Added analytics path to header starting-data for tracking events
- *menu* - v2
  - New route `GET /menu/merge-authless-menu?authless_id=...` to transfer the authless user's current menu to the logged-in user (replaces menu, no merge). Calls backend `PATCH /menus/transfer-authless`. To be used at end of auth flow when the user had built a menu while unauthenticated.

#### Updated
- *styles*
  - Added drawer stylesheets to recipe-card
  - Added recipe-details and like button stylesheets to recipe-card-cta
- *planner-entry*
  - Replaced minus and plus icon in the stepper with `<img>` to replace easily for suppliers overrides
- *recipe-card-cta*
  - Added the parameter `to_basket_on_click` that is provided in the starting data
- *planner-budget-gauge* - v2
  - Reordered layout: overflow badge now appears before the edit button

#### Internal
- *planner-onboarding-modal* - v2
  - Refactored initialization from EJS template include to JavaScript helper module (`init-planner-onboarding-modal.min.js`)
  
## 2.5.1 [05/02/2026]

#### Updated
- *catalog-home-header*
  - Increase header height to 200px on desktop for custom header

## 2.5.0 [22/01/2026]

#### Added
- *planner-onboarding-modal*
  - Added planner onboarding modal route to display onboarding content standalone.
- *planner-current-menu* - v2
  - Added support for prefilled recipes (featured recipes)


#### Internal
- Update allowed origin for webview
- Update version for mealz-components to 2.5.0
- Update version for SDK to 10.3.0

## 2.4.2 [13/01/2026]

#### Internal
- Update version for mealz-components to 2.4.2

## 2.4.1  [10/01/2026]

#### Fixed
- *catalog-list* - v2
  - Fix `recipe_type_filter` handling and normalize query parsing (string/boolean) so the view and starting-data receive a real boolean.
  - Fix merge regression where `recipeTypeFilter` was typed as `string` in `CatalogListService` (causing TS build failure).

#### Internal
- Update version for mealz-components to 2.4.1 and SDK to 10.2.3 - v2
- *navigation*
  - Manage mobile webview navigation based on User-Agent

## 2.4.0 [29/12/2025]

#### Internal:
- *navigation*
  - Manage mobile webview navigation based on User-Agent

#### Added
- *planner-quick-menu* - v2
  - Added SSR template `planner-quick-menu.ejs` to render a compact “quick menu” (menu count + thumbnails preview).

#### Updated
- *planner-current-menu* - v2
  - Update template structure to match planner v3 design (header/footer + suggestion area)
  - Integrated quick menu as an alternate footer (mobile) and extracted the primary footer into `planner-current-menu.footer.ejs` to improve responsiveness/maintainability.
- *planner-recipe-suggestion* - v2
  - Add “Our suggestions” block with optional next suggestion card and recipe labels (prep/cooking/difficulty)
- *planner-quick-menu* - v2
  - Refined quick menu rendering logic and markup (thumbnail slots, data attributes, buttons).
- *catalog-list*
  - Added meals type filters when the catalog list is opened from the planner

#### Fixed
- *styles*
  - Add planner entry css in catalog and catalog-home styles routes
  - Add planner quick menu css in planner styles route

## 2.3.1 [16/12/2025]

#### Update
- Update version for mealz-components to 2.3.2 and SDK to 10.2.1 - v2

#### Fixed
- *planner-menu-option* - v2
  - Now display current menu recipe in custom menu option, not only empty plates.
- *planner-budget-gauge* - v2
  - Don't display budget gauge if budget is empty or 0
- *planner-current-menu* - v2
  - Suggested recipe detail now uses guests selected in planner entry (no fallback to 4)
- Renamed AddToCartCtaController into NoSupplierAddToCartCtaController


## 2.3.0 [12/12/2025]

#### Added:
- *planner-entry* - v2
  - Added new `/v2/planner/entry` route and controller for planner home entry component
  - Added planner entry integration in catalog home page
  - Added planner entry template with guest stepper and menu options
- *planner-entry.controller.spec.ts* - v2
  - Added comprehensive unit tests for PlannerEntryController
- *catalog-home-header*
  - New `CatalogHomeHeaderController` with route `GET /catalog/header` to render the catalog home header
  - Added styles includes for `catalog-home-header.css` in all style routes
- *catalog-settings*
  - Introduced `CatalogSettingsService` to fetch and cache supplier catalog settings
- *packages-service*
  - Added `getPackageSpotlights` method to retrieve and build spotlighted package CTA

#### Updated:
- *catalog-home* - v2
  - Integrated planner entry component with current menu and custom menu data
  - Added planner entry data fetching with error handling (feature gracefully degrades if unavailable)
- *planner-budget-gauge* - v2
  - Added budget edit button functionality
  - Added formatted budget values (budgetLimitFormatted, budgetTotalFormatted) alongside numeric values
  - Improved budget display logic with better conditional rendering
- *planner-menu-option* - v2
  - Updated custom menu display to always show 6 empty plate images
  - Added new empty plate images (webp and jpg formats) for custom menu slots
  - Removed cancel button from custom menu option
  - Improved recipe avatar display logic
- *planner-current-menu* - v2
  - Changed default recipe display to always show suggestion first when available, even if menu has recipes
  - Enhanced budget gauge initialization with formatted price values
- *planner-recipe-suggestion* - v2
  - Fixed button styling to always show primary style on "Add meal" button
- *styles* - v2
  - Added planner-entry CSS to planner styles group
- *catalog-home*
  - Header markup replaced with include of `catalog-home-header.ejs`

#### Fixed:
- *planner-current-menu* - v2
  - Fixed recipe display priority to show suggestions by default

#### Internal:
- *i18n* - v2
  - Updated French and English translations for planner menu options with new wording
- *catalog-home.controller* - v2
  - Added PlannerDashboardService dependency for planner entry data fetching
  - Improved error handling for planner entry feature (warns but doesn't break if unavailable)

## 2.2.2 [11/12/2025]

#### Updated
- *recipe-pricing*
  - Now update pricing card when a product added or removed from basket

#### Fixed
- *recipe-card*
  - Fix guests in recipeCardStartingData for multiple route

## 2.2.1 [04/12/2025]

#### Config
- Update mealz-components to 1.3.15 and 2.1.1 - v1 | v2

## 2.2.0 [03/12/2025]

#### Updated
- *recipe-pricing* - v1 | v2
  - Refactored to be independent and rendered via dedicated route
  - Pricing calculation moved to client-side
- *recipe-card-cta* - v1 | v2
  - Refactored to be independent and rendered via dedicated route
  - Added RecipeCardCtaController for standalone rendering
- *like-button* - v1 | v2
  - Refactored to be independent and rendered via dedicated route
- *recipe-card* - v1 | v2
  - Updated to use extStoreId instead of storeId in multiple suggestions route
- *recipes-service* 
  - Updated getMultipleSuggestedRecipes to use point-of-sale-ext-id instead of point-of-sale-id

#### Added
- Added recipe-card-cta route

#### Fixed:
- *like-button*
  - Fix like-button standalone render route

## 2.1.2 [28/11/2025]

#### Config
- Update SDK to 10.0.2 / 9.1.23 and mealz-components to 2.0.2

## 2.1.1 [12/11/2025]

#### Fixed:
- *render* - v1 | v2
  - Fix rendering strategy to avoid conflict between parallels requests with /v1 and /v2 versions

## 2.1.0 [12/11/2025]

#### Added: 
- *routing*
  - Added retailerCart URL configuration to routing files (dev/uat/prod)
  - Added retailerCartPageUrl method to RoutingService with fallback to catalog home

#### Updated:
- *planner-current-menu*
  - Updated to redirect to retailer cart URL after menu finalization instead of catalog home
  - Added fallback to previous behavior if retailer cart URL not configured

## 2.0.3 [10/11/2025]

#### Internal
- Set base dir version view from interceptor instead app global middleware.
- Update mealz-component to `2.0.1` and SDK to `10.0.1` and `9.3.1`

## 2.0.2 [03/11/2025]

#### Internal
- *logging-service*
  - Include request body in log metadata for POST routes
  - Ensure unique insertId for each log entry to prevent Google Cloud Logging collisions

## 2.0.1 [03/11/2025]

#### Fixed:
- *styles* - v1
  - Fixed styles for my-space

## 2.0.0 [03/11/2025]

#### Fixed:
- *templates*:
  - Migrated all CSS classes from `miam-ds-*` to `mealz-ds-*` across all EJS templates (v1 and v2) that remains
- *my-space-controller*:
  - Added `history_style` query parameter with 'list' | 'grid' values (default: 'list')
- *translations*:
  - Fixed translation keys in history-order-expanded template
- *basket-controller*:
  - Fix `/basket/merge-authless-basket` route method from POST to GET to fit with docs

#### Internal
- *analytics-service*
  - Send events to bigQuery instead Plausible
  - Add ANALYTICS_URL environment variable for analytics endpoint configuration
  - Add ANALYTICS_ENABLED environment variable for development environment

## 2.0.0-beta.5 [09/10/2025]

#### Added:
- *recipe-card* - v1 | v2
  - Added "keyword" and "categoryId" body parameters support in /multiple route for recipe suggestions
  - Created ItemExtIdsDTO type to standardize request body structure across v1 and v2

#### Updated:
- *recipe-card* - v1 | v2
  - Removed redundant "supplier-id" from request body in /multiple route (already present in URL query params)

#### Internal
- *http-service* - v1 | v2
  - add TraceContextService and TraceInterceptor
  - propagate X-Cloud-Trace-Context and traceparent

- *logger-service* - v1 | v2
  - Migrated to Winston with @google-cloud/logging-winston transport
  - Logs now use structured format for GCP

## 2.0.0-beta.4

#### Updated:
- *environment*
  - Changed SDK_WEBC_URL_V2 from webc-miam.js to webc-miam-fr.js in both main and demo/nextjs environments
  - Update versions UAT

## 2.0.0-beta.3

#### Added:
- *planner-current-menu*
  - Added a button to access onboarding from current menu for both mobile and desktop views
- *planner-dashboard*
  - Added onboarding modal access button with help icon

#### Updated:
- *planner-dashboard*
  - Restructured history section

## 2.0.0-beta.2

#### Fixed:
- *recipe-card* - v1 | v2
  - Changed NotFoundException throws to return null or empty arrays when no recipe suggestions found
- *catalog-list* - v2
  - Fixed loadMore functionality in meal planner to properly display selected recipes state (inMenu) instead of always showing as unselected
- *planner* - v2
  - Fixed meal planner catalog to only display main dishes (plats) instead of showing desserts, drinks, and starters when planner=true

## 2.0.0-beta.1

#### Fixed:
- *catalog-list*:
  - Added recipe type filter to catalog list controller and service to properly filter recipes by type in load more functionality
- *catalog*:
  - Updated shouldRemovePersonalization to use supplier.noPersonalizationOnShelves in multiple controllers for better personalization handling

#### Updated:
- *planner*:
  - Updated French translations and replaced icons in planner views for better user experience
- *routing*:
  - Added catalog structure to routing configuration for production and UAT environments


## 2.0.0-beta

#### Breaking changes:
Upgraded from `miam-ds@1.2.6` to `mealz-ds@2.0.0`. The design system was renamed from `miam-ds` to `mealz-ds`, and all references were updated accordingly.

#### Added:
- *all-recipes-banner*
  - New all recipes banner on catalog home
- *catalog-list*
  - Added `planner` to request parameters (default: false)
  - Added `all_recipes` to request parameters (default: false)
- *planner*
  - Added *planner-budget-gauge* component
  - Added *planner-current-menu* component and controller
  - Added *planner-dashboard* component and controller
  - Added *planner-menu-option* component
  - Added *planner-recipe-card* component and controller
  - Added *planner-recipe-list* component
  - Added *planner-recipe-suggestion* component
  - Integrated PreferencesService for recipe suggestions to append user preferences filters to suggestion URLs
- *planner-link*
  - Introduced `PlannerCardLinkController` and `PlannerBannerLinkController` for handling planner link routes.
  - Added tests for the new planner link controllers to ensure proper functionality.
- *preferences*
  - Added PreferencesService with methods to fetch user preferences data and build filter URLs
  - Enhanced PreferencesService with comprehensive test coverage for all edge cases
- *price*
  - Add dynamic currency formatting based on language settings
- *drawer*:
  - New routes to fetch mandatory JS and CSS for component
- *supplier-configuration*:
  - Added new supplier configuration for CoursesU in local environment
- *add-to-cart-cta*:
  - Added AddToCartCtaController for rendering add-to-cart CTA components
  - Created AddToCartCtaService to check if recipe is in user's basket using BasketsService
  - Implemented EJS templates (add-to-cart-cta.ejs, add-to-cart-cta.controller.ejs) for SSR rendering
  - Added CSS styling with animations and responsive design through styles controller
  - Integrated with existing basket state management and starting data pattern

#### Updated:
- *catalog-list*
  - Updated view for planner compatibility
  - Added query recipe_type_id to filter by recipe type (e.g. "starter", "main-dish", "dessert", "drink")
- *catalog-toolbar*
  - Updated view for planner compatibility
- *recipe-card-cta*
  - Updated view for planner compatibility
- *recipe-card*
  - Updated view for planner compatibility
- *styles*
  - Updated `StylesController` to include new style groups for planner links.
- *searchbar*:
  - Replace catalog searchbar with miam-ds-searchbar

#### Fixed:
- *planner*:
  - Fixed catalog list style inclusion in planner to ensure proper component functionality
- *recipe*:
  - Added check on sponsors before matching included to prevent bug

#### Internal:
- Added *mealz-hub* service to Docker Compose configuration for local development
- Added planner page to the demo
- Added config in the demo to test *addProductsToCart* & *removeProductsFromCart* instead of *pushProductsToCart*
- Logging out in demo site was creating an error

### Fixed:
- *searchbar*:
  - Fix searchbar placeholder on favorite page

## Upgrading from v1

This guide outlines the breaking changes and migration steps when upgrading from v1 to v2.

### Removed Configuration

The following configuration has been removed:
- `mealz.features.enableGuestsInputOnMyMeals()`
- `mealz.features.enableArticlesInCatalog()`

### Updated Configuration

The following configuration has been updated:
- `mealz.basketSync.defineRemoveProductsFromCart()`: The callback is now called with products with positive quantities

### Component Renaming

#### Prefix Changes

All components previously using `ng-miam-*` and `webc-miam-*` prefixes have been renamed to use the `mealz-*` prefix. Additionally, all CSS class names with `miam-...` have been updated to `mealz-...`.

<details>
<summary>Components with updated prefixes</summary>

- `ng-miam-no-pos-selected` → `mealz-no-pos-selected`
- `ng-miam-products-picker` → `mealz-products-picker`
- `ng-miam-slider-tabs` → `mealz-slider-tabs`
- `ng-miam-replace-item` → `mealz-replace-item`
- `webc-miam-basket-transfer-modal` → `mealz-basket-transfer-modal`
- `webc-miam-last-order-modal` → `mealz-last-order-modal`
- `webc-miam-no-supplier-onboarding` → `mealz-no-supplier-onboarding`// TODO Has been removed in v2 ?
- `webc-miam-recipe-addon` → `mealz-recipe-addon`
- `webc-miam-recipe-details` → `mealz-recipe-details`

</details>

#### Name Changes

The following components have been renamed with new naming conventions:

- `ng-miam-progress-tracker` → `mealz-planner-budget-gauge`
- `ng-miam-store-locator` → `mealz-store-locator-drawer`
- `webc-miam-recipe-details-infos` → `mealz-details-infos`
- `webc-miam-recipe-details-ingredients` → `mealz-details-ingredients`
- `webc-miam-recipe-details-steps` → `mealz-details-steps`
- `webc-miam-recipe-modal` → `mealz-drawer-view-swapper`
- `webc-miam-store-locator-link` → `mealz-store-indicator`
- `mealz-catalog-breadcrumb` → `mealz-breadcrumb`

### Sponsor Components Consolidation

All sponsor-related components have been deprecated and replaced by a single, unified component: `mealz-sponsor-block`

> **Note:** The internal CSS classes for sponsor components remain unchanged.

<details>
<summary>Deprecated sponsor components</summary>

- `ng-miam-sponsor-block-container`
- `ng-miam-sponsor-image-and-text-block`
- `ng-miam-sponsor-image-with-text-block`
- `ng-miam-sponsor-logo-block`
- `ng-miam-sponsor-picture-block`
- `ng-miam-sponsor-small-picture-block`
- `ng-miam-sponsor-small-text-block`
- `ng-miam-sponsor-small-title-block`
- `ng-miam-sponsor-text-and-image-block`
- `ng-miam-sponsor-text-block`
- `ng-miam-sponsor-title-block`

</details>

### Removed Components

#### Unused Components

The following components were removed due to lack of usage:

- `ng-miam-tabs`
- `ng-miam-time-picker`
- `ng-miam-toaster`
- `webc-miam-toaster-stack`

#### Deprecated Components

These components have been fully removed as they are deprecated and no longer maintained:

<details>
<summary>List of deprecated components</summary>

- `ng-miam-addon-link`
- `ng-miam-guests-dropdown`
- `ng-miam-meals-planner-basket-confirmation`
- `ng-miam-meals-planner-basket-preview`
- `ng-miam-meals-planner-catalog`
- `ng-miam-meals-planner-form`
- `ng-miam-meals-planner-result`
- `ng-miam-tooltipable-content`
- `webc-miam-basket-preview-block`
- `webc-miam-basket-preview-disabled`
- `webc-miam-basket-preview-line`
- `webc-miam-meals-planner`
- `webc-miam-recipes-history`
- `webc-miam-sponsor-storytelling`
- `webc-miam-warning-store-locator`

</details>

:::warning
If any of your style overriding or other interactions includes components listed above, please update them accordingly.
:::

### Drawer Components Structure

All drawer and modal components have been restructured to use a consistent pattern:

```html
<mealz-drawer>
  <mealz-drawer-view-swapper>
    <MEALZ_COMPONENT></MEALZ_COMPONENT>
  </mealz-drawer-view-swapper>
</mealz-drawer>
```

This new structure applies to:
- `basket-preview`
- `history-drawer`
- `recipe-addon`
- `recipe-details`
- `replace-item`
- `preferences`

### Design System Renaming

Our design system has been renamed from `miam-ds` to `mealz-ds`. All style classes previously using `miam-ds-...` have been updated to `mealz-ds-...`.

#### CSS Custom Properties

All CSS custom properties previously using the `--miam-*` prefix have been renamed to use the `--mealz-*` prefix.  
If you override design system tokens in your own styles (e.g. in `:root` or retailer-specific styles), update any `--miam-*` variables to their `--mealz-*` equivalents.

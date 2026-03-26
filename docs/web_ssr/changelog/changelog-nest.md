---
sidebar_position: 1
---

# Mealz SSR API Changelog

## 2.8.0 [26/03/2026]

#### Added
- *my-space* - v1 & v2
  - Added container div with a class name .mealz-my-space around the content of the page to make it more coherent with the other pages and facilitate page-specific style overriding 
  - Added classes names .mealz-tab-favorites and .mealz-tab-history on the tabs (className .mealz-catalog-tabs__item) so the tab icons can overriden individually

#### Updated
- *recipe-card* - v2
  - Recipe card `display_variant` (1–4) is normalized on the API and applied in SSR (`recipe-card.ejs`): badge and bottom like-button layout match legacy Angular behavior; `POST /recipe-card/multiple` no longer forces badge/like flags off.

#### Internal
- *catalog-toolbar* & *breadcrumb* - v1 | v2
  - Replaced raw string page comparisons with `Pages` enum (v2) and `CatalogPages`/`Pages` (v1 toolbar) for consistent page detection across catalog views.
  - v1 catalog-toolbar: supports v1 `CatalogPages` enum values.
  - v2 catalog-toolbar: uses `Pages.CATALOG_*` for home, favorites, my-space, and history tab logic.
  - v2 breadcrumb: uses `Pages` enum keys in page titles map instead of raw strings.
  - v1 catalog-home: fixed page value to `Pages.CATALOG_HOME`.
  - Update mealz-component version to 2.7.1

## 2.7.0 [19/03/2026]

#### Added
- *catalog/my-space* - v2
  - New query param `show_tab_selector` to toggle the segmented control (Favoris/Historique tabs). When `false` or `0`, tabs are hidden and the page title shows the active section ("Favoris" or "Historique") instead of "Mon carnet".
- *basket-preview* - v2
  - New route `GET /v2/catalog/my-space/basket-preview` to render basket preview standalone (title, show_tab_selector, embed query params).
  - New EJS template `basket-preview.controller.ejs` with drawer-view-swapper and init-basket-preview-drawer scripts for direct navigation.

#### Removed
- *catalog-favorites* - v2
  - Removed standalone catalog-favorites page route (`GET /v2/catalog/favorites`) was not used. Favorites are only available via my-space (`/v2/catalog/my-space`). v1 catalog-favorites remains unchanged.

#### Updated
- *baskets-service* - v2
  - Handle 400 response with "Inexistant record for point_of_sale_id" gracefully: return empty basket instead of throwing.
- *my-space-service* - v2
  - Added readonly to constructor dependencies.
- *planner-menu-option* - v2
  - Custom menu recipe avatars: when more than 6 recipes, show 5 avatars plus an overflow badge (+N) instead of empty plate placeholders.
- *catalog* - Implemented versioned endpoints for catalog categories, favorites, and my-space load-more. Routes now use explicit `@Version('1')` / `@Version('2')` and call the corresponding v1/v2 services.
- *packages* - v1: `getPackageById` now unwraps `response.data` and returns the package object directly; throws `NotFoundException` instead of `BadRequestException` when the API returns no data (aligned with v2 semantics).
- *no-supplier-add-to-cart-cta* - v2
  - `recipe_id` query param is now treated as external recipe ID: the service resolves it to the internal recipe ID via `RecipesService.getRecipeByExtId` before checking basket status. Falls back to the provided value when no match is found.
- *recipes* - v2
  - Added `getRecipeByExtId(headers, recipeExtId)` to fetch recipe by external ID (cached 5s, returns null when not found).


#### Internal
- Refactored catalog controllers to use version-specific service instances (CatalogCategoryServiceV1/V2, etc.) instead of runtime version detection for load-more routes.
- *demo*
  - Added basket preview to custom-elements demo page.
- *no-supplier-add-to-cart-cta* - v2
  - Added unit tests for NoSupplierAddToCartCtaService.
- Update mealz-components to 2.7.0 and SDK to 10.4.0

## 2.6.3 [03/03/2026]

#### Updated
- *planner* - v2
  - When fetching the current menu, if the selected store differs from the menu `point-of-sale-id`, the menu is patched to match the selected store to keep planner data consistent.
  - Removed deprecated planner entrypoints and links: dashboard page (`GET /planner` legacy), `GET /planner-card-link`, `GET /planner-banner-link`. The planner landing endpoint now renders the current menu experience (`planner-current-menu`).
  - Updated routing configuration: removed `planner.dashboard`; planner routing now relies on `planner.current` only.

#### Fixed
- *recipes* - v2
  - `hasPromotions()` now returns `false` when `storeId` is missing, allowing planner screens to work without a selected POS.
- *recipe-pricing* - v2
  - Pricing wrapper is only displayed when `price-per-serve` exists, preventing empty pricing blocks.


## 2.6.2 [26/02/2026]

#### Fixed
- Added missing scripts in no-supplier-add-to-cart-cta (drawer-view-swapper & basket-transfer-modal)

#### Internal
- Update SDK 9.1 to 9.1.26

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
  - Replaced minus and plus icon in the stepper with `img` tags to replace easily for suppliers overrides
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

#### Internal:
- Added add-to-cart CTA to demo

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

## 1.3.20 - [23/10/2025]

#### Internal
- *analytics-service*
  - Send events to bigQuery instead Plausible
  - Add ANALYTICS_URL environment variable for analytics endpoint configuration
  - Add ANALYTICS_ENABLED environment variable for development environment
  - Analytics can now be disabled in development mode by setting ANALYTICS_ENABLED=false
  - UAT and PROD environments always send analytics regardless of ANALYTICS_ENABLED setting

## 1.3.19 - [16/10/2025]

#### Config
- Update version for mealz-components 1.3.13

## 1.3.18 - [13/10/2025]

#### Internal
- *cache-service*
  - UserID is now optional in cache key.
- *pos-service*
  - Updated pos service to remove userID from cache key usage.
- **Logging System**:
  - Implemented logger with Google Cloud Logging integration
  - Added distributed tracing support using AsyncLocalStorage


## 1.3.17 - [25/09/2025]

#### Added
- *recipe-card*
  - Added "keyword" body attribute to /multiple route 

#### Config:
  - Update version for SDK to 9.1.21

## 1.3.16 - [03/09/2025]

#### Fixed:
- *recipe-card*
  - Changed NotFoundException throws to return null or empty arrays when no recipe suggestions found

## 1.3.15 - [26/08/2025]

#### Added
  - *recipe-card*
    - Added "categoryId" body attribute in /multiple route

#### Fixed:
- *catalog-list*
  - Fix button preferences displayed on search results despite configuration to turn them off

#### Config:
  - Update version for mealz-component to 1.3.12
  - Update versions for local and UAT

## 1.3.14 - [06/08/2025]

#### Config:
- Update component version 1.3.11 in env

## 1.3.13 - [04/08/2025]

#### Fixed:
- *recipe-card*:
  - Fix pricing flickering with loader

#### Config:
- Update component versions in env

## 1.3.12 - [04/08/2025]

#### Config:
- Update component versions in env

## 1.3.11 - [04/08/2025]

#### Fixed : 
- *recipe-card*:
  - Revert usage of store ext id in route multiple

## 1.3.10 - [04/08/2025]

#### Updated:
- *recipe-card*:
  - Optimized /multiple route performance by moving dynamic data fetching to client-side
  - Removed server-side API calls for likes, pricing, and basket data
  - Simplified data formatting and reduced parallel API calls

## 1.3.9 [24/06/2025]

### Fixed:
- *recipe-card-cta*
  - Fix displaying CTA when shouldRemovePersonalization is true

## 1.3.8 [23/06/2025]

#### Config:
- Update SDK / Component versions in env

## 1.3.7 [23/06/2025]

#### Fixed:
- *demo/retailer-cart*:
  - Optimized cart updates by only triggering the retailerBasketChanged event once after adding multiple products instead of after each individual product
- *recipe-card*:
  - Fixed recipe card basket detection when using suggested recipes, ensuring correct guest count is displayed for recipe cards loaded via product suggestions

#### Deleted:
- *pricebookKey*:
  - Remove deprecated variable pricebookKey

## 1.3.6 [16/06/2025]

#### Fixed:
- *recipe-card*:
  - Fixed issue where all recipe cards in multiple route used the same guest count instead of respecting individual recipe guest settings
- *recipe-pricing*:
  - Fixed issue where recipe cards in catalog home beyond the first two categories used a hardcoded guest count of 4 instead of the recipe's actual guest count


## 1.3.4 [10/06/2025]

#### Fixed:
- *recipe-pricing*:
  - Revert previous changes

## 1.3.3 [10/06/2025]

#### Updated:
- If render if called and price is defined, update the view

## 1.3.2 [06/06/2025]

#### Fixed:
- *catalog*:
  - All /load-more routes were missing `shouldRemovePersonalization: false` 

## 1.3.1 [06/06/2025]

#### Added:
- *styles*:
  - Added `/styles/catalog/my-space` which corresponds to the styles for the `/my-space` route. It combines the previous routes `/styles/catalog/catalog-history` & `/styles/catalog/catalog-favorites`

#### Updated:
- *recipe-card*:
  - Added a global configuration in supplier-tokens to disable personalization in both recipe-card routes. When disabled, the pre-rendered recipes-cards will not display the like button nor the cart CTA at prerender, and both will be displayed client-side, to avoid issues with caching between users.
  - /multiple route now uses the new suggestion-batch route from miam-api for better performances
- *preferences*:
  - Preferences are disabled if personalization is disabled, meaning the button will not be rendered and if the user had any preferences set, they are removed

#### Fixed:
- *recipe-card*
  - The /multiple route now returns a JSON array of the recipe cards instead of one HTML
- *my-space*:
  - Added missing paths in startingData for favorites & history

## 1.3.0 [23/05/2025]

#### Updated:
- *my-space*:
  - History now has a toggle to switch the view style between 'grid' and 'list' mode
  - Added a new param `history_style` to the /my-space route. The param only has an effect when used alongside `tab=history` and can have as value either 'grid' or 'list', defaulting to 'grid' of not passed.
  - Using the new view style toggle will put in the currentUrl either `&history_style=grid` or `&history_style=list`, which can be passed to the /my-space route

## 1.2.26 [19/05/2025]

#### Internal:
- Update CI to push to artifact registry
- Added 2 more cards on shelf demo page
- Fixed potential error on demo if there was not enough product to display cards

## 1.2.25 [05/05/2025]

- Removed @google-cloud/logging which had performance issues and replaced with correctly formatted console.log

## 1.2.24 [02/05/2025]

- Revert previous tag for performances reasons

## 1.2.23 [02/05/2025]

#### Internal:
- upgraded Nest to v11
- Added @google-cloud/logging library for better logging on GCP
- Added new Logger service to log for GCP in uat & prod and use default Logger only for dev
- Updated fetch to node-fetch to have the option to log response headers with response.entries()

# 1.2.22 [29/04/2025]

#### Fixed:
- Handle-payment doesn't confirms the basket twice if called twice in a row
- Added headers to the plausible calls just in case they weren't automatically passed

## 1.2.21 [23/04/2025]

Updated to webc-miam@9.1.15
Updated to mealz-components@1.2.8

## 1.2.20 [23/04/2025]

#### Updated:
- handle-payment route now checks the order-id param if passed to not confirm different baskets for the same order

#### Internal:
- Added more logs for plausible events in order to check if they are sent correctly

## 1.2.19 [22/04/2025]

#### Fixed:
- Added url attribute in the body of requests sent to plausible, as its absence caused these requests to return a 400 error

## 1.2.18 [22/04/2025]

#### Internal:
- Added more logs for headers checks on all routes

## 1.2.17 [18/04/2025]

Updated to mealz-components@1.2.7

## 1.2.16 [18/04/2025]

Updated to webc-miam@9.1.14
Updated to mealz-components@1.2.6
Updated to miam-ds@1.2.6

#### Fixed:
- *toolbar*: anchor was missing a navigate back

#### Internal:
- *supplier-values*:
    - Added Marmiton default values for the env-configurator
- *recipe-card*:
  - Added an id on the format `mealz-recipe-card-{RECIPE-ID}`

## 1.2.15 [14/04/2025]

Updated to webc-miam@9.1.13

## 1.2.14 [04/04/2025]

Updated to webc-miam@9.1.12

## 1.2.13 [03/04/2025]

#### Fixed:
- Resolved issue where recipe details always opened with 4 guests by refining guest count logic in : *catalog-category*, *catalog-favorites*, *catalog-home*, *catalog-list*, *my-space*
- *catalog-home*:
  - Did not have an empty state for extreme cases of contradictory preferences

#### Internal:
- Removed unused `serves` query param in load-more functionality for: *catalog-category*, *catalog-favorites*, *catalog-list*, *my-space*

## 1.2.12 [31/03/2025]

#### Internal:
- Changed all urls from unpkg to cdn.jsdelivr/npm to avoid unpkg that was down on 31/03/2025

## 1.2.11 [28/03/2025]

#### Fixed:
- *catalog-favorites*:
  - Fixed init state was incorrect

#### Internal:
- Fixed log in case of missing auth headers

## 1.2.10 [26/03/2025]

#### Fixed:
- Updated to webc-miam@9.1.8 to fix bug on basket-preview opening the last added recipes instead of the one clicked in some cases
- miam-api prod URL had an unnecessary "/"

## 1.2.9 [24/03/2025]

#### Fixed:
- *recipe-card*:
  - Optimized performances for the /recipe-card route: Should reduce response times by 150 to 200ms

## 1.2.8 [21/03/2025]

#### Fixed:
- Better logging for supplier-token errors
- *catalog-routing*:
  - Added redirecting url for my-space for the catalog-routing config for supplier 23
- *catalog-toolbar*:
  - Removed href for the back button as now the component does a native back action client-side
- *recipe-card*:
  - Optimized performances for the /recipe-card/multiple route: Should reduce response times by 150 to 200ms

#### Internal:
- Fixed coverage rules to be at 100%
- Gave access in the starting data of `recipe-pricing` if the recipe is already in the basket

## 1.2.7 [07/03/2025]

#### Updated:
- Added automatic completion filters for all routes returning recipe-cards - recipes without their primary ingredient available in the store will not appear anymore

#### Fixed:
- Fixed null error when store_id was not provided for all routes returning recipe-cards

## 1.2.6 [28/02/2025]

#### Internal:
- Added unit tests to all services
- *git-hooks*:
  - Added a pre-push hook that runs tests before pushing anything upstream
- *demo-app*:
  - retailer-cart: Added basket sync on demo start up as first basket change call is dedicated to sync
  - Fixed generate-authless route call asking for headers
- *catalog-category*
  - Added analytics path to starting-data so mealz-components can send pageview event
- *catalog-favorites*
  - Added analytics path to starting-data so mealz-components can send pageview event
- *retailer-cart*:
  - Added basket sync on demo start up as first basket change call is dedicated to sync
## 1.2.5 [21/02/2025]

#### Fixed:
- *handle-payment*:
  - Fixed possible concurrency errors and undefined errors
  - Does not try to confirm an empty basket
  - Correctly sends the analytics events 

## 1.2.4 [07/01/2025]

#### Added:
- *recipe-card*:
  - Added a new route /recipe-card/multiple to fetch more than one card at once. It takes an array of surrounding_products_ids as input and returns a HTML of all cards

## 1.2.3 [31/01/2025]

#### Internal:
- *catalog-category*
  - Added analytics path to starting-data so mealz-components can send pageview event
- *catalog-favorites*
  - Added analytics path to starting-data so mealz-components can send pageview event
- *retailer-cart*:
  - Added basket sync on demo start up as first basket change call is dedicated to sync

## 1.2.2 [17/01/2025]

#### Fixed:
- *recipes*:
  - Fixed number of guests for recipes in the basket, ensuring the number of guests remains as it was when the recipe was added to the basket
- *recipe-card*
  - Fixed JSON parsing error for surroundingProductsIds by adding a try-catch block
  - Prevent null reference errors when accessing recipe pricing data
- *recipe-pricing*
  - Load discounted ingredients count when the recipe is already in the basket

#### Internal:
- Added a new page to the demo simulate a retailer cart and interactions with the products (add, update, remove)

## 1.2.1 [10/01/2025]

#### Updated:
- *recipe-card*:
  - Added the attribute aria-hidden="true" to recipe picture as redundant with recipe label

#### Fixed:
- Fixed CORS configuration to allow all localhost origins, removing the restriction to only port 4200
- *recipe-card*:
  - Favorite button was still displayed when user was not logged

## Internal:
- *recipes*
  - Updated `page_size` and `page_number`search request params
- *catalog-home*
  - Added `sessionId` to starting-data to synchronize session id with SDK
- *recipe-card*
    - Added `sessionId` to starting-data to synchronize session id with SDK
- *catalog-home*:
  - Added analytics path & category id to starting-data so mealz-components can send category.display event

## 1.2.0 [20/12/2024]

### Added:
- *catalog-history*
  - Added component + controller for JS injection
  - Added search functionality
  - Added "no history" view
- *catalog-tabs*
  - Added tabs for Favorites / History
- *drawer*
  - Added component
- *history-order*
  - Added component
- *recipe-card*
  - Added a variant
- *http.service*
  - Added `profiling` as an optional header for all routes, defaulting to `true`
  - Added `profiling=off` query param in all requests to `miam-api` when the profiling header value is "false"

#### Updated:
- All features now have semantic tags (p, h1, h2, h3, h4) instead of div and spans around texts
- *recipe-card*
  - Removed the `profiling` query param from the `recipe-card` route
- *recipe-pricing*
  - Removed the `profiling` query param from the `recipe-pricing` route
- *catalog-toolbar*
  - Renamed the favorites button to my space

#### Fixed:
- baskets/handle-payment route now takes as body the current retailer car in order to sync the basket with the cart before confirming it

#### Internal:
- Added a first basic implementation of JSONAPI data management with generic interfaces, a generic fetchAll method and models for the BasketEntries and Items.
- *analytics*:
  - Add `path` to recipe-card starting-data
  - Add myMealsButtonStartingData with `path`
  - New AnalyticsPaths enum
- *auth-widget*:
  - New component to handle user log status handled by cookies
- *headers*:
  - Added new `authless-id` attribute in header
  - `authless-id` header is turned into authorization header for miam-api
  - New component in demo app to handle user log status handled by cookies

## 1.1.2 [29/11/2024]

#### Added:
- *basket*
  - Added a controller and methods to handle merge authless basket
  - Added a controller and methods to handle payment confirmation

#### Added:
- *promotions-banner*:
  - New promotions-banner component on catalog home
- *recipe-promotion-badge*:
  - New recipe-promotion-badge component currently displayed on recipe cards

#### Fixed:
- catalog-routing always used the dev routing file
- *styles*:
  - Added missing breadcrumb style on catalog-category style route

## 1.1.1 [22/11/2024]

#### Added:
- *catalog-favorites*
  - Added a controller to load more recipe cards
- *catalog-list*
  - Added a controller to load more recipe cards
- *catalog-toolbar*
  - Added preferences loader
- *recipe*
  - Added recipe model
- *sponsor*
  - Added sponsor model

#### Updated:
- *catalog-category*
  - Updated the url from `/category?id=[category_id]` to `/category/[category-name-slug]/[category_id]`

#### Updated:
- Updated allowed origins to support additional trusted domains

#### Fixed:
- *CORS*
  - Added support for the OPTIONS method
- *recipes.service*
  - Added validation for JSON response to avoid parsing errors
  - Refactored `getRecipeSponsorLogoUrl` to use `Recipe` model methods instead of nested properties

#### Internal:
- Updated several dependencies to newer, more secure versions
- *slug.service*
  - Added a service to convert text to slug
- *recipes.service*
  - Updated the search endpoint path from `/recipes?search=[search]` to `recipes/search?name=[search]`

## 1.1.0 [15/11/2024]

#### Added:
- Added `mealz-session-id` to request headers
- Added Redis configuration for caching
- *catalog-category*
  - Implemented empty state for scenarios where no recipes match the selected criterias.
  - Added search functionality
  - Integrated user preferences
- *catalog-favorites*
  - Added search functionality
- *catalog-home*
  - Integrated user preferences
- *catalog-list*
  - Added component + controller for JS injection
- *catalog-toolbar*
  - Added preferences badge count

#### Updated:
- *catalog-toolbar*
  - Removed unused filters
- *catalog-favorites*
  - Removed preferences button

#### Internal:
- Added a cache controller to manage Redis cache through ng-miam-sdk
- Enabled caching for `getBasket`, `getPointOfSaleByExtId`, `getByRecipeId`, `getRecipeById`, `getRecipePricing`

#### Fixed:
- *catalog-home*:
  - Added back arrow to "See All" button.
- *generate-authless-token*
  - Added error handling for missing or invalid supplier token
- *http.service*
  - Added null checks for supplier data to avoid errors when supplierId is undefined or null
- *point-of-sales.service*
  - Added a check to ensure `pos` is defined before attempting to access `id`

## 1.0.2 [08/11/2024]

#### Added:
- Added logs for missing required query parameters

#### Fixed:
- *catalog*:
  - Made the *display_recipe_variant* query paramater optional

## 1.0.1 [04/11/2024]

#### Updated:
- *urls*:
  - Moved every routes from v0 to v1

#### Fixed:
- *recipe-card*
  - Fixed suggested recipe-card

## 1.0.0 [24/10/2024]

#### Breaking changes:
- *window.miam*:
  - Renamed to window.mealz

#### Added:
- *catalog-category*
  - Added component + controller for JS injection
- *catalog-favorites*
  - Added component + controller for JS injection
- *catalog-home*
  - Added controller for JS injection
- *like-button*
  - Added controller for JS injection
- *recipe-card*
  - Added controller for JS injection
- *recipe-card-cta*
  - Added controller for JS injection
- *recipe-pricing*
  - Added controller for JS injection
- *catalog-breadcrumbs*
  - Added component
- *catalog-toolbar*
  - Added component
- *my-meals-button*
  - Added component
    -*http.service*
- Now handles errors and build header from this service, throw error when category_id is required but not provided

#### Updated:
- *catalog*:
  - Now fetches recipe sponsor on catalogs pages
- *catalog-category*:
  - update routes from /catalog/category/ID to /catalog/category?id=ID
- *recipe-card*:
  - if no suggestion is given for recipe in shelf, throws NotFoundException
- *ng-miam-sdk*:
  - updated to 9.0.1 on prod and uat

#### Fixed:
- *catalog-favorites*:
  - Fix new logic on like button

## 0.2.1 [23/09/2024]

#### Fixed:
- *recipe-card*:
  - Fixed double basket-current call

#### Internal:
- Added performance log to measure requests times

## 0.2.0 [20/09/2024]

#### Added:
- *point-of-sales-service*:
  - Added point-of-sales service with method getPointOfSaleByExtId
- *nextJS-demo*:
  - Added NextJS Demo to project using the SSR API
- *catalog*:
  - Initiated recipe catalog with home page
- *styles*:
  - Added routes to fetch components styles individually to add them to `<head>`
- *i18n*:
  - Added I18n for catalog-home, my-meals-button, recipe-pricing and recipe-card-cta

#### Fixed:
- *recipe-pricing*:
  - Recipe pricing initial data was an object rather than a string with the value

#### Internal:
- Updated mealz-component version to 0.4.0
- Added Nest built-in logger to project with some errors handling

## 0.1.1 [03/09/2024]

#### Fixed:
- env config for uat & prod

## 0.1.0 [30/08/2024]

#### Added
- *like-button*:
  - Added a route for the component, and the associated services and views
- *recipe-card*:
  - Added a route for the component, and the associated services and views
- *recipe-pricing*:
  - Added a route for the component, and the associated services and views
- *i18n*:
  - POC of i18n implementation, not enough text in the served components to use yet
- *routes*
  - Added a generate-authless-token route to fetch an authless token for loggued out users
- *versioning*:
  - Added basic versioning handler on url

#### Internal
- Added baskets service
- Added recipes service
- Added recipe-likes service
- Added supplier service
- Added user service
- Added scripts to download SDK Web-C lib and style files to each components
- Added environment files for dev, uat and prod

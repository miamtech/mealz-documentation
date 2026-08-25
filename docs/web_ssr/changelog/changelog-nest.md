---
sidebar_position: 1
---

# Mealz SSR API Changelog

## 3.3.4 [25/06/2026]

#### Internal
- V1 - Update SDK version to 9.1.31

## 3.3.3 [21/08/2026]

#### Fixed
- *recipe-card* — v3 MULTIPLE (`fetchMultiple`): analytics `path` in card and like `starting-data` is now `AnalyticsPaths.EMPTY` so search/rayon events use the real page URL instead of `/miam/recipes` (#86cb7tdfe). Invalidate Redis MULTIPLE/catalog caches after deploy.

#### Internal
- V3 - Update mealz-component to 3.2.3

## 3.3.2 [19/08/2026]

#### Updated
- *env* — **v3**
  - Point UAT and production `LIT_CMPNTS_URL_V3` at `mealz-components@3.2.2` (shared-analytics 4.13.1 so client events also POST to BigQuery).

## 3.3.1 [19/08/2026]

#### Added
- *bootstrap* — **v3**
  - Core bootstrap config now includes `env` from process `ENV` (`dev` / `uat` / `prod`) so the client can gate analytics at runtime without a per-environment components build.

#### Fixed
- *styles* / *my-space* / *history* — **v3**
  - `GET /v3/styles/catalog/my-space` (and catalog-history) now includes `recipe-card/variant-3` CSS. The history drawer always renders variant-3 cards, even when the page `recipe_card_variant` is another value.

## 3.3.0 [14/08/2026]

#### Added
- *recipe-pricing* — **v3**
  - Optional `display_no_store` query parameter shows the "Show price" CTA when no store is selected (default off)
  - Optional `mealz_store_id` query parameter to set the selected store by internal id
- *demo* `/external-recipes`
  - Embeds v3 `recipe-pricing` with `display_no_store=true` for the no-supplier journey

#### Fixed
- *catalog-toolbar* — v3
  - Planner catalog search bar SSR partial now renders the `expanded` state when a `search` query param is active, so the term stays visible after results reload.

#### Updated
- *planner-entry* — v3
  - Variants have been separated into separate templates (`planner-entry-variant-{1,2,3}.ejs`), aligning with Mealz's variant versioning rules (same pattern as recipe-card).
  - On `/planner/entry`, the query param remains `variant`; on `/catalog` (and styles), the parent param remains `planner_entry_variant`.
  - Invalid variant values now return `400 Bad Request` via `VariantService.normalizePlannerEntryVariant` (default `3`).
  - Style manifests load `planner-entry/variant-N/planner-entry.css`; `GET /v3/styles/planner/planner-entry?variant=` and catalog styles accept `planner_entry_variant`.

#### Fixed
- *my-space* / *history* — **v3**
  - `historyStyle` is now included in history `startingData` so load-more keeps the same grid/list style as the initial render

## 3.2.0 [31/07/2026]

#### Added
- *basket* — v1 & v2
  - New route `POST /basket/payment-started` to be notified by retailer when the payment process start. This route use same contract as `handle-payment` and manage a synchronization with retailer cart before sending analytics event.

#### Updated
- *recipe-pricing* — v1 / v2
  - Accept either `recipe_id` (Mealz internal id) or `recipe_ext_id` (external id). External ids are resolved to a Mealz id before rendering starting data.

#### Fixed
- *i18n* — v2 & v3
  - SSR controllers now resolve template locale from `mealz-custom-lang` when present, falling back to `language-id`.

#### Updated
- *catalog-toolbar* - v2
  - Moved promotions entry to a discount button in the home toolbar; removed the catalog-home promotions banner.

#### Internal
- V2 - Update SDK to 10.7.0
- V2 - Update mealz-component to 2.11.3
- V3 - Update mealz-component to 3.1.1

## 3.1.0 [23/07/2026]

#### Added
- *mealz-bootstrap*
  - Optional incoming `cookies-consent: true` header is mapped into the bootstrap JSON as `cookiesConsent: true` (`cookies-consent: true` is equivalent to `forbidProfiling: false`; when the header is absent, profiling stays off).

#### Fixed:
- *analytics*:
  - `HttpService.sendAnalyticsEvent` catches network/fetch failures and logs a warning instead of rejecting, so payment/SSR flows are not interrupted by analytics outages
- *catalog* — v3
  - Catalog home toolbar « Promo' » chip is hidden when the selected store has no promotional recipes (`filter[discounted_ingredients_count]` with POS and guests; the chip only renders when at least one promo recipe is available for that store.
- *planner* — v3
  - `/recipes/suggest` responses now include sponsors; `formatRecipes` exposes `sponsorLogoUrl` on suggested recipes for planner suggestion cards (SSR first paint).
  - `planner-recipe-suggestion-card` uses `currentRecipe` for promo and sponsor badges so the next-suggestion preview shows the correct recipe badges.

## 3.0.0 [03/07/2026]

#### Breaking changes:
- *core* — **v3**
  - V3 does not maintain `GET /v2/mealz-window-bootstrap` (SDK WebC) to access window.mealz without a component. Integrators on v3 should use `GET /v3/core` instead.
- *recipe-card* & *catalog* — **v3**
  - Recipe card variants were reshaped to align with Mealz's new versioning rules:
    - Unused recipe-card variant **2 was removed**. Former variants **3** and **4** are now variants **2** and **3**, respectively.
    - On `/recipe-card` endpoints, the `display_variant` query parameter has been renamed `variant`; this will be the standard name for variant parameters going forward.
    - On other endpoints that render recipe cards (e.g. `/catalog`), `display_recipe_variant` parameters have been renamed `recipe_card_variant`; this matches the naming pattern for endpoints whose sub-features have variants.
    - Variant **2** (formerly variant **3**) now only differs from variant **1** in that **the like button is in the footer** instead of the top-right corner.
    - Variant **3** (formerly variant **4**, history drawer only) **stayed unchanged**.

#### Added
- *core* — v3: `GET /v3/core` returns the necessary scripts to make the core mealz logic availaible (services & window.mealz & global components like modals and the drawer-view-swapper).
- *recipe-tag* - v3
  - Added route */recipe-tags* to fetch multiple recipe-tag components in batch.
    - Params are store_id (as usual) and product_ids (an array of product IDs)
    - Like the */recipe-card/multiple* route, the response is a JSON array of `{ html: string, productId: string }`, with each object's `html` containing the recipe-tag markup for that `productId`
- *catalog* — v3
  - Added *all-recipes-banner* partial on catalog-home after the first category block, linking to the all-recipes catalog list route.
  - `all_recipes=true` on catalog list and load-more routes keeps only user preference filters (`include_tags`, `exclude_tags`, `guests`); search, promotions, and recipe-type filters are stripped, and the recipe-type filter UI is disabled.
  - Catalog list toolbar and page title use the `CATALOG_ALL_RECIPES` page when `all_recipes` is active.
- *recipe-card* - v3
  - Added drink badge for recipes that are drinks
  - When a shelf context has no recipe suggestion, renders a generic redirect card (`recipe-card-generic`, class `redirect-card`) linking to the catalog home; batch `/recipe-card/multiple` inserts it only for the lowest-position missing context, and single-card routes set `initializedObject.isGeneric` when the suggestion API returns empty.
  - Optional query param `allow_default` (default `true`) on `GET /recipe-card` and `POST /recipe-card/multiple`; set `allow_default=false` to skip the generic redirect card when no suggestion is found.
  - Localized copy via `texts.v3.RECIPE_CARD_GENERIC` (`TITLE`, `CTA`) in `en`, `fr`, and `fr-supermrkt`.
- *recipe-card-cta*
  - Added new param recipe_name (acts like the recipe_name attribute on legacy <webc-miam-recipe-card-cta>)
- *mealz-bootstrap* - v3
  - V3 standalone HTML entry points (page routes and directly-fetchable components) load a per-request core entry module (`GET /v3/core/bootstrap.js`) that inlines the bootstrap config (built from request headers) and calls `ensureBootstrapped(config)` directly, so `mealz-components` initializes supplier, user, session, POS, and basket before client-side fetches run. The config travels base64url-encoded in the `bootstrapConfig` query param — there is no `<script type="application/json" id="mealz-bootstrap">` JSON tag. Because the config lives inside the core module the client must load anyway, it can no longer be detached/reordered from its consumer, which removes the CSR bootstrap race in `miam-injector`.
  - `bootstrap.util.ts` (`buildBootstrapScriptHtml`) renders the core entry `<script type="module">` into page HTML; `GET /v3/core/bootstrap.js` decodes the `bootstrapConfig` param and re-serializes it (JSON round-trip) into the served module body.
  - The bootstrap config passes `ssrApiUrl` (SSR API v3 base, e.g. `{SSR_API_URL}/v3`) and `miamApiUrl` (mealz-hub base from `MEALZ_HUB_API_URL`, no `/api/v1` suffix) so a single published `mealz-components` build works in dev, UAT, and prod without per-env baked URLs.
- *basket-preview* — v3
  - `GET /v3/catalog/my-space/basket-preview` accepts `in_drawer` (default `true`) and `store_id` query params. Setting `in_drawer=false` renders the `<mealz-basket-preview>` component without the drawer wrapper, enabling the endpoint to be used as a standalone embeddable SSR fragment.

#### Fixed
- *my-space* - v2 & v3
  - Back button in Mon carnet now links to catalog home instead of `history.back()`, so Favoris/Historique tab switches no longer replay when returning to the catalog home page.
- *catalog* - v3
  - catalog-list and my space pages now correctly disable personalization if the corresponding attributes is present in supplierToken
- *catalog* - v2 & v3
  - display-recipe-variant was not processed for any catalog endpoint, so the variant returned was always the variant 1
- *recipe/multiple* - v2 & v3
  - display-variant was not processed for the /multiple endpoint, so the variant returned was always the variant 1
- *preferences* - v1, v2 & v3
  - Removed duplicate `CacheModule.register()` from versioned shared modules so `POST /cache/set` and SSR preference reads share the same global cache; v3 catalog toolbar badge count and recipe filters now apply after saving preferences in the drawer.
- *catalog* & *planner* — v3
  - The preferences button is now opt-in on shelves: it is only displayed when the supplier token explicitly sets `noPersonalizationOnShelves: false`. When the flag is absent or set to `true`, the button stays hidden.

#### Updated
- Removed all links to webc-miam for V2
- *routing* - v3
  - Added "fake" routing using a "section" query param for the catalog pages of CoursesU
- *catalog-toolbar* - v2
  - Updated toolbar template structure to match the new toolbar layout, including right-side history switch placement in my-space/history view.

#### Internal
- *demo-app*
  - Added v3 to the demo
  - Added product images and prices to retailer-cart page, which are fetched after each product add from basket-sync and stored in cookies
  - Fixed total basket price in store-header to not use mealzInternal since it will not exist after SDK migration
  - Updated "dev" npm command to use port 4200
  - Added CSS override to recipe-cards in shelves so that they are the same size as the products
  - Removed /ssr page that wasn't used anymore
  - Environment Configurator has been moved to a FAB to take up less space
  - Now uses mealz-hub instead of doing manual calls to miam-api
  - Moved mealz initialization from a script in assets to a component with useEffect
  - Added a new page /external-recipes to test no-supplier mode. The page uses separate cookies for env so the "external recipe website" and "retailer website" are completely separated.
  - Changed cookies keys prefixes from "_miam/" to "demoNext/" because it was confusing to use the same names as the localStorage keys used by mealz-components
  - Added forcePosCallback for after basket transfer from /external-recipes
  - Added a utils file for cookies manipulation
  - Changed retailer cart to separate carts by user-id by including the id in the cookie key
  - Added an option to switch between precise style mode and all styles mode for V3 onward
  - Initialize and keep `mealz.setStickyHeaderHeight(...)` in sync with `.store-header` height so sticky catalog toolbar offset is correct in demo
  - On **v3**, `InitMealz` only wires retailer hooks (force POS, router URLs, language); supplier, user, POS, and basket setup are delegated to SSR-injected bootstrap instead of cookie-based `setupWithToken` / `loadWithExternalId` / `pos.load`.
- *mealz-bootstrap*
  - SSR bootstrap helpers live under `src/shared/utils/mealz-bootstrap/` (no `mealz-hub` dependency); unit tests for `buildBootstrapFromHeaders`.
- *catalog* - v3
  - Removed `sessionId` from page-level `starting-data` on catalog and planner routes; session is provided via the bootstrap script (kept on standalone `recipe-card` SSR fragments such as shelves).
- *env*
  - Renamed all "MIAM_DS_" env vars to "MEALZ_DS_"
  - Added `MEALZ_HUB_API_URL` (client-facing miam-api base for bootstrap; distinct from server `API_URL` which includes `/api/v1`).
- *recipe-card* - v3
  - Variants have been separated into separate folders, so modifying or deprecating one of them is easier and cannot impact other variants
  - Templates that were only displayed in the recipe-card have been moved to the new */recipe-card* folder for clarity
- *styles* - v3
  - Refactored the controller to use versioned recursive style.ts files coupled to each .ejs template instead of using the same arrays for all versions
- *catalog-list-filters.util*
  - Extracted catalog list filter building (`buildCatalogListFilters`, `isQueryFlagEnabled`) used by the v3 catalog list controller.
- *utils*
  - Added a util method that checks if a base url already contains '?' before adding a query param so the final url doesn't have two '?' characters

## 2.15.1 [07/08/2026]

#### Internal
- V2 - Update mealz-component to 2.11.4

## 2.15.0 [31/07/2026]

- *basket* — v1 & v2
  - New route `POST /basket/payment-started` to be notified by retailer when the payment process start. This route use same contract as `handle-payment` and manage a synchronization with retailer cart before sending analytics event.

#### Updated
- *recipe-pricing* — v1 / v2
  - Accept either `recipe_id` (Mealz internal id) or `recipe_ext_id` (external id). External ids are resolved to a Mealz id before rendering starting data.

#### Internal
- V2 - Update SDK to 10.7.0
- V2 - Update mealz-component to 2.11.3

## 2.14.1 [27/07/2026]

#### Fixed
- *i18n* — v2
  - SSR controllers now resolve template locale from `mealz-custom-lang` when present, falling back to `language-id`.

#### Internal
- V2 - Update mealz-component to 2.11.2

## 2.14.0 [17/07/2026]

#### Updated
- *catalog-toolbar* - v2
  - Updated toolbar template structure to match the new toolbar layout, including right-side history switch placement in my-space/history view.
  - Moved promotions entry to a discount button in the home toolbar; removed the catalog-home promotions banner.

## 2.13.1 [17/07/2026]

#### Internal
- V2 - Update mealz-component to 2.11.1

## 2.13.0 [16/07/2026]

#### Updated

- *recipe-pricing* - v2: 
  - Added a `mealz_store_id` query parameter to set selected store by internal store id
  - Added optional `display_no_store` query parameter to enable display of "Show price" button when no store is selected. By default, this mode is off.

#### Fixed

- *planner* — v2
  - Suggestion card display sponsor logo if required.
- *catalog* & *planner* — v2
  - When `noPersonalizationOnShelves` is set on the supplier token, the preferences button is now hidden consistently on catalog list/search pages and in the meal planner header (it was already hidden on catalog home/category).
  - The preferences button is now opt-in on shelves: it is only displayed when the supplier token explicitly sets `noPersonalizationOnShelves: false`. When the flag is absent or set to `true`, the button stays hidden.

## 2.12.1 [09/07/2026]

#### Internal
- Update SDK to 9.1.30 / 10.6.0

## 2.12.0 [01/07/2026]

### Added

- *recipe-card* — v1 & v2
  - New route `POST /recipe-card/multiple-raw` for batch recipe resolution. Takes an array of recipe contexts (productIds and position) plus store_id, and returns matching Mealz recipe IDs for all resolved contexts in a single request. Responds with { data: [{ recipeId, position }] }, returning matched positions only (contexts with no matching recipe are omitted).

#### Internal
- Update SDK to 10.5.11

## 2.11.0 [11/06/2026]

#### Added

- *supplier-selector* — v2
  - `GET /v2/supplier-selector` serves a minimal SSR page that loads the SDK web component script, `drawer-view-swapper`, and `init-supplier-selector-drawer`.
- *recipe-details* — v2
  - `GET /v2/recipe-details` serves a minimal SSR page that loads the SDK web component script, `drawer-view-swapper`, and `init-recipe-details-drawer`, with a hidden config node carrying `recipeId` and `initialTabIndex`. Query params: `recipe_id` or `recipe_ext_id` (resolved via `RecipesService.getRecipeByExtId` when the Mealz id is omitted), and optional `initial_tab_index` (default `0`). Responds with `400` if neither id is set and `404` if `recipe_ext_id` does not resolve.
- *recipe-card* — v1 & v2
  - Optional query parameter `recipe_ext_id`: load the recipe card from the retailer’s external recipe id (via `RecipesService.getRecipeByExtId` / `GET /recipes/external/:id`), as a third option alongside `recipe_id` and `surrounding_products_ids`. At least one of the three must still be provided.
  - When the card is resolved from `recipe_ext_id`, “in basket” is computed from the resolved Mealz recipe id (`recipe_id` wins if both ids are supplied).

#### Updated
- *i18n* — *PLANNER_MENU_OPTION.CANCEL* (en / fr)
  - Planner menu-option CTA copy: “Empty menu” (en) and “Vider le menu” (fr), replacing “Cancel menu” / “Abandonner le menu”.

#### Fixed
- *recipe-card* — v2
  - `GET` recipe-card: when the request relies on `recipe_ext_id` only (no `recipe_id`), an unknown external id returns **404 Not Found** instead of failing during render.
  - `sponsorLogoUrl` is read safely when the recipe payload is absent (e.g. empty suggestion result).
- *catalog/my-space/basket-preview* - v2
  - Optional query `selected_tab`: `1` opens the products segment first; any other value (including omitted) opens the recipes segment (`0`), matching the SDK basket preview tab index used by `openPreview`.

## 2.10.7 [27/05/2026]

#### Fixed
- *nextjs-demo*:
  - Calls `mealz.pos.load` only when a `posId` cookie is set, so no-supplier suppliers (e.g. Marmiton) no longer trigger an invalid POS load on demo startup.
  - Removed default `posId` from Marmiton in `supplier-defaults.json`.

#### Added
- *nextjs-demo*:
  - New suppliers to supplier-defaults.json: Cuisine Az and Cuisine Actuelle

## 2.10.6 [21/05/2026]

#### Internal
- Update SDK to 10.5.5

## 2.10.5 [21/05/2026]

#### Internal
- Update mealz-component to 2.9.0

## 2.10.4 [20/05/2026]

#### Added
- *mealz-window-bootstrap* — v2: `GET /v2/mealz-window-bootstrap` returns an HTML fragment containing only the WebC SDK script (`SDK_WEBC_URL_V2`) so integrators can obtain `window.mealz` / `window.mealzInternal` after load without additional Lit components or Mealz SSR markup in the response.
- *no-supplier-add-to-cart-cta* - v2
  - Added an attribute and a class "in-basket"
- *client-scripts* — v1 & v2
  - `GET /v1/client-scripts/recipe-card-show-tracking.js` and `GET /v2/client-scripts/recipe-card-show-tracking.js` serve the `recipe-card-show-tracking` integration bundle (`integrations/recipe-card-show-tracking.min.js`) for `recipe.show` viewport analytics on retailer pages.
  - Resolution order: `sendFile` from `DOCKER_CMPNTS_PATH` when the file exists; otherwise `/integrations/recipe-card-show-tracking.min.js` when `ENV=dev`; otherwise to `${LIT_CMPNTS_URL_V2|V1}/integrations/recipe-card-show-tracking.min.js`.

#### Fixed
- *recipe-card* - v1 / v2:
  - Fixed a 500 error that could occur when a cached recipe was used instead of a fresh API fetch
- *all routes* - v1 / v2:
  - `included` data was not passed to Recipe instances on creation, which could cause errors due to getters not resolving correctly

## 2.10.3 [04/05/2026]
- V2 - Updated  mealz-components to 2.8.2

## 2.10.2 [04/05/2026]
- Added Marmiton to CORS

## 2.10.1 [04/05/2026]
- Added CuisineAz to CORS

## 2.10.0 [21/04/2026]

#### Updated
- *planner-entry* - v2
  - Added planner entry variants via `variant=1|2|3` to support hero current-selection, hero custom-menu, or dual-card layouts.
  - Refactored planner entry views into reusable stepper and avatars partials, with localized hero copy and assets.
- *catalog-home* - v2
  - Optional query `planner_entry_variant` (`1`|`2`|`3`, default `3`): same layout semantics as `GET /v2/planner/entry?variant=`. Embedded planner block SSR passes `variant` in `starting-data` and loads current-selection / custom menu data only when needed for that variant.
- *planner-dashboard* - v2
  - Planner menu-option SSR `starting-data` now includes `plannerEntryVariant` (`1`|`2`|`3`, same value as the resolved layout variant) when built from planner-entry or catalog-home, so the web component can attach it to `planner.mode.select` analytics.
- *catalog-home* — v1 & v2
  - Recipe card and like-button `starting-data` include `categoryId` per catalog package so home-page sections map recipes to their parent category for client analytics.
- *catalog-category* — v1 & v2
  - Pass the current category package id as `categoryId` for recipe cards and likes on dedicated category pages.
- *recipe-card.service* — v1 & v2
  - `setRecipeCardsStartingData` accepts an optional `categoryId` serialized into each card’s `starting-data`.
- *like-button.service* — v1 & v2
  - Like `starting-data` and `setLikesForRecipes` accept optional `categoryId`.
- *like-button* (HTTP)
  - `GET /like-button` accepts optional query parameters `path` and `category-id`, forwarded into like-button initialization.

#### Fixed
- *planner-entry* - v2
  - Preserve the existing current menu state for variant 1 so planner-entry reuses the current menu instead of creating a new one before redirecting.
- *catalog-home* / *planner-entry* - v2
  - Resolved `variant` (and related flags) being undefined when rendering the planner entry partial from catalog-home.

#### Internal
- Shared `resolvePlannerEntryVariant()` in `src/shared/utils/planner-entry-variant.util.ts` for planner-entry and catalog-home controllers.
- Added npm `overrides` for `path-to-regexp` (^8.4.0), `lodash` (^4.18.1), and `picomatch` (^4.0.4) to patch high-severity vulnerabilities in transitive dependencies until upstream packages (NestJS core, cli) ship updated resolutions.
- *catalog*
  - Reduced requests time for most catalog and planner routes by using promise.all instead of sequential awaits wherever possible. The differences with before are mostly small as most routes were already quite efficient, but catalog-home was reduced from an average of 5000ms to an average of 1800ms

## 2.9.0 [03/04/2026]

#### Added
- *planner* - v2
    - New back button before menu title

#### updated
- *recipe-card* - v1 / v2:
  - Changed every icon to a generic one for consistency

## 2.8.1 [26/03/2026]

#### Fixed
- *catalog-home* - v1
  - Fixed `CatalogPages is not defined` error: `CatalogPages` enum is now passed to the EJS context, and `catalog-home.ejs` uses `CatalogPages.HOME` (instead of `Pages.CATALOG_HOME`) when including `catalog-toolbar.ejs`.

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
  - Replaced minus and plus icon in the stepper with <img> to replace easily for suppliers overrides
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
  - Added an id on the format "mealz-recipe-card-{RECIPE-ID}"

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

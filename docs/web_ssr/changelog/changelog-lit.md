---
sidebar_position: 2
---

# Mealz components Changelog

## 3.2.3 [21/08/2026]

#### Fixed
- *analytics* — `attachRecipeCardShowTracking` always uses the current page URL (`location.href`); `analyticsPath` is not part of the public API (#86cb88rwy).

## 3.2.2 [19/08/2026]

#### Updated
- *analytics*:
  - Bumped `mealz-shared-analytics` from 4.4.1 to ^4.13.1 so client events are POSTed to Mealz analytics / BigQuery as well as Plausible (dual-send exists since 4.5.0; UAT vs PROD URL since 4.7.0). Aligns with ng-miam-sdk.

## 3.2.1 [19/08/2026]

#### Fixed
- *analytics*:
  - Client `sendEvent` no longer uses the build-time `ANALYTICS_ENABLED` flag as a global kill switch. The flag applies only when SSR bootstrap `env` is `dev`. UAT/prod always send.
- *history-drawer* / *history-order*:
  - Opening a past order no longer crashes when V3 page `starting-data` omits `sessionId`. The session is read from bootstrap (`getSessionId()`), matching other catalog components.

#### Updated
- *mealz-bootstrap*:
  - Reads `env` from bootstrap config and passes it to `AnalyticService.setRuntimeEnv` before analytics init.

## 3.2.0 [14/08/2026]

#### Added
- *recipe-pricing*:
  - "Show price" CTA opens the supplier selector via `contextRegistryService.displaySupplierSelector$`
  - Subscribes to POS selection to fetch pricing once a store is chosen
  - On pricing fetch failure in no-supplier mode, returns to the "Show price" CTA for retry

#### Updated:
- *planner-onboarding-modal*:
  - Refresh help modal to onboarding v3.1: drop the obsolete « Choisissez votre type de menu » step (planner entry no longer offers two entry types), update step copy, and switch to neutral desktop/mobile illustrations.
- *planner-entry*
  - Variants have been separated into separate folders (`variant-1` / `variant-2` / `variant-3`), so modifying or deprecating one of them is easier and cannot impact other variants. Each variant ships its own JS and CSS, scoped under `.mealz-planner-entry.variant-N`.
- *recipe-pricing*:
  - Moved `max-width` from `.mealz-recipe-pricing` to `.mealz-recipe-pricing__wrapper` so the without-store button is not clipped

#### Fixed:
- *catalog-toolbar*:
  - When the user is not logged in, clicking Mon carnet / favorites triggers the retailer `hookCallback` login flow instead of opening the empty favorites page; after login, navigation to Mon carnet resumes.
  - Planner catalog search no longer re-fetches when the query is unchanged (e.g. blur after Enter); the search bar stays expanded and shows the active term after results reload.
- *planner-catalog*:
  - After a search reload, the toolbar search bar stays expanded and displays the active search term.
- *planner-onboarding-modal*:
  - Onboarding height styles (`680px` / mobile `740px`) are scoped to `.mealz-planner-onboarding__modal-root`, so other planner modals (e.g. budget edit) stay sized to their content once the onboarding stylesheet is loaded.
- *baskets*:
  - Defer clearing `authlessId` from localStorage until authless basket and menu transfer complete (avoids concurrent refresh skipping transfer while PATCH is in flight).

## 3.1.1 [31/07/2026]

#### Updated:
- *deps* — Bumped tooling to ESLint 10 (`eslint` / `@eslint/js` ^10, `typescript-eslint` ≥8.56, `eslint-plugin-jsdoc` ^63, direct `globals`) so `minimatch@10` pulls patched `brace-expansion@5.0.8` without an `overrides` pin. Also clears other `npm audit --audit-level=high` findings for CI `lit-install` (e.g. `postcss`).

#### Fixed:
- *recipe-details* — Dropped a useless assignment flagged by ESLint 10 `no-useless-assignment` in `recipe-details.service.ts`.
- *replace-item* / *baskets*:
  - Adding a product not yet in basket from recipe-details (add-ingredient) no longer sends `guests=0` when the recipe is absent from basket `recipes-infos`; recipe UI guests are passed through the action chain (`addIngredientsToBasket` / `addItemsForIngredients`).
  - After a successful product selection from recipe-details, replace-item closes and returns to recipe-details instead of staying open (analytics no longer builds `/recipes/undefined/...` for initial entries without `recipe-ids`, and close runs on action `onSuccess`).
- *details-ingredients*:
  - Ingredient quantities in « Je cuisine » now recalculate when the guests counter changes (same scaling as « Je fais mes courses »).
- *basket-action*:
  - Re-adding a product after removing it via "−" no longer pushes double quantity to the retailer cart (`updateBasketEntryQuantity` only counts existing quantity when the entry is `active`).

## 3.1.0 [23/07/2026]

#### Added:
- *mealz-bootstrap*:
  - Bootstrap reads optional `cookiesConsent` from `#mealz-bootstrap` and sets `forbidProfiling` accordingly during auto-bootstrap (`cookiesConsent: true` allows profiling; omitted or false forbids it).
- *window.mealz*:
  - `window.mealz.analytics.attachRecipeCardShowTracking({ element, recipeId, categoryId?, analyticsPath? })` attaches viewport-based `recipe.show` tracking on a custom recipe card root (same rules as `mealz-recipe-card`: ≥80% visible for 1s, deduped for 5 minutes per recipe). Returns `{ disconnect() }` for teardown on virtual lists or SPA navigation.

#### Updated:
- *http* (`buildHeaders`):
  - Forwards optional `cookies-consent: true` on client-side SSR fetches when profiling is allowed, so paginated or follow-up SSR requests stay aligned with bootstrap consent.
- *window.mealz*
  - `user.updateForbidProfiling` was removed — V3 integrators pass cookie consent via optional `cookies-consent: true` on SSR requests instead of updating profiling at runtime.
- *mealz-bootstrap* — `ensureBootstrapped(config)` now takes the bootstrap config as a **required** argument and initializes directly from it. The  `#mealz-bootstrap` DOM read and its ~1s retry loop were removed; the config is delivered by the SSR core entry (`GET /v3/core/bootstrap.js`), which fixes the CSR bootstrap race in `miam-injector`.

#### Fixed:
- *analytics*:
  - Client `AnalyticService.sendEvent` swallows errors from `mealz-shared-analytics` (log via `mealzError`) so invalid payloads or lib throws never interrupt basket/UI flows
- *planner-catalog*:
  - Searching from the planner catalog no longer renders the catalog template (search bar + recipe cards) twice; new results replace the previous content instead of appending.
- *recipe-details*
  - Sponsor banner in the recipe-details drawer displays for sponsored recipes (or when `informational-sentence` is set); the « En savoir plus » link appears only when an informational page or sponsor storytelling is configured.

#### Removed:
- *core* — The static `core/core.min.js` entry introduced in 3.0.0. Its role (assign `window.mealz` + run bootstrap) is now served per-request by the SSR API. The shared runtime (previously the incidental `mealz-core-runtime` code-split chunk) is now exposed as the public `mealz-core.min.js` entry (re-exports `ensureBootstrapped`), imported by that endpoint and every feature bundle so singletons stay shared.

#### Internal:
- *recipe-card-show-tracker* / *recipe-show-tracking* / *attach-recipe-card-show-tracking*:
  - Shared `recipe.show` pipeline for native and custom cards; tracker singleton is stored on `window.__mealzRecipeCardShowTracker__` for dedup across bundles.

## 3.0.0 [03/07/2026]

#### Breaking:
- **All remaining components from ng-miam-sdk have been migrated to mealz-components**, which means all remaining components whose names were starting with "ng-miam-" now start with "mealz-"
- ng-miam-**recipe-tags** has been renamed to mealz-**recipe-tag** after being migrated
- *recipe-card*
  - Recipe card variants were reshaped to align with Mealz's new versioning rules:
    - Unused recipe-card variant **2 was removed**. Former variants **3** and **4** are now variants **2** and **3**, respectively.
    - Variant **2** (formerly variant **3**) now only differs from variant **1** in that **the like button is in the footer** instead of the top-right corner.
    - Variant **3** (formerly variant **4**, history drawer only) **stayed unchanged**.
- *window.mealz*
  - `setDefaultIngredientPicture` and `setDefaultRecipePicture` were removed. Now to override the default pictures urls for ingredients & recipes, clients need to add a CSS override of `img.mealz-default-ingredient-picture` and `img.mealz-default-recipe-picture` respectively
  - The whole `features` namespace was removed (`enableVideoRecipes`, `enableUserPreferences`, `enableTagsOnRecipes`, `enableMealsPlanner`, `enableSeo`, `collapseUnavailableProductsByDefault`) — these were deprecated no-ops; behavior is now always on or configured elsewhere
  - `recipes.hidden`, `recipes.setDifficultyLevels`, `recipes.showConfirmationToaster`, and `recipes.shouldDisplayIngredientPicturesOnRecipeCards` were removed
  - `router.setRecipeInfoLink` and `router.setPromotionsUrl` were removed
  - `supplier.setOrigin` was removed — origin is set via `supplier.setupWithToken`
  - `overrideIcon` and `setDefaultScrollElementGetter` were removed
  - Internal-only methods were removed from the public interface: `pos.getByAddress`, `pos.getByCoordinates`, and `supplier.getAffiliateSuppliers`
  - `window.mealzV10` is no longer assigned — use `window.mealz` directly
  - `window.mealzInternal` was removed entirely — integrators must not rely on any of its namespaces (`basket`, `recipes`, `planner`, `noSupplier`, etc.)

#### Added:
- *core* — New Vite entry `core/core.min.js` eagerly assigns `window.mealz` and runs bootstrap from `#mealz-bootstrap`. Runtime code (services, bootstrap, mealz-hub init) ships in the shared `mealz-core-runtime` chunk imported by core and feature bundles.
- *mealz*:
  - `window.mealz.recipes.openDetails(recipeId, initialTabIndex?, guests?)` opens recipe details by id (tab index defaults to `0`)
- *mealz-bootstrap*:
  - `ensureBootstrapped()` runs from `core.min.js` at module load so SSR pages auto-initialize from the bootstrap script tag; retries briefly (~1s) when `#mealz-bootstrap` is not in the document yet (module scripts loading before HTML injection).
  - `waitForBootstrapReady()` and `getBootstrapSessionId()` gate client fetches (e.g. catalog load-more) until bootstrap completes and expose the session id without duplicating it in every `starting-data` payload.
  - Bootstrap `ssrApiUrl` and `miamApiUrl` are applied at runtime (registry + mealz-hub init); like-button and preferences cache calls use them instead of build-time `MEALZ_SSR_API` / `API_URL`.
- *Context registry (internal)*:
  - `contextRegistryService.noSupplier$` emits when no-supplier mode is resolved after `setupWithToken` or `supplier.load` (replays the last value); components subscribe instead of exposing this on the public `mealz` interface.
  - `supplier.load` clears no-supplier mode and emits `false` on `noSupplier$` before loading the supplier.
- *recipe-card* (variants 1, 2, and 3)
  .redirect-card styles for the generic catalog redirect card (background image, footer title/CTA, mobile breakpoints per variant).
- *window.mealz*:
  - `window.mealz.recipes.openDetails(recipeId, initialTabIndex?, guests?)` opens recipe details by id (tab index defaults to `0`)

#### Internal:
- *mealz-modal*:
  - `createPlannerMealzModal()` factory and `PLANNER_MODAL_ROOT_CLASS` (`mealz-planner__modal-root`) for planner-specific modal styling hooks.

#### Updated:
- *initializer* — Hub init runs before supplier setup; bootstrap logs which required fields are missing when config is incomplete.
- *mealz-hub-init* — Logs `[mealz-hub] Initialized successfully` at info level when init completes.
- *Vite build* — `mealz-hub` and core runtime (`initializer.service`, `mealz-bootstrap`, `context-registry`, `mealz-hub-init`) are forced into shared chunks (`mealz-core-runtime` + `mealz-hub`). Code-split path regex works in Docker (`/app/src/...`) and on the host (`mealz-components/src/...`).
- **All services from `ng-miam-sdk` have been migrated in mealz-components**, which entirely removes the need to keep the webc-miam JS script. This reduces the overall JS weight of the solution and reduces loading times a little when scripts aren't cached.
- *product-card*
  - Added remaining logic that was SDK-only:
    - Added the loader on the counter until the update action is resolved
    - Added the stored actions execution for when a page reload interrupts a basket action
    - Added the default image in case the product image is broken
- *recipe-service*
  - `displayedRecipe$` payloads may include `eventTrace` (e.g. `category_id` from `openRecipeDetails`) so recipe details and footer analytics stay aligned with how details were opened.
- *recipe-card*
  - Parse `categoryId` from `starting-data`; bind top and CTA clicks with stable handler references and `removeEventListener` before `addEventListener` on render so repeated renders do not stack duplicate `openDetails` calls (and duplicate `recipe.display` events).
- *like-button*
  - Forward `categoryId` with the analytics path when updating likes (`recipeLikeService`) so like/unlike events include `category_id` when set.
- *recipe-details*
  - Read `category_id` from `recipeService.displayedRecipe$` (`eventTrace.props`) for the current details session so analytics match how details were opened.
- *details-footer*
  - Add-all-to-basket and `recipe.add` analytics receive `category_id` from the parent details view (same session-scoped trace).
- *recipe-card*
  - Variants have been separated into separate folders, so modifying or deprecating one of them is easier and cannot impact other variants
  - Thus there is now one js and one css built file per variant
- *catalog*
  - All pages override the recipe-card to hide the "Idée repas" tag, no matter the variant
- *catalog-list* / *catalog-load-more*
  - Parse `allRecipes` from list `starting-data` and forward `all_recipes=true` on load-more requests so pagination stays on the all-recipes catalog view.
- *catalog-home*
  - Added spacing for the all-recipes banner slot rendered by SSR.
- *catalog-toolbar*:
  - Reworked toolbar layout with pill buttons and an expandable searchbar that can be focused, cleared and auto-collapses on scroll when empty
  - Added a "Promo'" button in the toolbar on the home page to access discounted recipes
  - Clearing a pre-existing search (my-space pages, catalog drawer) now reloads the page without the search term instead of only clearing the input locally
- *catalog*:
  - Catalog home, category, list, favorites, history, and planner current-menu resolve `sessionId` from bootstrap (`getBootstrapSessionId()`) when it is omitted from `starting-data`.
- *planner modals* (onboarding, welcome, abandon, budget edit, current menu, open catalog):
  - Open `mealz-modal` via `createPlannerMealzModal()` so retailer modal overrides (e.g. custom close icon) do not apply to planner flows.

#### Removed:
- *mealzInternal*
  - **The whole interface was removed** as it was used only for communication between ng-miam-sdk and mealz-components
- *promotions-banner*:
  - Removed the component style

#### Fixed:
- *recipe-pricing*:
  - Fixed price got updated twice when guests were changed in recipe-details
- *preferences*
  - Component didn't import it's own style, which was returned by SSR styles endpoints
- *catalog-load-more*:
  - Awaits `waitForBootstrapReady()` before paginated SSR fetches, so scrolling to load more recipes no longer sends requests without `session-id` / auth headers and triggers a 400 from the SSR API when bootstrap has not finished.
  - Triggers load-more when the bottom of `.mealz-catalog__list` enters the viewport instead of when the window reaches `document.body` height, so embedded catalogs on pages with a large retailer footer no longer require scrolling past unrelated page content.
  - Runs an initial visibility check on mount so the next page loads when the first SSR page does not fill the viewport.
- *no-supplier basket sync*:
  - Subscribes to basket-sync success callbacks before pushing actions to the no-supplier fake cart, so synchronous retailer-cart updates no longer skip follow-up basket API requests or UI completion handlers when removing recipes, resetting baskets, updating basket-preview product quantities, adding all ingredients, or replacing products.
- *basket-utils.service*:
  - `removeRecipe` errors on the first basket-sync `onTimeout` or `onError` instead of waiting indefinitely; Mealz basket removal is skipped so callers can clear loading state when cart sync fails or times out.
- *basket-preview*:
  - Resets recipe removal loading state when basket sync fails or times out during `removeRecipe`.
- *recipe-details*:
  - `updateGuests` and `addToBasket` subscribe to basket-sync callbacks before pushing actions to the no-supplier fake cart, matching the no-supplier basket-sync ordering fix applied elsewhere.
  - When adding the first ingredient to a recipe not yet in the basket fails (retailer sync timeout or error), rolls back the light-mode recipe from the basket instead of leaving a 0 € ghost meal in basket preview.
  - Marks the failed ingredient as `out_of_stock` on the product card instead of silently resetting to `initial` after the rollback refetches ingredients from the API.
  - `addAllIngredientsToBasket` applies the same `out_of_stock` marking and light-mode recipe rollback when add-all actions fail.
- *catalog-list*
  - The load-more listener has been changed from a listener on scroll to an IntersectionObserver, which helps with performances.
- *planner-catalog*
  - Now correctly includes catalog-list stylesheets
- *planner-current-menu*:
  - Removing a recipe from the menu (listing cross or recipe-details “Retirer du menu”) now removes the matching card from the menu list as soon as the API succeeds, instead of leaving stale cards or removing the wrong recipe on the next action.
- *catalog*
  - Apply empty-state flex layout only when blocks are not `.hidden`, fixing the favorites not-logged message appearing for logged-in users on my-space when opening recipe details

#### Internal:
- *mealz-lit-element*:
  - Renamed base class `NoShadowLitElement` to `MealzLitElement` and module `no-shadow-element` to `mealz-lit-element`; all Lit components now extend/import the new name.
  - Bootstrap init removed from `connectedCallback`; owned by `core.min.js`.
- *planner*
  - `services/meals-planner/meals-planner.service` renamed to `services/planner/planner.service`
  - `MealsPlannerService` renamed to `PlannerService`; singleton export `mealsPlannerService` renamed to `plannerService`
- Now uses mealz-hub for all API calls to miam-api (when tested locally, uses ../mealz-hub)
- Added vitest for unit testing
- Services now have full unit test coverage
- *initializer.service*:
  - `bootstrap()` / `bootstrapFromDom()` / `isBootstrapDone()` implement SSR bootstrap initialization; unit tests updated.
  - Skips concurrent `bootstrap()` calls while initialization is in progress so multiple components mounting at once do not re-run setup.
- *persistent-storage*:
  - New `src/utils/persistent-storage/` module for SSR v3: all browser storage keys are versioned under `_mealz/v{N}/…` from v3 onward. Old storage keys (both legacy `_miam/` and `_mealz/v{N}/…` with N < current major version are cleaned upon first major version execution.
  - Added session key `outOfStockEntries` (migrates legacy `_miam/outOfStockEntry`) for failed ingredient adds in recipe details.
- *out-of-stock-product*:
  - New session-backed service stores selected-item ids after a failed add and re-applies `out_of_stock` when ingredients are refetched from the API; clears storage when the entry becomes `active`.
  - Clears stored out-of-stock item ids on basket reset and authless user info refresh, matching ignored-ingredient reset behavior.
- Models folder has been removed as all models are now in mealz-hub - basket-actions were more types than models and have thus been moved to the types folder

## 2.10.2 [01/07/2026]

#### Fixed
- *init-basket-preview-drawer*:
  - SSR basket-preview route: when `#__mealz-basket-preview-config__` is present, opens via `displayBasketDrawer$` with `title`, `showTabSelector` and `selectedTab` from the config dataset and URL (`selected_tab`, `myMeals`); falls back to `mealz.basket.openPreview` otherwise.
- *recipe-details*:
  - Subscribes to `mealzInternal.recipes.recipeDetailsTabIndex$` for the initial tab; when no POS is selected, preparation is shown but the requested tab is restored once POS is available.
- *url-params-handler*:
  - Skips `openDrawerFromUrlParams()` when `#__mealz-basket-preview-config__` is on the page so SSR basket-preview init does not open the drawer twice.

## 2.10.1 [16/06/2026]

#### Added
- *no-supplier-add-to-cart-cta*:
  - Shows a `mealz-ds-loader` on the add-to-basket CTA while the no-supplier add flow runs (supplier selection, store locator, add-all ingredients) until the basket preview opens.

#### Fixed
- *no-supplier-add-to-cart-cta*:
  - Loader stays visible through the supplier-selector → store-locator transition and clears only when the basket preview opens (or when the user cancels before store selection).
  - Ignores transient `allIngredientsToBasketLoading$` false emissions before the basket preview is shown.
- *drawer-view-swapper*:
  - Resets local `displaySupplierSelector$` when the drawer closes and calls `cancelPricingPosSelection()` only when the SDK exposes it, so closing the supplier selector mid-flow no longer blocks reopening it on the next CTA click.

## 2.10.0 [11/06/2026]

#### Added
- *supplier-selector* / *init-supplier-selector-drawer*
  - New init bundle `supplier-selector/init/init-supplier-selector-drawer` for direct SSR or bookmarkable pages: on load, waits for `mealzInternal`, then calls `noSupplier.displaySupplierSelector$.next(true)` to open the drawer.
- *basket-preview*
  - `selected-tab` attribute (maps to `initialSelectedTab`): sets the initial recipes vs products segment;

#### Updated
- *basket-preview*
  - `basketPreviewState$` tab sync and slider changes coerce `activeTabIndex` to `0` or `1`; `analyticsPath` follows the visible tab (recipes vs products), including after `productAdded$`.
- *init-basket-preview-drawer*
  - Passes the initial tab from `selected_tab` (URL or SSR config dataset) or `myMeals=products` into `mealz.basket.openPreview`.

#### Fixed
- *drawer-view-swapper*
  - No-supplier: closing the drawer while the supplier selector is open no longer resets recipe details and basket preview; only the selector is dismissed so the underlying view (recipe details or basket preview) is shown again.
  - `displaySupplierSelector$` is included in the drawer merge subscription so toggling the supplier selector triggers `findView()` like other overlay views.
- *drawer*
  - The drawer no longer removes itself from the DOM on close; lifecycle is handled by `drawer-view-swapper`, avoiding desync between URL params (e.g. `displayRecipe`) and a missing drawer.

## 2.9.2 [02/06/2026]

#### Fixed
- *no-supplier-add-to-cart-cta*:
  - “Voir les ingrédients” calls `mealzInternal.recipes.openDetails` with the CTA `guests` attribute or `mealzInternal.basket.guestsForRecipe(recipeId)` instead of `null`, so recipe details opens with the basket guest count and no longer PATCHes `recipes_guests` to the recipe API default `number-of-guests`.

## 2.9.1 [27/05/2026]

#### Added
- *recipe-details* / *init-recipe-details-drawer*
  - New helper bundle `recipe-details/_helpers/init-recipe-details-drawer` for direct SSR or bookmarkable pages: on load, reads `recipe_id` and `initial_tab_index` from `#__mealz-recipe-details-config__` or the URL, waits for `mealzInternal`, then calls `recipes.openDetails(recipeId, null, initialTabIndex)` so the drawer uses the same `displayedRecipe$` as `MealzDrawerViewSwapper` (avoids a separate Vite entry importing a second `recipeService` singleton).

#### Fixed
- *replace-item*
  - Back navigation clears all replace-item SDK streams (`basketEntryToReplace$`, `replaceProductFromPreviewOpen$`, `additionModalOpen$`, `itemsWithPricesList$`, `fetchingItemLoading$`, `replaceItemLoading$`) and local component state so reopening the drawer does not keep stale products, loading flags, or recipe context.
  - Recreates the debounced search pipeline on close so `distinctUntilChanged` no longer blocks repeating the same query after leaving and reopening the view.
  - After visiting recipe details, opening basket-preview product addition no longer keeps recipe context from stale `displayedRecipe$` replay (`fromRecipeDetails` ingredient banner and analytics path).
- *supplier-selector* - v1 / v2
  - Fixed broken mobile drawer layout for the onboarding steps (minimum card width and step image sizing in the horizontal scroll area)
  - Fixed supplier list on very small screens (≤375px): supplier background images now fill the card width in single-column layout
- *sponsor-block* - v1 / v2
  - Fixed custom element registration: component is now defined as `mealz-sponsor-block` instead of `mealz-sponsor-storytelling`
- *drawer-view-swapper*
  - No-supplier basket preview: when `_miam/noSupplier/posId` is already in localStorage, wait for POS to load from storage instead of opening the supplier selector on page refresh; once POS is available, close the selector so the basket preview is shown.
- *basket-preview*:
  - Recipe removal clears the loader on `removeRecipe` error (basket-sync timeout/failure) without removing the recipe card from the preview list.
- *counter*:
  - In Lit mode, value changes only call `requestUpdate()`; manual `updateDOM()` (`textContent`) runs in SSR `hydrateOnly` mode only, so Lit text bindings are not wiped and decrementing a basket-preview product to 0 no longer throws `Cannot set properties of null (setting 'data')`.
  - Minus-button remove styling uses `value === min` instead of a hardcoded `1` (correct when `min` is 0 in basket preview).

## 2.9.0 [21/05/2026]

#### Updated
- *drawer-view-swapper*
  - No-supplier flow: the supplier-selector drawer title ("Mes courses avec …") is derived from the `origin` in the decoded `supplier-token` (`mealzInternal.supplier.getToken`) instead of a hardcoded Marmiton label; supports **Marmiton**, **CuisineAZ**, and **Cuisine Actuelle** for origins `marmiton`, `cuisineaz`, and `cuisineactuelle`; otherwise uses **SITE DE REÇETTES NON RECONNU**.
  - Opening the basket preview while `noSupplier` is set and POS is absent triggers `mealzInternal.noSupplier.displaySupplierSelector$.next(true)`
- *supplier-selector*
  - Each supplier button card adds a retailer-specific CSS class (`{attributes.name}-card`, lowercased) for per-enseigne styling hooks

#### Fixed
- *store-indicator*
  - When POS is unset, the label reads `Aucun magasin sélectionné` instead of ` - `.
- *supplier-selector*
  - Supplier card image `alt` texts use `supplier.attributes.name` instead of `supplier.name` (matches the `Supplier` model from `getAffiliateSuppliers`)

## 2.8.3 [20/05/2026]

#### Added
- *product-card-planner*
  - Adding `out_of_stock` to `ENABLE_CARD_STATUS` and rendering the out-of-stock overlay, matching the behavior of `product-card`
- *recipe-partner-display-name*
  - `getRecipePartnerDisplayName` and `GENERIC_RECIPE_PARTNER_LABEL_ERROR` centralize mapping from token `origin` to display names
- *no-supplier-add-to-cart*
  - Added an attribute and a class `in-basket`
  - Added a customEvent `inBasketStatus` that fires when the recipe is added to/removed from the basket

#### Updated
- *NoShadowLitElement* (`no-shadow-element`)
  - Stylesheets injected in `document.head` are no longer removed when the last instance disconnects (links injected into a `ShadowRoot` are still removed when unused). Avoids FOUC and repeated CSS requests when light-DOM subtrees are recreated—for example switching between recipes and products in *basket-preview*
- *basket-preview*
  - Recipes vs products tab content is wrapped with Lit `cache()` so both subtrees stay in memory when switching tabs, keeping existing DOM (including recipe and product images) instead of tearing it down on every tab change
- *catalog-history*
  - Component now loads drawer-view-swapper if called
- *drawer-view-swapper*
  - No-supplier flow: the supplier-selector drawer title ("Mes courses avec …") is derived from the `origin` in the decoded `supplier-token` (`mealzInternal.supplier.getToken`) instead of a hardcoded Marmiton label; supports **Marmiton**, **CuisineAZ**, and **Cuisine Actuelle** for origins `marmiton`, `cuisineaz`, and `cuisineactuelle`; otherwise uses **SITE DE REÇETTES NON RECONNU**
- *mealz-no-supplier-add-to-cart-cta*
  - Keeps the guest count used for `addRecipeToBasketFromIdAndOpenPreview` in sync with `GuestObserverService` (Mealz steppers and other components that call `updateGuests`)
  - Observes the `guests` HTML attribute so host pages can update it at runtime (e.g. `setAttribute('guests', String(n))`)

#### Fixed
- *store-locator-drawer*
  - When the user selects a POS id that already matches the SDK’s current POS but `_miam/noSupplier/posId` was not stored yet (typical first no-supplier confirmation), still writes `_miam/noSupplier/posId`, calls `mealzInternal.storeLocator.newStoreSelected()`, then closes — so deferred basket actions (e.g. add-recipe-after-locator) run on the first confirmation instead of only after repeating the flow

## 2.8.2 [05/05/2026]

#### Fixed
- *store-locator*, *supplier-selector*
  - Resolve the injected stylesheet URL with `getBaseURL()`

## 2.8.1 [20/04/2026]

#### Updated
- *recipe-card*
  - Parse `categoryId` from `starting-data`; bind top and CTA clicks with stable handler references and `removeEventListener` before `addEventListener` on render so repeated renders do not stack duplicate `openDetails` calls (and duplicate `recipe.display` events).
- *like-button*
  - Forward `categoryId` with the analytics path to `mealzInternal.recipes.updateRecipeLike`.
- *recipe-details*
  - Read `category_id` from the SDK `displayedRecipe$` payload (`eventTrace.props`) for the current details session so analytics reflect how details were opened, not a global map keyed by recipe id.
- *details-footer*
  - Add-all-to-basket and `recipe.add` analytics receive `category_id` from the parent details view (same session-scoped trace).
- *mealz-planner-menu-option*
  - When SSR `starting-data` includes `plannerEntryVariant` (`1`|`2`|`3`), the `planner.mode.select` analytics payload includes `variant` with that value (planner-entry AB layouts).

#### Fixed
- *planner-entry*
  - Narrow mobile layout (`max-width: 607px`): set `position: absolute` on `.mealz-planner-entry__hero-badge` so the negative `top` offset positions the badge as intended.

## 2.8.0 [02/04/2026]

#### Updated
- *planner-entry*
  - Added new responsive hero variants for planner entry with dedicated CTA, recipe avatars, and updated background/decorative assets.
- *guest-icon*:
  - Changed every icon to a generic one for consistency

#### Fixed
- *planner-menu-option*
  - When planner-entry starts without a `menuId`, the component now prepares the planner menu before redirecting and preserves the selected guests count.
- *basket-preview*
  - Recipe rows: pluralize the per-recipe product count label correctly ("1 produit" vs "N produits").
  - Resolve `noSupplier` from the SDK resolved state instead of polling the supplier token, so both supplier and no-supplier flows initialize correctly.

## 2.7.1 [26/03/2026]

#### Fixed
- *mealz-modal*
  - Added `createMealzModal()` to create modal instances via `document.createElement('mealz-modal')` instead of `new MealzModal()`, preventing "Illegal constructor" when several script bundles register the same tag with different class references.
- *planner modals* (onboarding, welcome, abandon, budget edit, current menu, open catalog)
  - All planner flows that open `mealz-modal` now use `createMealzModal()`.

## 2.7.0 [19/03/2026]

#### Added
- *basket-preview*
  - Added `hide-tab-selector` attribute to hide the recipes/products tab selector when used in standalone drawer.
- *drawer-view-swapper*
  - Added `displayBasketDrawer$` BehaviorSubject to open basket preview as standalone drawer with configurable title and showTabSelector.
- *init-basket-preview-drawer*
  - New helper script for SSR-injected pages: opens basket preview in drawer on load, reads title and show_tab_selector from URL params.

#### Updated
- *drawer-view-swapper*
  - Basket preview now supports both inline (isBasketPreviewVisible) and standalone (isBasketDrawerVisible) display modes.
  - Header title reflects basket drawer title when opened standalone.
- *planner-recipe-suggestion*
  - Refactor layout and height properties for improved responsiveness: changed display from block to flex and adjusted height to 75% for better alignment; removed fixed min-height and top positioning for a more fluid design; updated padding for mobile view to enhance spacing
- *planner-recipe-list*
  - Placeholder logic: always show at least 6 recipe card slots (fill with placeholders when fewer than 6 recipes); when 6+ recipes, add a trailing placeholder so users know they can add more
- *menu-title*
  - Now the menu title is always "Mon menu" and does not depend on the menu origin anymore. We also removed the date of creation of the menu
- *mealz-planner-menu-option*
  - On navigation, we add a loader

#### Fixed
- *basket-transfert-modal*
  - Fix define component was `mealz-basket-preview` instead `mealz-basket-transfert-modal`
- *open-onboarding-modal*
  - Planner onboarding can now be reopened via the help (?) button even after choosing to skip onboarding

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
  Can now add recipe to menu without having to be authenticated. authentication is required when trying to push menu to basket
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

## 1.3.15 - [04/12/2025]

#### Fixed
- *recipe-priging*
  - Fix hidden display overrided by retailer

## 1.3.14 - [03/12/2025]

#### Updated
- *recipe-card-cta*, *recipe-pricing*, *like-button*
  - Update these components to be called individually in dedicated routes
  
## 1.3.11 [06/08/2025]

#### Fixed:
- *recipe-pricing*
  - Reduce flickering price when re-render component
- *recipe-card*
  - Fix multiple event on recipe.show when re-render Component

## 1.3.10 [04/08/2025]

#### Fixed:
- *recipe-pricing*:
  - Fix pricing flickering with loading

## 1.3.9 [04/08/2025]

#### Fixed:
- *recipe-pricing*:
  - Show pricing correctly

## 1.3.8 [31/07/2025]

#### Updated:
- *like-button*:
  - Added like data fetching from client-side
  - Removed async calls, simplified subscription management
- *recipe-card*:
  - Added client-side guests retrieval from localStorage preferences
  - Optimized guests handling with fallback to default value
- *recipe-pricing*:
  - Refactored pricing logic to fetch data client-side
  - Simplified basket data subscription and price recalculation

## 1.3.7 [24/06/2025]

### Fixed:
- *recipe-card-cta*
  - Fix displaying CTA when shouldRemovePersonalization is true

## 1.3.6 [23/06/2025]

### Updated:
- *recipe-pricing*:
  - Reorder some logic as some variables were not set properly
- *recipe-card*:
  - Now listens on recipe  to fetch the updated number of guests

#### Deleted:
- *pricebook*
  - Remove deprecated pricebook parameters

## 1.3.5 [16/06/2025]

#### Fixed:
- *catalog-favorites*
  - Fixed 'pageView' event not sended if user has no favorites

## 1.3.4 [10/06/2025]

#### Fixed:
- *recipe-pricing*:
  - Revert previous changes

## 1.3.3 [10/06/2025]

#### Fixed:
- *recipe-pricing*:
  - If render is called and price is defined, update the view

## 1.3.2 [06/06/2025]

#### Updated:
- *recipe-card-cta*:
  - Style for new hidden class & remove hidden class after the basket data has been fetched & the CTA can be displayed when personalization is disabled
- *like-button*:
  - When personalization is disabled, fetch the like & update the DOM manually

#### Fixed:
- *catalog-history*:
  - Empty view was inconsistent with the ones from the other pages
  - Added missing pageview event

## 1.3.1 [23/05/2025]

#### Fixed:
- *history-order-expanded*:
  - card width was inconsistent

## 1.3.0 [23/05/2025]

#### Added:
- *basket-preview*:
  - Added component with interactions
  - Added component noSupplier mode
  - Added products view which can be hidden through supplierToken
  - product views has number of recipes badge and clicking on it shows a modal with the recipe name list
- *counter*:
  - Created component
- *basket-preview-product*:
  - Created component
- *mealz-modal*:
  - Created component
- *recipe-details*
  - Added component
- *skeleton*:
  - Added CSS class mealz-skeleton-loader that can be imported when needed
- *store-locator-drawer*
  - Added component with interactions
- *history-order-expanded*:
  - Added new component for the new history display in list mode

#### Updated:
- *CSS*:
  - Replaced every color fallbacks occurrence with new colors from miam-ds
- *drawer*:
  - Component is now called through HTML tags and content is now passed through HTML slots
- *no-shadow-element*:
  - updated styleURL to be an array of URLs or a single URL and update boilerplate to handle it
- *config*:
  - Added styles folder to the build input
- *basket-preview-product*:
  - Replace basketEntryId property with basketEntry preventing stale data 
- *slider-tabs*:
  - Slider now updates visually when selectedTabIndex is changed from parent

#### Internal:
- *history-drawer*:
  - The component now uses `drawer-view-swapper`
- *recipe-addon*:
  - Added component with interactions
- *store-indicator*:
    - Added component with interactions
- *slider-tabs*:
    - Added component with inputs / outputs
- *sponsor-block*:
  - Added component
- *utils*:
    - Add round, capitalize and stopPropagation functions
- *models*:
    - Add BasketEntry model
- *product-addition*:
  - Added component with interactions
- *no-shadow-element*:
  - Add `addStyles` and `removeStyles` boilerplate
- *price*:
  - Created component
- *lang-to-currency*:
  - Created a map to assign a currency to a language
- *miam-ds*
  - Turned miam colors into design system colors
- *types*:
  - Add Recipe definition
  - Add Ingredient definition
- *vite.config*
  - Exclude files from build to minimize calls

#### Fixed:
- *history-order*:
  - Fixed orders were overlapping
  - Fixed gap between "Ordered on" and the date

## 1.2.8 [25/04/2025]

#### Fixed:
- *my-meals-button*:
  - The arrow could come out of the button of mobile resolutions
- Removed remaning occurences of miam-ds links as to not have conflicts with the version served by SSR-API

## 1.2.7 [18/04/2025]

#### Fixed:
- *catalog-toolbar*:
  - Remove "navigate back" on back button as already set in HTML and was triggering navigate back twice  

## 1.2.6 [18/04/2025]

#### Updated:
- *catalog-favorites*:
  - Now if unliking a recipe on the page or on the recipe-details view, the recipe will be removed from the list 

#### Fixed:
- *load-more*:
  - Fixed issue where load-more was based on the user scroll position from the bottom of the window and not from the list element

## 1.2.5 [28/03/2025]

#### Fixed:
- *catalog-favorites*:
  - Fixed init state was incorrectly set, now the hidden state of the elements are set on prerender and only updated on render
  - Removed unused loader on start

## 1.2.4 [21/03/2025]

#### Fixed:
- Recipe-cards CSS was lacking the rules to remove margins on p tags that are in the catalog CSS
- *catalog-load-more*
  - The auto-load more recipes on scroll was triggered even when no more recipes were available 
- *catalog-history*:
  - The history-order cards now use a CSS variable for their width that uses the same base value as the recipe-cards by default
- *catalog-toolbar*:
  - Back button now does a native back action instead of redirecting to the home page
- *recipe-pricing*:
  - Prevent price displaying `NaN` When price starting data is null

## 1.2.3 [31/01/2025]

#### Internal
- *catalog-category*
  - Added pageview event
- *catalog-favorites*
  - Added pageview event
- *catalog-home*
  - Added pageview event
  - Added category.show event, triggered when category is 80% in viewport for 1s
- *catalog-toolbar*
  - Added search event

## 1.2.2 [10/01/2025]

#### Added:
- *catalog*:
  - Added category.display event on click on "See all" / the title of a category

#### Updated:
- *headers*:
  - requests for `load-more` and `drawer` now uses authlessId if needed in authorization header

#### Fixed:
- *catalog-load-more*
  - Fixed the auto-load more recipes on scroll for unconnected users
- *toolbar*:
  - Added CSS class for toolbar to do full width on Firefox
- *store-locator*:
  - In getByCoordinates, lat and lng parameters were inverted

#### Internal:
- Synchronize the session id with SDK during initialization for the following components:
  - *catalog-category*
  - *catalog-favorites*
  - *catalog-history*
  - *catalog-home*
  - *catalog-list*
  - *recipe-card*

## 1.2.1 [20/12/2024]

#### Added:
- *catalog*
    - Added support for store-locator
- *recipe-promotion*
  - Added css for component
- *promotions-banner*
  - Added css for component, is hidden by default and must be displayed manually
- *catalog-history*
  - Added component
  - Open drawer of the clicked order
  - Added "no history" view
- *catalog-tabs*
  - Added component
- *drawer*
  - Added component
- *history-order*
  - Added component
- *recipe-card*
  - Added style for a new variant

#### Updated:
- *recipe-card*
  - Updated some css to match mock ups
- *viewport-listener*:
  - Handle unsubscription to prevent memory leaks

#### Fixed:
- *catalog-favorites*
  - Fixed an infinite loader issue when the user hadn't marked any recipes as favorites

## 1.2.0 [13/12/2024]

#### Updated:
- Removed the `starting-data` attribute from HTML after it has been successfully read for the following components:
  - *catalog-category*
  - *catalog-favorites*
  - *catalog-home*
  - *catalog-list*
  - *catalog-toolbar*
  - *recipe-card-cta*
  - *recipe-pricing*

#### Fixed:
- Fixed margins & selectors after semantic tags were added in SSR-API
- *catalog-load-more*
  - Catch failed requests and log to console instead of displaying in HTML
  
#### Internal
- *recipe-card*
  - Handle `path` and `categoryId` in starting data for analytics
  - New recipe.show event sent when recipe-card is 80% in viewport for 1s
- *catalog-toolbar*
  - Handle `path` in starting data for analytics
- *my-meals-button*
  - Handle starting data with `path` for analytics
- *viewport-listener*:
  - Create class

## 1.1.2 [29/11/2024]

#### Fixed:
- *catalog*
  - Fix only the home page had a padding at the bottom

## 1.1.1 [25/11/2024]

#### Fixed:
- *catalog-favorites*
  - Fix infinite loader

## 1.1.0 [22/11/2024]

#### Added:
- *catalog-favorites*
  - Added auto-load more recipes on scroll
- *catalog-list*
  - Added auto-load more recipes on scroll
- *catalog-toolbar*
  - Added preferences loader

#### Updated:
- *catalog-toolbar*
  - Reset stickyObserver when new value is given using mealz.setStickyHeaderHeight(...)

#### Internal:
- *catalog-load-more*
  - Added component to group load more functionality

## 1.0.2 [15/11/2024]

#### Added:
- *catalog*
 - Added support for preferences

#### Updated:
- *catalog-toolbar*
  - Removed unused filters

#### Fixed
- *catalog-home*:
  - Added back arrow to "See All" button
  - Fixed gap issue in category header for smaller screens
- *like-button*:
  - Corrected icon color on hover
- *recipe-card*
  - Fixed recipe-card width for smaller screens
- *recipe-pricing*:
  - Encapsulated hidden and active classes

## 1.0.1 [31/10/2024]

merged 0.6.1 into 1.0. See 0.6.1 for changes

## 1.0.0 [24/10/2024]

#### Breaking changes:
- *window.miam*:
  - Renamed to window.mealz

## 0.7.0 [10/01/2025]

#### Added:
- *store-locator*:
  - Added 3 new events: filterChange with supplierName as detail, mapSelected, listSelected

## 0.6.1 [31/10/2024]

0.6.0 has been unpublished an thus could not be republished.

## 0.6.0 [31/10/2024]

#### Removed:
-*store-locator*:
  - Removed radius selector and changed default radius to 50km
  - Removed radiusOption attribute

#### Updated:
-*store-locator*:
  - Now opens the list of stores directly in webmobile after searching by address or geolocation
  - Now shows the home delivery stores in first position

## 0.6.0 [31/10/2024]

#### Updated:
- *catalog*:
  - created catalog.css for shared styles between catalog components

#### Fixed:
- *like-button*:
  - State of button was not updated properly

## 0.5.0 [03/10/2024]

#### Added:
- *store-locator*:
  - Added loaders on the POS select buttons after selecting a POS
  - Added searchChange output
- *catalog-category*
  - Added component
- *catalog-favorites*
  - Added component
- *catalog-breadcrumbs*
  - Added component
- *catalog-toolbar*
  - Added component

#### Fixed:
- *like-button*
  - now listens to recipe-like changes

## 0.4.0 [20/09/2024]

#### Added:
- *catalog-category-home*:
  - Added component with its hydration and lifecycle 
- *recipe-pricing*
  - Added fetch on scroll

#### Fixed:
- *recipe-card-cta*
  - Fixed state didn't update correctly

## 0.3.0 [20/09/2024]

**All components except store-locator are now the hydration & lifecycle of the corresponding HTML returned by the routes from Mealz SSR API**
**The components lifecycle use webc-miam@9.0 via the interface window.mealzInternal**

#### Added:
- *store-locator*:
  - Added supplierName property to posIdChange event
- *recipe-card*:
  - Added component with its hydration and lifecycle
- *recipe-card-cta*:
  - Added component with its hydration and lifecycle
- *recipe-pricing*:
  - Added component with its hydration and lifecycle
- *like-button*:
  - Added component with its hydration and lifecycle


## 0.3.0-alpha.1 - [17/07/2024]
#### Fixed:
- put "vite-plugin-static-copy" package at right place

#### Updated:
- gitlab-ci now build like-button and recipe-card

## 0.3.0-alpha.0 - [17/07/2024]

#### Added:
- *like-button*:
  - component first commit
- *recipe-card*:
  - component first commit

## 0.2.1 - [16/07/2024]

#### Fixed:
- *store-locator*:
  - Fixed nested CSS doesn't work for tag names

## 0.2.0 - [16/07/2024]

#### Added:
- *store-locator*:
  - When loading POS, displays a loader in the pos list
  - No POS found indicator
  - New radius selector for POS search
  - New supplier selector to filter results
  - Can now submit search using keyboard (Android / iOS / Web)

#### Fixed:
- *store-locator*:
  - Updated the search radius default value from 10 km to 25 km.
  - geolocationCoordinates input type changed to GeolocationPosition (was a custom Coordinates interface before)
  - Map initialization now waits for Leaflet to be fully loaded
  - Adjusted CSS for store-locator mobile view

## 0.1.2

#### Added
- *store-locator*:
  - Geolocation

## 0.1.1

#### Added
- *store-locator*:
  - Added some css classes to scope on elements
  - Added miam-ds to component

## 0.1.0

#### Added
- *store-locator* component

#### Internal
- Added a demo page to display the store-locator

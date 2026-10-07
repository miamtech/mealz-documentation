---
sidebar_position: 2
---

# Migrating from V1 to V3

This guide lists every breaking change between V1 and V3 and what to change on your side. Work through it in order.

Shared routes keep the same path. Only the `/v1/` prefix becomes `/v3/`, except where a section below changes the path or a parameter.

:::tip
When you are done, update your `API_VERSION` constant from `v1` to `v3` in all SSR API calls.
:::

:::info
Already calling `/v2/`? Follow [Migrating from V2 to V3](./migration-v2-v3). The variant numbers on that page are not the V1 numbers.
:::

## 1. Clean the deprecated setup steps

In V1, you had to call several `window.mealz` methods on every page load (`setupWithToken`, `pos.load`, user login, and so on). In V3, anything you already pass on the SSR request (HTTP headers and query parameters) is enough: **Mealz initializes itself from the SSR response and you no longer need those calls at startup**.

**Remove these from your init code:**

```js
window.mealz.supplier.setupWithToken(yourToken);
window.mealz.pos.load(storeId);
window.mealz.user.loadWithExternalId(userId, forbidProfiling);
window.mealz.user.loadWithAuthlessId(authlessId);
```

**You still need to wire client-side logic, like basket sync and hooks:**

```js
window.mealz.basketSync.definePushProductsToCart(yourCallback);
window.mealz.hook.setHookCallback(yourCallback);
```

:::warning Changes without a page reload
Most sites reload or navigate when the user picks another store or logs in/out. If yours does, pass the updated `store_id`, `Authorization`, or `Authless-id` on your next SSR requests. No client calls needed.

You only need client-side updates when the page **stays open**:

- **Store change:** `window.mealz.pos.load(storeId)`. See [window.mealz.pos](../customization/window-mealz#windowmealzpos).
- **Login:** `window.mealz.user.loadWithExternalId(userId, forbidProfiling).subscribe()`
- **Logout:** `window.mealz.user.reset()`, then `window.mealz.user.loadWithAuthlessId(authlessId)` if the user continues as a guest. See [Handle user login and logout](../set-up-and-usage/login-and-logout).
:::

## 2. Remove leftover SDK (`webc-miam`) scripts

V1 SSR responses include a `webc-miam` script. V3 responses do not. The runtime is injected from the SSR response only.

Search your pages for any leftover tag that still loads the SDK. If one remains, it defines `window.mealz` first and the V3 runtime will not replace it. Remove lines like:

```html
<script src="https://cdn.jsdelivr.net/npm/webc-miam@9.x.x/webc-miam.min.js"></script>
```

A page with no visible Mealz component that still needs `window.mealz` (for example basket sync on the cart) calls:

```
GET https://MEALZ_SSR_API_URL/v3/core
```

- Parameters :

  - `store_id: string`:
  **_(Recommended)_** Pass the user's current store ID so Mealz is initialized for that point of sale. See [Loading `window.mealz` without a component](../customization/window-mealz#need-to-use-windowmealz-without-a-mealz-component).

## 3. Updated endpoints

The favorites page and the history page are tabs of My Space. See [My Space](../integration-reference/recipe-catalog#my-space-page).

```
GET /v1/catalog/favorites
GET /v1/catalog/my-space/history
```

becomes:

```
GET /v3/catalog/my-space?tab=favorites
GET /v3/catalog/my-space?tab=history
```

`store_id`, `display_infos`, `recipes_batch_size`, and `search` still apply. On the history tab, `history_style` is `grid` or `list`. Rename `display_recipe_variant` as described in [Updated recipe-card variants](#6-updated-recipe-card-variants).

## 4. Renamed components

Update any CSS or JavaScript that still targets the V1 name.

| V1 element | In V3 |
|---|---|
| `mealz-catalog-breadcrumb` | `mealz-breadcrumb`. Stylesheet: `breadcrumb/breadcrumb.css` (was `catalog/catalog-breadcrumb/catalog-breadcrumb.css`). |
| `mealz-promotions-banner` | Removed. Promotions are reached from the promotion CTA in the catalog toolbar. |

## 5. Clean manually inserted `webc-miam` elements

V3 does not ship the `webc-miam-*` selectors. Delete any you pasted into your pages. Where a feature moved to SSR, call the route and inject the HTML. Do not paste a `mealz-*` tag by hand: the SSR response includes the element.

| You embedded | What to do |
|---|---|
| `webc-miam-recipe-details`, `webc-miam-recipe-details-infos`, `webc-miam-recipe-details-ingredients`, `webc-miam-recipe-details-steps`, `webc-miam-recipe-modal`, `webc-miam-recipe-addon` | Delete the tags. The recipe card opens details. From your own code, call `recipes.openDetails`. See [Updated `window.mealz` methods](#8-updated-windowmealz-methods). |
| `webc-miam-meals-planner`, `webc-miam-meals-planner-basket-confirmation`, `webc-miam-meals-planner-basket-preview`, `webc-miam-meals-planner-catalog`, `webc-miam-meals-planner-form`, `webc-miam-meals-planner-result` | Use the SSR planner routes. See [Meals planner](../integration-reference/meals-planner). |
| `webc-miam-store-locator`, `webc-miam-store-locator-link` | Delete the tags. Pass `store_id` on your SSR requests. |
| `webc-miam-products-picker` | `GET /v3/recipe-to-basket` (`recipe_id` required; optional `store_id`, `serves`, `planner`, `display_infos`, `hide`). |
| `webc-miam-basket-preview-block`, `webc-miam-basket-preview-disabled`, `webc-miam-basket-preview-line` | `GET /v3/catalog/my-space/basket-preview`. Pass `store_id` so the preview is initialized for that store. |
| `webc-miam-sponsor-*` | Delete the tags. Sponsor content is `mealz-sponsor-block` inside SSR HTML. |
| `webc-miam-recipe-tags` | Call `GET /v3/recipe-tags` with your product IDs, then inject each returned `html` next to the matching cart line. The element is `mealz-recipe-tag`. See [Recipe tags](../integration-reference/recipe-tags). |

These elements have no replacement. Delete them:

`webc-miam-addon-link`, `webc-miam-catalog-article-card`, `webc-miam-guests-dropdown`, `webc-miam-loader`, `webc-miam-no-supplier-onboarding`, `webc-miam-progress-tracker`, `webc-miam-recipes-history`, `webc-miam-tabs`, `webc-miam-time-picker`, `webc-miam-toaster`, `webc-miam-toaster-stack`, `webc-miam-tooltipable-content`, `webc-miam-warning-store-locator`.

These are drawn by SSR HTML when the feature needs them. Delete your copy:

`webc-miam-replace-item`, `webc-miam-no-pos-selected`, `webc-miam-last-order-modal`, `webc-miam-basket-transfer-modal`, `webc-miam-slider-tabs`.

V1 SSR HTML already used `mealz-*` for the catalog and the recipe card (`mealz-recipe-card`, `mealz-recipe-card-cta`, `mealz-recipe-pricing`, `mealz-recipe-catalog`, and the catalog list, category, header, and toolbar). If your CSS still targets the `webc-miam-` name for one of those, point it at `mealz-`.

## 6. Updated recipe-card variants

On `/recipe-card` endpoints, `display_variant` becomes `variant` (a query parameter). On pages that display recipe cards as sub-components (catalog, My Space, planner), `display_recipe_variant` becomes `recipe_card_variant`.

```
GET /v1/recipe-card?display_variant=1
GET /v1/recipe-card?display_variant=3
POST /v1/recipe-card/multiple?display_variant=3
GET /v1/catalog?display_recipe_variant=3
```

becomes:

```
GET /v3/recipe-card?variant=1
GET /v3/recipe-card?variant=2
POST /v3/recipe-card/multiple?variant=2
GET /v3/catalog?recipe_card_variant=2
```

| V1 value | V3 value | Notes |
|---|---|---|
| `1` | `1` | Base style. No badge. Like button in the top-right. |
| `2` | _(removed)_ | Badge, like button in the top-right. This layout no longer exists. Use `1` or `2` (the old footer like button). |
| `3` | `2` | Like button in the footer. |

Any value other than `1`, `2`, or `3` returns 400. In V1, any value other than `2` or `3` was treated as variant `1`. A value that used to be ignored now fails the request.

## 7. Pass the variant to `GET /styles`

In V1, one stylesheet covered every recipe-card variant. In V3, each variant has its own stylesheet, so the CSS payload stays smaller. When the HTML request uses a non-default variant, pass the same number on the matching `GET /styles` call (`variant` or `recipe_card_variant`). Otherwise the stylesheet stays on the default (recipe card `1`).

On `/styles/recipe-card` and `/styles/planner/planner-entry` the parameter name is `variant`. On catalog, My Space, planner pages that embed cards, and their `/styles/...` routes, the name is `recipe_card_variant`.

The same applies to the planner entry, if you use a non-default planner-entry variant on the catalog route. See [Planner entry variants](../integration-reference/recipe-catalog#planner-entry-variants). The planner-entry default is `3`.

## 8. Updated `window.mealz` methods

Theis method still exists. The arguments you pass have changed.

### `recipes.openDetails`

`guests` and `initialTabIndex` swap places. `analyticsPath`, `plannerOrCategoryId`, and `categoryId` are gone.

```js
// V1
window.mealz.recipes.openDetails(recipeId, guests, initialTabIndex, analyticsPath, plannerOrCategoryId, categoryId);

// V3
window.mealz.recipes.openDetails(recipeId, initialTabIndex, guests);
```

`initialTabIndex` defaults to `0`. `guests` is optional. See [window.mealz.recipes](../customization/window-mealz#windowmealzrecipes).

## 9. Removed `window.mealz` methods

The tables below list removed methods and what to do instead. Where there is no V3 equivalent, the API was **deprecated**. If you still call it, remove the call. There is nothing to wire in its place.

### `window.mealz.features.*`

The whole namespace was removed. In V1, these methods turned features on or off from JavaScript (`enableVideoRecipes`, `enableUserPreferences`, `enableTagsOnRecipes`, `collapseUnavailableProductsByDefault`, and so on). In V3, those behaviors are always available in the library. Per-client activation is handled through **feature flags** in our internal configuration instead. See [Versioning process](../about-mealz/versioning-process).

Two methods have no flag and no route:

| Method | What to do |
|---|---|
| `features.enableArticlesInCatalog()` | Remove the call. Article cards in the catalog are gone. |
| `features.enableGuestsInputOnMyMeals()` | Remove the call. |

If you called `enableMealsPlanner(url)`, use the SSR planner routes instead. See [Meals planner](../integration-reference/meals-planner).

### `window.mealz.recipes.*`

| Method | What to do |
|---|---|
| `recipes.hidden` | Remove the call (deprecated, no V3 equivalent). |
| `recipes.shouldDisplayIngredientPicturesOnRecipeCards(bool)` | Remove the call. Ingredient pictures are not shown on recipe cards in V3. |
| `recipes.setDefaultIngredientPicture(url)` | Remove the call. Override the default via CSS: `img.mealz-default-ingredient-picture { content: url('...'); }` |
| `recipes.setDefaultRecipePicture(url)` | Remove the call. Override the default via CSS: `img.mealz-default-recipe-picture { content: url('...'); }` |
| `recipes.setDifficultyLevels(levels)` | Remove the call (deprecated, no V3 equivalent). |
| `recipes.showConfirmationToaster()` | Remove the call (deprecated, no V3 equivalent). |

### `window.mealz.router.*`

| Method | What to do |
|---|---|
| `router.setRecipeInfoLink(url)` | Remove the call (deprecated, no V3 equivalent). |
| `router.setPromotionsUrl(url)` | Remove the call. Promotions are reached from the promotion CTA in the catalog toolbar. |

### Other removed methods

| Method | What to do |
|---|---|
| `supplier.setOrigin(origin)` | Remove the call. Origin now comes from the `Supplier-token` header. |
| `basket.updatePricebook(pricebookName)` | Remove the call (deprecated, no V3 equivalent). |
| `setDefaultScrollElementGetter(callback)` | Remove the call (deprecated, no V3 equivalent). |
| `pos.getByAddress(address, radius)` | Remove the call (was internal, not part of the public integration API). |
| `pos.getByCoordinates(lng, lat, radius)` | Remove the call (was internal, not part of the public integration API). |
| `pos.openNoSupplierOnboarding()` | Remove the call. |
| `supplier.getAffiliateSuppliers()` | Remove the call (was internal, not part of the public integration API). |
| `user.updateForbidProfiling(forbidProfiling, userId, isAuthless)` | Remove the call. The profiling choice already sent on the SSR request is applied on each page load. If consent changes without a navigation, the current view can keep the previous choice until the next load. Call `loadWithExternalId` or `loadWithAuthlessId` only when that first view must follow the new choice immediately. |
| `overrideIcon(icon, url)` | Remove the call. |

Also remove any references to `window.mealzInternal`. This object no longer exists.

## 10. Removed `webc-miam` stylesheet

If you parse the `links` array from `GET /styles`, V3 responses no longer include a `webc-miam` CSS entry. Update any code that assumed it was always present.

## Verification checklist

Before going live:

- [ ] `API_VERSION` is `v3` on every SSR call
- [ ] Search for `display_variant` (should be zero occurrences)
- [ ] Search for `display_recipe_variant` (should be zero occurrences)
- [ ] Search for `webc-miam` (should be zero occurrences)
- [ ] Search for `catalog/favorites` used as a page URL (load-more may remain; the favorites page is a My Space tab)
- [ ] Search for `mealz-catalog-breadcrumb` and `mealz-promotions-banner` (should be zero occurrences)
- [ ] Search for `updateForbidProfiling`, `overrideIcon`, `setOrigin`, `openNoSupplierOnboarding`, `enableArticlesInCatalog`, `updatePricebook` (should be zero occurrences)
- [ ] Search for `window.mealzInternal` (should be zero occurrences)
- [ ] `recipes.openDetails`: second argument is `initialTabIndex`, third is `guests`
- [ ] `setupWithToken` appears only where the page stays open (store change, login, logout)
- [ ] Verify recipe cards render and the details drawer opens
- [ ] Verify basket sync still works end-to-end

---
sidebar_position: 1
---

# Migrating from V2 to V3

This guide lists every breaking change in V3 and what to change on your side. Work through it in order.

:::tip
When you are done, update your `API_VERSION` constant from `v2` to `v3` in all SSR API calls.
:::

## 1. Setup on page load

In V2, you had to call several `window.mealz` methods on every page load (`setupWithToken`, `pos.load`, user login, and so on). From V3 onward, anything you already pass on the SSR request (HTTP headers and query parameters) is enough: **Mealz initializes itself from the SSR response and you no longer need those calls at startup**.

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

In V3, SSR responses **no longer serve `webc-miam`**. The runtime is injected from the SSR response only.

Search your pages for any leftover tag that still loads the SDK. If one remains, it will try to set up `window.mealz` again on top of what SSR already did, which can break the page. Remove lines like:

```html
<script src="https://cdn.jsdelivr.net/npm/webc-miam@9.x.x/webc-miam.min.js"></script>
```

`GET /v2/mealz-window-bootstrap` was renamed to `GET /v3/core` in V3. If you used `GET /v2/mealz-window-bootstrap` to load `window.mealz` on a page with no visible component, switch to:

```
GET https://MEALZ_SSR_API_URL/v3/core
```

- Parameters :

  - `store_id: string`:
  **_(Recommended)_** Pass the user's current store ID so Mealz is initialized for that point of sale. See [Loading `window.mealz` without a component](../customization/window-mealz#need-to-use-windowmealz-without-a-mealz-component).

## 3. Recipe card variant parameter rename

On `/recipe-card` endpoints, rename `display_variant` to `variant`:

```
GET /v2/recipe-card?display_variant=3
POST /v2/recipe-card/multiple?display_variant=3
```

becomes:

```
GET /v3/recipe-card?variant=3
POST /v3/recipe-card/multiple?variant=3
```

On pages displaying recipe-cards as sub-components, like catalog-related endpoints or the Mealz planner, rename `display_recipe_variant` to `recipe_card_variant`:

```
GET /v2/catalog?display_recipe_variant=2
```

becomes:

```
GET /v3/catalog?recipe_card_variant=2
```

## 4. Recipe card variant renumbering

Variant 2 was unused and has been removed. The remaining variants were renumbered to 1, 2, and 3 so there is no gap. If you were using variants 1, 3, or 4, update the value you pass - the card layouts are unchanged, only the numbers differ:

| V2 value | V3 value | Notes |
|---|---|---|
| `1` | `1` | Base style |
| `2` | _(removed)_ | This variant no longer exists. |
| `3` | `2` | Like button in footer instead of top-right |
| `4` | `3` | History drawer card |

Any value other than `1`, `2`, or `3` returns 400. In V2, an unknown value was treated as variant `1`. If you still send `4` after the rename, or a value that used to be ignored, the request will fail.

## 5. Pass the variant to `GET /styles`

In V2, one stylesheet covered every variant. In V3, each variant has its own stylesheet, so the CSS payload stays smaller. When the HTML request uses a non-default variant, update the associated call to `GET /styles` to pass the same variant query param (`variant` or `recipe_card_variant`). Otherwise the stylesheet stays on the default (recipe card `1`).

The same applies to the planner entry, if you intend to use the new planner-entry variants on the catalog route (See [Planner entry variants](../integration-reference/recipe-catalog#planner-entry-variants)).

## 6. Recipe tags

In V2, recipe tags were rendered client-side via the web SDK (`webc-miam-recipe-tags`). In V3, they are fetched server-side only. There is no client-side alternative.

Call `GET /v3/recipe-tags` with your product IDs, then inject the returned `html` next to each cart line. See [Recipe tags](../integration-reference/recipe-tags) for parameters and response format.

The component tag was also renamed. Update any CSS or JavaScript selectors that target the old name:

```css
webc-miam-recipe-tags { ... }
```

```css
mealz-recipe-tag { ... }
```

## 7. Removed `window.mealz` methods

The tables below list removed methods and what to do instead. Where there is no V3 equivalent, the API was **deprecated**. If you still call it, remove the call. There is nothing to wire in its place.

### `window.mealz.features.*`

The whole namespace was removed. In V2, these methods turned features on or off from JavaScript (`enableVideoRecipes`, `enableUserPreferences`, `enableTagsOnRecipes`, `collapseUnavailableProductsByDefault`, and so on). In V3, those behaviors are always available in the library. Per-client activation is handled through **feature flags** in our internal configuration instead. See [Versioning process](../about-mealz/versioning-process).

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
| `router.setPromotionsUrl(url)` | Remove the call (deprecated, no V3 equivalent). |

### Other removed methods

| Method | What to do |
|---|---|
| `supplier.setOrigin(origin)` | Remove the call. Origin now comes from the `Supplier-token` header. |
| `setDefaultScrollElementGetter(callback)` | Remove the call (deprecated, no V3 equivalent). |
| `pos.getByAddress(address, radius)` | Remove the call (was internal, not part of the public integration API). |
| `pos.getByCoordinates(lng, lat, radius)` | Remove the call (was internal, not part of the public integration API). |
| `supplier.getAffiliateSuppliers()` | Remove the call (was internal, not part of the public integration API). |
| `user.updateForbidProfiling(forbidProfiling, userId, isAuthless)` | Remove the call. The profiling choice already sent on the SSR request is applied on each page load. If consent changes without a navigation, the current view can keep the previous choice until the next load. Call `loadWithExternalId` or `loadWithAuthlessId` only when that first view must follow the new choice immediately. |
| `overrideIcon(icon, url)` | Remove the call. |

Also:

- `window.mealzV10`: use `window.mealz` directly.
- `window.mealzInternal`: remove any references; this object no longer exists (`basket`, `recipes`, `planner`, `noSupplier`, etc.).

## 8. Styles: no more `webc-miam` entry

If you parse the `links` array from `GET /styles`, V3 responses no longer include a `webc-miam` CSS entry. Update any code that assumed it was always present.

## Verification checklist

Before going live:

- [ ] Search your codebase for `display_variant` (should be zero occurrences)
- [ ] Search for `display_recipe_variant` (should be zero occurrences)
- [ ] Search for `updateForbidProfiling` and `overrideIcon` (should be zero occurrences)
- [ ] Search for `webc-miam` (should be zero occurrences)
- [ ] Search for `setupWithToken` (should only appear in V1/V2 legacy code if any)
- [ ] Search for `window.mealzInternal` (should be zero occurrences)
- [ ] Verify recipe cards render and drawer opens correctly
- [ ] Verify basket sync still works end-to-end

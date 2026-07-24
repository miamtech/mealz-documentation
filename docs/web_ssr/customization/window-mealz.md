---
sidebar_position: 1
---

# window.mealz

The window.mealz object still has a lot more methods and attributes that can make a big difference for customizing your experience. Some of them will not be useful to you right off the bat, but can be at some point.

:::tip
  Except for the methods mentioned in [Set up and usage](../category/set-up-and-usage), none of the methods listed in this section are necessary if the basic implementation is good enough for you. But if you want or need more customization, you may need to call some of those methods.
:::

## Need to use window.mealz without a mealz component?

In a typical integration, `window.mealz` becomes available after you inject HTML from a Mealz SSR route. If you need the Mealz JavaScript API on a page that displays **no visible Mealz component** (for example, a cart page where you only need `basketSync`), you can load the core services from a dedicated route:

```
GET https://MEALZ_SSR_API_URL/v3/core
```

- Parameters :

  - `store_id: string`:
  **_(Recommended)_** We need your store ID to initialize Mealz for the user's current point of sale, as on other SSR routes.

The response is an HTML fragment containing only the scripts that set up `window.mealz`, all Mealz global services, and the shared UI components (modals, drawer-view-swapper). No visible recipe component or catalog is included.

:::warning
Use the same [mandatory HTTP headers](../integration-reference/pre-rendered-components#http-request-headers) as for any other Mealz SSR API request when calling this route from your server.
:::

:::note Changed in V3
V2's `GET /v2/mealz-window-bootstrap` was **renamed** to `GET /v3/core` in V3. Thus, `window.mealzInternal` is no longer available; do not rely on any of its namespaces.
:::

## window.mealz.analytics
- `eventSent$: Observable<string>` Each time Mealz sends an analytics event, it emits its content as a stringified JSON of the following format:

```javascript
{
name: 'eventName',
path: 'https://www.yourdomain.com/thepath',
props: {aString: 'foo bar', aNumber: 5}
}
```
- `init: (domain: string) => void` Initializes the analytics

  :::warning
    **Deprecated**, the analytics is initialized on startup
  :::

## window.mealz.basket
- `basketIsReady$: Observable<boolean>`: Emits true when Mealz's basket has successfully loaded for the first time. Does not emit anything before or after that.
- `initialize: () => void`: Fetch the first Basket early (before any action requires it on Mealz's side), so you can start the [basket-sync](../set-up-and-usage/basket-synchronization) earlier
- `reset: () => void`: Resets Mealz's basket : empties all products & recipes added by the user.
  :::info
    We recommend that you use `basket.reset()` when the user empties their cart on your website, to avoid the recipes being kept in a "in-basket" state but with no products and displayed at a price of 0.
    
    Outside of this usage we don't recommand using `basket.reset()` except to quickly empty Mealz's basket for testing purposes
  :::
- `recipeCount: () => Observable<number>`: A BehaviorSubject that emits the current number of recipes in Mealz's Basket once (it waits for the Basket to be initialized to emit).
- `openPreview: () => void`: Opens the recipe-modal in basket preview mode to display the recipes currently in the basket (Same action as when clicking on the FAB in the recipe-catalog)

## window.mealz.basketSync
See [basket synchronization](../set-up-and-usage/basket-synchronization)

- `definePushProductsToCart: (pushProductsToCart: (products: ComparableProduct[]) => void) => void`: The callback parameter is called when Mealz's basket changes to update the user's cart accordingly
- `defineAddProductsToCart: (addProductsToCart: (products: ComparableProduct[]) => void) => void`: The callback parameter is called when Mealz's basket adds new products to update the user's cart accordingly
- `defineRemoveProductsFromCart: (removeProductsFromCart: (products: ComparableProduct[]) => void) => void`: The callback parameter is called when Mealz's basket removes some products to update the user's cart accordingly
- `retailerBasketChanged: (comparableProducts: ComparableProduct[]) => void`: Call to notify Mealz that the user's cart has been updated
- `handlePayment: (total: number) => void`: Call to notify Mealz that the user's cart was paid. Mealz then refreshes the groceries-list and basket for the next user's cart
## window.mealz.hook
- `setHookCallback(callback: (isLogged, isPosValid) => boolean) => void`: [Set up hook callback](../set-up-and-usage/hooks)
- `setForcePosCallback: (callback: (posExtId: string) => boolean) => void`: [Receiving baskets from affiliated websites](./affiliated-websites)

## window.mealz.pos

- `load: (externalId) => void`: Informs Mealz that the active point of sale has changed.
  :::warning
    **Deprecated for page-load setup.** In V3, the store is initialized from the `store_id` query parameter on your SSR requests. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::

  Call `pos.load` only when the user changes store **without a full page reload**. If the change triggers a navigation or reload, pass the new `store_id` on the next SSR request instead.

  `externalId` is the store id in your database, the same id you provided to Mealz when your store catalogue was configured.

  When the store changes, Mealz recalculates its internal basket, because products and prices can differ from one store to another.

  If the user clears their store selection without reloading, call `pos.load(null)` or `pos.load(undefined)`.

  ```js
  // When the user picks a different store without reloading the page
  window.mealz.pos.load(storeId);
  ```

## window.mealz.recipes

- `addAllIngredientsCTAWasClicked: EventEmitter<{ ingredientsAdded: number; ingredientsTotal: number }>`: Emits when the "Add all ingredients" CTA on recipe-details is clicked. You can subscribe on it to display a toaster after ingredients were added.
  :::note
    `ingredientsAdded`: the number of ingredients added to cart

    `ingredientsTotal`: the total number of ingredients in the recipe
  :::

- `openDetails(recipeId: string, initialTabIndex?: number, guests?: number) => void` 🆕: Opens recipe details by id. `initialTabIndex` defaults to `0`. `guests` overrides the default guest count for that session.

## window.mealz.router
- `setRecipeCatalogUrl: (url: string) => void`: Inform Mealz of the url where the catalog is for the redirection link of recipe-details
- `setRetailerCartUrl: (url: string) => void`: Inform Mealz of the url of your cart page if Mealz needs to redirect there

## window.mealz.supplier
- `setupWithToken: (token: string) => void`: Loads the supplier token. 
  :::warning
    **Deprecated.** The SSR API reads the `Supplier-token` header instead. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::
- `load: (supplierId: number | string) => void`: Identify the client website
  :::warning
    **Deprecated.** The SSR API reads the `Supplier-token` header instead. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::

## window.mealz.user

- `loadWithExternalId: (id, forbidProfiling = false) => void`: Notifies Mealz that the user has logged in.
  :::warning
    **Deprecated for page-load setup.** In V3, the logged-in user is initialized from the `Authorization` header on your SSR requests. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::

  Call `loadWithExternalId` only when the user logs in **without a full page reload**. If login triggers a navigation or reload, pass the updated `Authorization` header on the next SSR request instead. See [Log in](../set-up-and-usage/login-and-logout#log-in).

- `loadWithAuthlessId: (id, forbidProfiling = false) => void`: Notifies Mealz of a guest (authless) session.
  :::warning
    **Deprecated for page-load setup.** In V3, the guest session is initialized from the `Authless-id` header on your SSR requests. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::

  Call `loadWithAuthlessId` only when the guest id changes **without a full page reload** (for example after logout). If the change triggers a navigation or reload, pass the updated `Authless-id` header on the next SSR request instead. See [Log out](../set-up-and-usage/login-and-logout#log-out).

- `reset: () => void`: Notify Mealz of a logout without page reload. See [Log out](../set-up-and-usage/login-and-logout#log-out).
- `setLanguage: (lang: string) => void`: Sets the active language (ISO 639-1 or your custom language code).
  :::warning
    **Deprecated for page-load setup.** In V3, language is initialized from the `Language-id` header on your SSR requests. See [Migrating from V2 to V3](../migration-v2-v3) if you are upgrading.
  :::

  Call `setLanguage` only when the user changes language **without a full page reload**. If the change triggers a navigation or reload, pass the new `Language-id` on the next SSR request instead.
- `setFavoriteItems: (favoriteProductIds: string[]) => Observable<object>`: If your website has a "favorite products" feature, you can pass the ids of all products which the user has marked as favorites, so they can be prioritized when adding a recipe to their cart, if one of them is returned as a matching product for the recipe.
  :::note
    `favoriteProductIds`:  an array of product ids, passed as string
  :::
- `setLocation: (position: GeolocationPosition) => void`: You can provide the user location if they allowed it in order to send it to our store-locator
  :::info
    the `GeolocationPosition` is the type returned by the method `navigator.geolocation.getCurrentPosition()` [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
    
    If you use another method to get the geolocation, you can simply provide an object with the following format:
    ```js
      window.mealz.user.setLocation({
        coords: {
          longitude: 50.0;
          latitude: 50.0;
        }
      })
    ```
  :::

- `updateForbidProfiling: (forbidProfiling: boolean, userId: string, isAuthless = false) => void`: Informs Mealz that the profiling permission has changed during execution. It can be used for both logged mode and authless mode (ex: logged user : `updateForbidProfiling(true, '12345')` | authless user: `updateForbidProfiling(true, 'MEALZ-AUTHLESS-12345', true)`)

## window.mealz.events
- `storeLocatorOpened: () => Observable<boolean>` Emits either `true` when the store locator is opened or `false` when it's closed

## Other
* `paymentStarted: (totalPrice: number) => void`: It is possible that we ask you to use this method if you have trouble sending us the cart paid event. This method is meant to be called when the user begins the payment procedure (typically when they click on a "Confirm my cart" button).

* `setStickyHeaderHeight: (height: number) => void`: **Heavily recommended** Call setStickyHeaderHeight method to update your sticky header height in px. You need to call the method everytime it changes with its new height. Default value is 0 (0px for no header). 
  :::warning
    This setter is **mandatory** for our catalog-header to get fixed at the right position when scrolling. Without it, our header might get fixed above or behind your header
  :::

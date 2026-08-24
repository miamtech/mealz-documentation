---
sidebar_position: 2
---

# Setup

As a non-retailer, your setup is a subset of the regular one described in [Set up and usage](../category/set-up-and-usage). This page only covers the steps you need, and links to the corresponding retailer pages for the details of each method.

In V3, Mealz initializes from the [HTTP headers](../main-features/pre-rendered-components#http-request-headers) and query parameters you pass on each SSR request. You do not call `setupWithToken`, `setLanguage`, or user-load methods on page load. Wire the client-side callbacks below once when your app starts (after the Mealz scripts from an SSR response are on the page).

We show those callbacks in a small `Mealz` helper class and give the full example at the end of the page.

```js
// Example Setup
export class Mealz {
  // Client-side callbacks go here
}
```

## Pass HTTP headers on SSR requests

Every call to the Mealz SSR API (including [no-supplier-add-to-cart-cta](./no-supplier-add-to-cart-cta)) must send the [mandatory HTTP headers](../main-features/pre-rendered-components#http-request-headers), like for retailers.

The supplier-token we provide you has the internal `noSupplier` flag set to `true`. That is what disables store-related features on your side; you do not configure anything extra to enter non-retailer mode. See [Introduction](./introduction#what-is-different-compared-to-a-retailer-integration).

:::info
There is no need to pass `store_id` or call `window.mealz.pos.load`. Non-retailer mode has no point of sale on your site; store selection happens later when the user picks an affiliated retailer.
:::

## Handle user login and logout

User identification works the same way as for retailers. Pass `Authorization` or `Authless-id` on your SSR requests; call the client methods below only when login or logout happens **without a page reload**. See [Handle user login and logout](../set-up-and-usage/login-and-logout).

When the user logs in without leaving the page:

```ts
window.mealz.user.loadWithExternalId(userId: string, forbidProfiling: boolean).subscribe();
```

When the user logs out without leaving the page (or becomes a guest again):

```ts
window.mealz.user.reset();
window.mealz.user.loadWithAuthlessId(authlessId: string, forbidProfiling?: boolean);
```

## Set the hook callback

The [hook callback](../set-up-and-usage/hooks) is called by Mealz before any action that requires the user to be logged in or to have picked a store. In non-retailer mode:

- `isPosValid` is always **`true`**: no store needs to be picked on your side.
- `isLogged` behaves exactly as on a retailer integration: it reflects whether the user is logged in on Mealz's side (from SSR headers in V3, or after `loadWithExternalId` when login happens without a page reload).

So the callback boils down to deciding what to do when the user is not logged in:

If you don't wish to allow users to create a basket when logged out:

```ts
// Example Setup
export class Mealz {
  constructor() {
    window.mealz.hook.setHookCallback(this.hookCallback);
  }

  hookCallback = (isLogged, _isPosValid) => {
    if (!isLogged) {
      // Redirect the user to your login page
    }
    return isLogged;
  };
}
```

If you wish to allow users to create baskets when logged out:

```ts
// Example Setup
export class Mealz {
  constructor() {
    window.mealz.hook.setHookCallback(this.hookCallback);
  }

  hookCallback = (_isLogged, _isPosValid) => true;
}
```

:::info
There is no need to set up anything under [Basket synchronization](../set-up-and-usage/basket-synchronization) (`retailerBasketChanged`, `handlePayment`, `definePushProductsToCart`, etc.) - you do not have a cart to synchronize with Mealz' basket.
:::

## Full example class

At the end of the setup, the `Mealz` class for a non-retailer integration looks like this:

```ts
// Example Setup
export class Mealz {
  // TS only
  mealz = (window as any).mealz;
  // You can then replace all 'window.mealz' by 'this.mealz'

  constructor() {
    window.mealz.hook.setHookCallback(this.hookCallback);
  }

  /////////////// LOGIN/LOGOUT ///////////////

  // Call this method from your app when the user logs in without a page reload
  handleLogin(user) {
    window.mealz.user
      .loadWithExternalId(user.id, !user.cookiesAccepted())
      .subscribe(() => {
        alert('User logged in on Mealz!');
      });
  }

  // Call this method from your app when the user logs out without a page reload
  handleLogout() {
    window.mealz.user.reset();
  }

  /////////////// HOOKS CALLBACK ///////////////

  hookCallback = (isLogged, _isPosValid) => {
    if (!isLogged) {
      // Navigate to your login page
    }
    return isLogged;
    // Return true if the current operation can continue,
    // false if it must be interrupted (page reload, navigation...)
  };
}
```

Once headers and callbacks are in place, integrate the [no-supplier-add-to-cart-cta](./no-supplier-add-to-cart-cta) component next to your recipes.

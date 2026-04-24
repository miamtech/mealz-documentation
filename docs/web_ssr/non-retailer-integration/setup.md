---
sidebar_position: 2
---

# Setup

As a non-retailer, your setup is a subset of the regular one described in [Set up and usage](../set-up-and-usage). This page only covers the steps you need, and links to the corresponding retailer pages for the details of each method.

Just like for the retailer setup, we recommend you follow these steps **in order** and **at the starting point of your app**, for the reasons explained in [Getting started](../set-up-and-usage/getting-started).

We will build the setup progressively into a class named `Mealz`, and show the final result at the end of the page.

```js
// Example Setup
export class Mealz {
  // Mealz setup goes here
}
```

## Load your supplier token

This step is identical to the retailer integration: we provide you a single token that identifies your site, and you load it with:

```js
window.mealz.supplier.setupWithToken(token: string)
```

The only difference is that the token we give you will have the internal `noSupplier` flag set to `true`. This is what makes all the store-related features of the library inactive for you - you do not have to configure anything specific on your side.

```ts
// Example Setup
export class Mealz {
  mealzToken = "aNoSupplierToken";

  constructor() {
    window.mealz.supplier.setupWithToken(this.mealzToken);
  }
}
```

See [Configure library context](../set-up-and-usage/library-context) for the full description of this method.

:::info
There is no need to call `window.mealz.pos.load`. Non-retailer mode takes care of store selection entirely, so leaving it out is the correct behavior.
:::

## Set the language

This step is also identical to the retailer integration:

```js
window.mealz.user.setLanguage('en' | 'fr' | ...);
```

## Handle user login and logout

User identification works exactly the same way as for retailers. When the user logs in:

```ts
window.mealz.user.loadWithExternalId(userId: string, forbidProfiling: boolean).subscribe();
```

When the user logs out (or when your app starts with an unlogged user):

```ts
window.mealz.user.reset();
window.mealz.user.loadWithAuthlessId(authlessId: string, forbidProfiling?: boolean);
```

See [Handle user login and logout](../set-up-and-usage/login-and-logout) for the full details, including how to generate and rotate the authless id.

## Set the hook callback

The [hook callback](../set-up-and-usage/hooks) is called by Mealz before any action that requires the user to be logged in or to have picked a store. In non-retailer mode:

- `isPosValid` is always **`true`**: no store needs to be picked on your side.
- `isLogged` behaves exactly as on a retailer integration and reflects whether you have called `loadWithExternalId`.

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
// TS only
import MealzInterface from 'webc-miam/interfaces/mealz-interface';

// Example Setup
export class Mealz {
  mealzToken = 'aNoSupplierToken';
  // TS only
  mealz = (window as any).mealz as MealzInterface;
  // You can then replace all 'window.mealz' by 'this.mealz'

  constructor() {
    window.mealz.supplier.setupWithToken(this.mealzToken);
    window.mealz.user.setLanguage('en');
    window.mealz.hook.setHookCallback(this.hookCallback);
  }

  /////////////// LOGIN/LOGOUT ///////////////

  // Call this method from your app when the user logs in
  handleLogin(user) {
    window.mealz.user
      .loadWithExternalId(user.id, !user.cookiesAccepted())
      .subscribe(() => {
        alert('User logged in on Mealz!');
      });
  }

  // Call this method from your app when the user logs out
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

Once this setup is in place, you can integrate the [no-supplier-add-to-cart-cta](./no-supplier-add-to-cart-cta) component next to your recipes.

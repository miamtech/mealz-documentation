---
sidebar_position: 4
---

# Handle user login and logout

## When Mealz scripts are active

### Log in

Many of Mealz features are enabled by having a user connected, so if you want to use them, you will need to set events to notice Mealz when your users log in or out.

> Features that require the user being connected include:
>
> - Personalized content (machine learning on recipes added & products replaced by the user)
> - Favorite recipes
> - Personal recipes
> - Preferences

When your user logs in, you can use:

```ts
window.mealz.user.loadWithExternalId(userID: string, forbidProfiling: boolean).subscribe();
// This method is an observable so you can call some code only after user is logged in our system if you need,
// the downside being that you have to subscribe() even if you don't need it
```

- userId: a unique identifier that we can recognize the user by
- forbidProfiling: true if the user has refused all cookies and false if they have accepted them (if true, personalized content will be desactivated).

:::info
If the user is logged in at the time Mealz scripts are loaded on the page, it needs to be notified at startup, as if the user just logged in
:::
:::warning
Do not forget to remove the authless-id you stored and pass in the headers as detailed in the [HTTP request headers](../main-features/pre-rendered-components#http-request-headers) section
:::

```ts
// Example Setup
export class Mealz {
  // Call this method from your app when the user logs in or when Mealz is set up
  handleLogin(user) {
    window.mealz.user
      .loadWithExternalId(user.id, !user.cookiesAccepted())
      .subscribe(() => {
        alert("User logged in on Mealz!");
      });
  }
}
```

### Log out

When your user logs out, call `window.mealz.user.reset()` to disconnect the user from Mealz. Additionally, when the user logs out, you must generate a new authless ID and pass it in the headers in the future, as detailed in the [Pre-rendered Components](../main-features/pre-rendered-components) section.

Just like you inform Mealz of the user's id, if your user is logged out (when Mealz scripts are loaded or after calling `window.mealz.user.reset()`), you will need to inform Mealz of the authless-id so it can remember the unlogged user:

```ts
window.mealz.user.loadWithAuthlessId(authlessId: string, forbidProfiling?: boolean);
```

It works similarly to the method `loadWithExternalId`, except you do not need to subscribe on it, as it does not do anything asynchronous on Mealz end.

```ts
// Example Setup
export class Mealz {
  // Call this method from your app when the user logs out
  handleLogout() {
    window.mealz.user.reset();
    this.handleAuthless()
  }

  // Call this method from your app during Mealz setup if the user is logged out
  handleAuthless() {
    // ...
    // generate the new authless-id via the route /generate-authless-token
    // ...
    window.mealz.user.loadWithAuthlessId(authlessId, !user.cookiesAccepted());
  }
}
```

:::info
  Since the `loadWithExternalId` and `loadWithAuthlessId` carry the information of the profiling permission, if the permission changes while the scripts are active, you can call `window.mealz.user.updateForbidProfiling` to update the information (see [window.mealz](../customization/window-mealz#windowmealzuser) for method usage).
:::

## When Mealz scripts are not active

If a user logs in when the Mealz scripts are not active, you need to decide how to handle the situation the next time our components are displayed.

If, at startup, you proceed normally and pass the user ID to us, Mealz will treat the new user as a new session rather than a continuation of the previous session. This is generally acceptable, except if your website allows unlogged carts and the unlogged user had already added some recipes to the cart.

> **If that happens, the user will lose the recipes they had previously added to their cart !**

To avoid this situation, you can call a specific route to inform Mealz that an unlogged user with an authless-id has logged in, and to transfer their current cart to their new user-id:

The route to **transfer the authless basket**:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/basket/merge-authless-basket?authless_id=xxx&store_id=xxx
```

- Parameters :
  - `authless_id: string`: **_(Mandatory)_** the authless-id of the user before they logged in
  - `store_id: string`: **_(Mandatory)_** the id of the current store chosen by the user

:::info
Since the route transfers the basket from the authless-id to the user-id, you need to use the `Authorization: user_id` header when calling it, instead of the `Authless-id` header.
:::



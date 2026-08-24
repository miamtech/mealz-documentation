---
sidebar_position: 2
---

# Handle user login and logout

## User identity on SSR requests

Mealz reads the current user from your [SSR request headers](../integration-reference/pre-rendered-components#http-request-headers):

- Logged-in user: `Authorization`
- Guest: `Authless-id`

When those headers match the user already shown on your site, **nothing else is required on page load**. The `loadWithExternalId` and `loadWithAuthlessId` client methods exist for cases where **the page stays open while the user changes** (see below).

Most sites reload or navigate on login and logout. The next SSR request then carries the updated headers, and Mealz follows without any client call.

## Login or logout without a page reload

On a single-page app, Mealz scripts can remain on the page while the user logs in or out. Until the next SSR fetch, the headers from the previous response no longer reflect the current user. The methods below keep Mealz in sync in that situation.

> Features that require a connected user include:
>
> - Personalized content (machine learning on recipes added and products replaced by the user)
> - Favorite recipes
> - Personal recipes
> - Preferences

### Log in

`loadWithExternalId` tells Mealz that the user has logged in:

```ts
window.mealz.user.loadWithExternalId(userID: string, forbidProfiling: boolean).subscribe();
// Observable: subscribe() even if you do not need the callback
```

- `userId`: a unique identifier Mealz can recognize the user by
- `forbidProfiling`: `true` if the user refused all cookies, `false` if they accepted them (`true` disables personalized content)

SSR requests after login should send `Authorization` instead of `Authless-id`. See [HTTP request headers](../integration-reference/pre-rendered-components#http-request-headers).

```ts
// Example Setup
export class Mealz {
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

`reset()` clears the logged-in session on the Mealz side.

If the user keeps browsing as a guest, generate a new authless id (see [Authless user](../integration-reference/pre-rendered-components#authless-user)) and pass it to `loadWithAuthlessId`:

```ts
window.mealz.user.loadWithAuthlessId(authlessId: string, forbidProfiling?: boolean);
```

The next SSR requests would use the new id in the `Authless-id` header instead of `Authorization`.

Unlike `loadWithExternalId`, this method is synchronous on Mealz's side, so there is no `subscribe()`.

```ts
// Example Setup
export class Mealz {
  handleLogout() {
    window.mealz.user.reset();
    this.handleAuthless();
  }

  handleAuthless() {
    // ...
    // generate the new authless-id via the route /generate-authless-token
    // ...
    window.mealz.user.loadWithAuthlessId(authlessId, !user.cookiesAccepted());
  }
}
```

:::info
Both methods carry the profiling permission. If that permission changes while Mealz scripts are active, `window.mealz.user.updateForbidProfiling` can update it without a reload. See [window.mealz.user](../customization/window-mealz#windowmealzuser).
:::

## Transferring an authless basket after login

If the user logs in while no Mealz component is mounted, the next SSR request with `Authorization` starts a fresh Mealz session. That is usually enough.

The edge case is an authless user who already added recipes to a Mealz basket, then logs in on a page where Mealz was not active. Without an extra step, that basket would not carry over to their account.

The **`merge-authless-basket`** route transfers the basket from the previous authless session to the logged-in user:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/basket/merge-authless-basket?authless_id=xxx&store_id=xxx
```

- Parameters :
  - `authless_id: string`: **_(Mandatory)_** the authless id before login
  - `store_id: string`: **_(Mandatory)_** the id of the store currently selected by the user

:::info
This route moves the basket from the authless id to the user id. Call it with the `Authorization: user_id` header, not `Authless-id`.
:::

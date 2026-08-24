---
sidebar_position: 4
---

# Hooks

## Set hooks callback

For cart actions triggered by Mealz components, Mealz may need to redirect the shopper to your login page or store selection page. Register a hook callback so Mealz can invoke your site-specific logic before those actions proceed.

:::info Your callback, your business logic
When a shopper adds a product from a Mealz component, Mealz verifies that a store is selected and recognized, and checks login state. It then invokes your callback with two flags: `isLogged` and `isStoreValid`.

You implement the business logic: redirect the shopper when needed based on these flags, and return whether the cart action should proceed.
:::

### Register the callback

```ts
const hookCallback = (isLogged, isStoreValid) => { ... }

window.mealz.hook.setHookCallback(hookCallback);
```

### `isStoreValid`

`isStoreValid` is `true` when the shopper has selected a store and Mealz recognizes it (the store was passed on SSR requests or via `window.mealz.pos.load`, and it exists in Mealz's database).

When a shopper tries to add a product before choosing a store, **`isStoreValid` is `false`**. Mealz cannot add products to the cart in that case — redirect them to your store selection page or open a store locator modal.

### `isLogged`

`isLogged` is `true` when the shopper is logged in from Mealz's perspective (for example after you called the login method or passed the `Authorization` header on SSR requests).

When a shopper tries to add a product while logged out, **`isLogged` is `false`**. Redirect them to your login page if your site requires authentication for add-to-cart. Please note, however, that **Mealz can manage guest baskets** ([`Authless-id`](../integration-reference/pre-rendered-components#authless-user)), so login is not mandatory unless your business rules require it.

### Return value

Return `true` to let Mealz proceed with the cart action, or `false` to block it — for example when you redirect the shopper and the current operation should not continue.

:::warning
Mealz does not ship a permissive default: until you register a callback, the built-in handler returns `false` and the cart action is blocked.
:::

```ts
// Example Setup
export class Mealz {
  constructor() {
    window.mealz.hook.setHookCallback(this.hookCallback);
  }

  hookCallback = (isLogged, isStoreValid) => {
    if (!isStoreValid) {
      // Navigate to store selection
      return false;
    }
    if (!isLogged) {
      // Navigate to login — only if your site requires it
    }
    return isStoreValid;
    // Return false if you redirect and the operation must stop;
    // return true when the cart action can continue.
  };
}
```

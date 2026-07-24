---
sidebar_position: 6
---

# Connect Mealz to your website

After a component is on the page, keep Mealz aligned with your own login state and cart. This page is the short version; each topic has a full reference under **Set up and usage**.

## A bit of context

Mealz exposes a single client interface, `window.mealz`, for configuration, runtime updates, and callbacks. It is created when SSR HTML (or `/v3/core`) loads. Overview: [Communication with the website](../set-up-and-usage/communication).

## Set up Mealz on the client

Create a function that runs **in the browser** on every page where Mealz scripts are present. Call it after those scripts have loaded (for example after the SSR fragment is in the DOM), so `window.mealz` exists.

```ts
function setupMealzOnPage() {
  // Basket sync and hooks — filled in below
}

setupMealzOnPage();
```

The next sections point you to the full explanations, then show what that function should look like once you have followed them.

## Basket synchronization

Wire the callbacks that exchange cart lines between your site and Mealz so quantities stay consistent. This is required for a production-quality integration: follow [Basket synchronization](../set-up-and-usage/basket-synchronization) for the full process (`retailerBasketChanged`, `handlePayment`, and how quantities are reconciled).

After that page, the setup side of basket sync in your client function should look like this:

```ts
function setupMealzOnPage() {
  window.mealz.basketSync.definePushProductsToCart((products) => {
    // products: { id, quantity }[]
    // quantity > 0 → add to your cart; quantity < 0 → remove
  });

  // Optional but recommended: fetch Mealz' basket early
  window.mealz.basket.initialize();
}

// Call whenever your cart changes (Mealz-related or not)
function onYourCartUpdated(cart) {
  window.mealz.basketSync.retailerBasketChanged(
    cart.products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    })),
  );
}

// Call when the shopper pays — before you reset the cart
function onYourCartPaid(cart) {
  window.mealz.basketSync.handlePayment(cart.price);
}
```

## Hooks

Before Mealz adds products to the basket, it can call your hook so you can send the shopper to choose a store or log in when needed. Full detail: [Hooks](../set-up-and-usage/hooks).

After that page, add the hook callback to the same client setup:

```ts
function setupMealzOnPage() {
  window.mealz.basketSync.definePushProductsToCart((products) => {
    // ...
  });
  window.mealz.basket.initialize();

  window.mealz.hook.setHookCallback((isLogged, isPosValid) => {
    if (!isPosValid) {
      // Navigate to store selection
    }
    if (!isLogged) {
      // Navigate to login
    }
    // Return true only if Mealz should continue adding to the basket
    return isLogged && isPosValid;
  });
}
```

---
sidebar_position: 7
---

# Hooks

## Set hooks callback

When the user adds a product to the cart from the WebComponents, Mealz checks if the store has been loaded, if it is in our database, and if the user is connected. At this moment, we call a callback that takes two parameters, isLogged and isPosValid, that has the purpose of doing specific actions based on those two parameters.
However this callback does nothing by default, it is up to you to decide what you want to happen when a user adds a product from Mealz while not logged in, or having not chosen a store, or both.

> Common examples of what you would want to do with this callback would be the following :
>
> - If the user tries to add a recipe to their cart before having chosen a store, you probably want to redirect them to the page on which they can choose one.
> - If the user tries to add a recipe to their cart before logging in, you probably want to redirect them to your login page.

You can set this callback with `window.miam.hook.setHookCallback(callback: (isLogged, isPosValid) => boolean): void`.

- isLogged is true if the user is logged from Mealz's perspective (i.e. if you have called our login method)
- isPosValid is true if the user has chosen a store and if Mealz knows this store (i.e. you have set the PoS & the PoS exists in our database)
- The callback should return a boolean that indicates to Mealz if it should proceed with adding the product(s) to the basket

```ts
// Example Setup
export class Mealz {
  constructor() {
    window.miam.hook.setHookCallback(this.hookCallback)
  }

  hookCallback(isLogged, isPosValid) => {
    if (!isPosValid) {
      // Navigate to 'Choose my Point of Sale' page
    }
    if (!isLogged) {
      // Navigate to login page
    }
    return isLogged && isPosValid;
    // this is just an example but if the current operation (adding the product to cart for instance) can continue, return true
    // If not (because of a page reload or a navigation), return false
  }
}
```

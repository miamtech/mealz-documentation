---
sidebar_position: 2
---

# Inform the library

## Inform the library of who you are

The library needs some informations at the start to identify your website, so you can see your own recipes and so Mealz recipes will add products from your stores to your cart.
To simplify this part of the setup, we will provide you a single token that you can load to give all those informations at once.

To load the token, use:

```js
window.mealz.supplier.setupWithToken(token: string)
```

```ts
// Example Setup
export class Mealz {
  mealzToken = "aToken";

  constructor() {
    window.mealz.supplier.setupWithToken(mealzToken);
  }
}
```

> if you don't understand what we mean by supplier here on in the code, we tend to use the words "supplier" and "retailer" interchangeably, but supplier is the name of the type in our database that refers to a retailer, so we mostly use this term

## Inform the library when the user chooses a store

Not all of Mealz features need the store information to function (recipes can be showned without a PoS for instance).
However, any push to basket action on Mealz side cannot happen without a valid store, because the list of products that we can return depends on the store the user has selected and its stocks.

To inform the library of the selected store, use:

```js
window.mealz.pos.load(posExternalId: string || number)
```

:::warning

If you do not have any store selected, simply call this method with `null` or `undefined` as parameter. **All features of the library that need a store won't start until miam.pos.load is called.** (Otherwise it can't tell the difference between "the store has not been initialized yet" and "the user has not chosen a store)

:::

posExternalId being the id of the store in your database, which needs to be the same id as the id that was provided to our backend with your stores infos.

> If the store changes after the application is started, simply call this method again, and Mealz will recalculate its internal basket, as products and prices can be different from one store to another.

```ts
// Example Setup
export class Mealz {
  // Call this method from your app on init with the id of the store or with null / undefined if no store is selected
  // And when the user choses a store
  loadStore(storeId) {
    window.mealz.pos.load(storeId);
  }
}
```

> While Supplier refered to the retailer, we use POS (or Point Of Sale) interchangeably with the word "store" in our code. Just so nobody is lost.

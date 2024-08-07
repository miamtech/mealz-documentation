---
sidebar_position: 3
---

# Configure library context

## Inform the library of who you are

The library needs some informations at the start to identify your website, so you can see your own recipes and so Mealz recipes will add products from your stores to your cart.
To simplify this part of the setup, we will provide you a single token that you can load to give all those informations at once.

To load the token, use:

```js
window.miam.supplier.setupWithToken(token: string)
```

```ts
// Example Setup
export class Mealz {
  mealzToken = "aToken";

  constructor() {
    window.miam.supplier.setupWithToken(mealzToken);
  }
}
```

> If you don't understand what we mean by supplier here on in the code, we tend to use the words "supplier" and "retailer" interchangeably, but supplier is the name of the type in our database that refers to a retailer, so we mostly use this term

## Inform the library when the user chooses a store

Not all of Mealz features need the store information to function (recipes can be showned without a PoS for instance).
However, any push to basket action on Mealz side cannot happen without a valid store, because the list of products that we can return depends on the store the user has selected and its stocks.

To inform the library of the selected store, use:

```js
window.miam.pos.load(posExternalId: string || number)
```

posExternalId being the id of the store in your database, which needs to be the same id as the id that was provided to our backend with your stores infos.

> If the store changes after the application has started, simply call this method again, and Mealz will recalculate its internal basket, as products and prices can be different from one store to another.

```ts
// Example Setup
export class Mealz {
  // Call this method from your app when the user choses a store
  loadStore(storeId) {
    window.miam.pos.load(storeId);
  }
}
```

> While Supplier refered to the retailer, we use POS (or Point Of Sale) interchangeably with the word "store" in our code. Just so nobody is lost.

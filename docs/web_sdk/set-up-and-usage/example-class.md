---
sidebar_position: 6
---

# Example class

At the end of our setup, here's what the dummy setup class looks like :

```ts
// TS only
import MealzInterface from 'webc-miam/interfaces/mealz-interface';

// Example Setup
export class Mealz {
  const mealzToken = 'aToken';
  // TS only
  mealz = (window as any).mealz as MealzInterface;
  // You can then replace all 'window.mealz' by 'this.mealz'

  constructor() {
    window.mealz.supplier.setupWithToken(mealzToken);
    window.mealz.basketSync.definePushProductsToBasket(this.pushProductsToBasket)
    window.mealz.basket.initialize(); // If you want Mealz's basket to be fetched on startup instead of being fetched the first time it is needed
    window.mealz.hook.setHookCallback(this.hookCallback)
  }

  /////////////// POS ///////////////

  // Call this method from your app on init with the id of the store or with null / undefined if no store is selected
  // And when the user choses a store
  loadStore(storeId) {
    window.mealz.pos.load(storeId)
  }

  /////////////// LOGIN/LOGOUT ///////////////

  // Call this method from your app when the user logs in
  handleLogin(user) {
    window.mealz.user.loadWithExternalId(user.id, user.cookiesAccepted()).subscribe(() => {
      alert("User logged in on Mealz!")
    });
  }

  // Call this method from your app when the user logs out
  handleLogout() {
    window.mealz.user.reset()
  }

  /////////////// BASKET-SYNC ///////////////

  // Call this method at the point of your app where the user's cart is updated
  sendCartToMealz(cart) {
    window.mealz.basketSync.retailerBasketChanged(
      // Your products aren't probably on the format {id, quantity}
      // so you need to map them to our ComparableProducts type
      cart.products.map(product => {
        return {id: product.id, quantity: product.quantity}
      })
    );
  }

  // Call this method at the point of your app where the user's cart is paid
  sendPaymentNotificationToMealz(cart) {
    window.mealz.basketSync.handlePayment(cart.price);
  }

  pushProductsToBasket(products: ComparableProducts[]) {
    products.forEach(product => {
      if (product.quantity > 0) {
        // Add {quantity} number of products in the cart
      }
      else {
        // Remove {quantity * -1} number of products from the cart
      }
    })
  }

  /////////////// HOOKS CALLBACK ///////////////

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

---
sidebar_position: 8
---

# Example class

At the end of our setup, here's what the dummy setup class looks like :

```ts
// TS only
import MiamInterface from 'webc-miam/interfaces/miam-interface';

// Example Setup
export class Mealz {
  const mealzToken = 'aToken';
  // TS only
  miam = (window as any).miam as MiamInterface;
  // You can then replace all 'window.miam' by 'this.miam'

  constructor() {
    window.miam.supplier.setupWithToken(mealzToken);
    window.miam.basketSync.definePushProductsToBasket(this.pushProductsToBasket)
    window.miam.basket.initialize(); // If you want Mealz's basket to be fetched on startup instead of being fetched the first time it is needed
    window.miam.hook.setHookCallback(this.hookCallback)
  }

  /////////////// POS ///////////////

  // Call this method from your app on init with the id of the store or with null / undefined if no store is selected
  // And when the user choses a store
  loadStore(storeId) {
    window.miam.pos.load(storeId)
  }

  /////////////// LOGIN/LOGOUT ///////////////

  // Call this method from your app when the user logs in
  handleLogin(user) {
    window.miam.user.loadWithExternalId(user.id, user.cookiesAccepted()).subscribe(() => {
      alert("User logged in on Mealz!")
    });
  }

  // Call this method from your app when the user logs out
  handleLogout() {
    window.miam.user.reset()
  }

  /////////////// BASKET-SYNC ///////////////

  // Call this method at the point of your app where the user's cart is updated
  sendCartToMealz(cart) {
    window.miam.basketSync.retailerBasketChanged(
      // Your products aren't probably on the format {id, quantity}
      // so you need to map them to our ComparableProducts type
      cart.products.map(product => {
        return {id: product.id, quantity: product.quantity}
      })
    );
  }

  // Call this method at the point of your app where the user's cart is paid
  sendPaymentNotificationToMealz(cart) {
    window.miam.basketSync.handlePayment(cart.price);
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

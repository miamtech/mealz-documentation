---
sidebar_position: 4 
---

# Enable order history

Our library provides the functionality to enable order history, allowing users to easily track their past orders directly within the catalog. This feature introduces a newly redesigned "My Space" section, which includes two dedicated tabs: **Favorites** and **History**.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history.png "History tab")

## Activating Order History

1. To begin, please contact our team to receive the required token for enabling order history functionality.

2. Replace your existing `mealzToken` with the new token and configure the user's language settings. Use the following code snippet:

  ```js
    window.mealz.supplier.setupWithToken('newMealzToken');
    window.mealz.user.setLanguage('en');
  ```

## Feature updates 

Once order history is enabled, the following updates will be applied:

The "Favorites" page in the catalog will be renamed to "My Space", featuring two tabs:
- **Favorites Tab**: Displays the list of recipes saved as favorites by a connected user

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-favorites.png "Favorites tab")

- **History Tab**: Displays the order history of a connected user

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history.png "History tab")
![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-empty-history.png "History tab with no history")

Clicking on an order in the History tab opens a drawer providing informations about the recipes included in the selected order.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history-drawer.png "Order details drawer")


You can further customize the appearance of the order history components to match your website’s design.
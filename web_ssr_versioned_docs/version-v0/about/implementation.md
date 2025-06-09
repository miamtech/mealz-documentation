---
sidebar_position: 3
---

# Implementation

## Implementing Mealz features into your website

The integration of the SDK in your app can be done in 3 steps :

1. Setup: Our library is designed to be as generic as it can, you will [configure the library](../set-up-and-usage/library-context) to recognize your specific retailer identity, products, and recipes, allowing for customized service initialization. Additionally, you will initiate a crucial process here: the [synchronization of our baskets](../set-up-and-usage/basket-synchronization).
2. Call the desired component route with the required parameters and [headers](../main-features/pre-rendered-components#http-request-headers) to retrieve the HTML, and then inject the returned content into the appropriate location on your website.
3. [Customize the styling](../styling) of those components to match your site's design

We will guide you through each step in detail throughout this documentation.

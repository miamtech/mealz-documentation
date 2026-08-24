---
sidebar_position: 2
---

# Communication with the website


## How does Mealz communicate with my website ?

To make communication between Mealz and your website easier, we decided to gather all methods and variables you might need in one interface.

The object `mealz` is the interface you use to configure Mealz on the client, customize behavior, and access data you may need from your website.

When you fetch Mealz components from the SSR API (or `GET /v3/core`), the scripts in the response load and initialize `window.mealz` from the headers and parameters you passed. You then call `window.mealz` to access methods and variables.

The methods and variables in `window.mealz` are grouped in thematic categories, like `window.mealz.user` or `window.mealz.recipes` for example. See [window.mealz](../customization/window-mealz) for more details on the content of each category.

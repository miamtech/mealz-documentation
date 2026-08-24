---
sidebar_position: 2
---

# Communication with the website


## How does Mealz communicate with my website ?

To make communication between Mealz and your website easier, we decided to gather all methods and variables you might need in one interface.

The object `mealz`, instanciated in our _context.services.ts_ is the interface you will use to setup our SDK, customize some features and access some useful datas that you might need.

For this interface to be accessible for anyone, we inject it into the `window` object when the SDK script is run, so you will only need to call `window.mealz` to access our methods and variables.

The methods and variables in `window.mealz` are grouped in thematic categories, like `window.mealz.user` or `window.mealz.recipes` for example. See [window.mealz](/mealz-documentation/docs/web_sdk/customization/window-mealz) for more details on the content of each category.

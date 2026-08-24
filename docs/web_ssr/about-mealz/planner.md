---
sidebar_position: 3
---

# Planner

The [planner](../integration-reference/planner) is a full-page flow that helps users build a weekly menu and push every recipe to the cart in one step. You embed a small **entry block** on a page such as the catalog home; it sends the user to a dedicated **current menu** page on your site when they start planning.

On the entry block, the user sets the number of guests and chooses how to start: from Mealz suggestions or from an empty menu.

![Planner entry](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/plannerEntry.png "Planner entry")
<br/>

<!-- TODO: add screenshot: mode selection (suggestions vs custom menu) -->

First-time users see a short onboarding modal; the same help content stays available from the entry block and from the menu page header.

<!-- TODO: add screenshot: onboarding / help modal -->

On the current menu page, the user adds or removes recipes (from suggestions or from the catalog with meal-type filters), can fine-tune which products to buy for each recipe, optionally sets a budget when a store is selected, then finalizes the menu to send everything to the retailer cart.

![Planner current menu](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/plannerCurrent.png "Planner current menu")
<br/>

<!-- TODO: add screenshot: recipe suggestions panel -->
<!-- TODO: add screenshot: catalog opened from the planner (meal-type filters) -->
<!-- TODO: add screenshot: budget gauge -->
<!-- TODO: add screenshot: mobile quick menu footer (suggestions view) -->
<!-- TODO: add screenshot: finalize menu / whole plan added to cart -->

On mobile, the current menu splits into two views (suggestions with a compact footer, then the full menu list); the URL keeps track of the active view via a `view` query parameter.

See [Planner](../integration-reference/planner) for SSR routes, routing configuration, and integration details.

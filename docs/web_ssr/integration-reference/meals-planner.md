---
sidebar_position: 5
---

# Meals planner

## Overview

<!-- TODO: UPDATE SCREENSHOTS — planner UI updated in V3 -->

The **Meals planner** is a full-page experience that helps users build a meal plan (a “menu”) and then push it to the retailer cart.

**The only supported entry point is `planner-entry`**: you embed it on one of your pages (typically the catalog home), and it redirects the user to the planner experience.

- A lightweight **entry component** (`/planner/entry`) meant to be embedded on other pages. The user can:
  - Set the number of guests
  - Start a menu from our current suggestions
  - Start a menu from scratch

  ![Entry](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/plannerEntry.png "Entry")

- After selecting a mode, `planner-entry` redirects to your **current menu page** (client URL), where the user:
  - Adds / removes recipes. From our suggestions, or our catalog with filters: main dish, starter, dessert, drinks
  - Select / Unselect specific products from recipes
  - (Optionally) sets a budget
  - Finalizes the menu to the basket, then gets redirected to the **retailer cart**

  ![Current Menu](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/plannerCurrent.png "Current Menu")

## Onboarding & help (modal)

First-time users are greeted with a quick onboarding modal.

Users can open the onboarding **help modal** at any time to understand (or re-check) how to use the meals planner.

- From **`planner-entry`**: the “How it works” / help link opens the modal.
- From the **current menu page**: the **help button** (question mark / help icon) in the header opens the modal again.

This onboarding is a **step-by-step guide** displayed in a modal with next/previous navigation and a **`I understood`** button to close. It is meant to be reopened anytime.

## Mobile view vs desktop view

On **desktop**, the current menu page displays the experience as a single layout.

On **mobile**, the current menu page is split into **2 separate views**:

- **Suggestions + quick menu**: the recipe suggestion panel is shown, and a compact footer (“quick menu”) is displayed:
  - Shows menu thumbnails (newest-first)
  - Lets the user open recipe details by tapping a thumbnail
  - Provides actions to **see the menu** and **add recipes from the catalog**
- **Your current menu**: the menu panel is shown with the list of recipes in the menu and the primary footer (CTA + budget when available).

The current menu web component keeps the URL in sync via the `view` query parameter:

- `?view=recipe`: show suggestions
- `?view=menu`: show the menu

## SSR API routes

### Entry component (embed)

Base URL:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/planner/entry
```

- Parameters:
  - `store_id: string`:
  **_(Recommended)_** Used to bind the entry to the currently selected store.

### Current menu page (target page, not an entrypoint)

Base URL:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/planner/current-menu
```

- Parameters:
  - `store_id: string`:
  **_(Recommended)_** Used for pricing, basket sync, and consistency of planner data.

### Shareable planner URL (landing)

For marketing campaigns or direct links, the planner root route also renders the current menu experience (same as `current-menu`):

```
GET https://MEALZ_SSR_API_URL/v2/planner
```

- Same parameters as current-menu.
- Behavior: if the user has a menu, it opens it; otherwise it creates one.

## Required HTTP headers

All the planner routes are **SSR custom elements endpoints**, so they require the same mandatory headers as other SSR features.

::::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers)
::::

## Stylesheets (CSS)

Like other SSR features, planner styles are fetched separately and should be included via `<link rel="stylesheet">` in your page `<head>`.

See [Fetching the components stylesheets](./fetching-style) for the general principles.

Recommended styles routes for the planner:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/planner
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/planner/planner-entry
```

- `styles/planner`: everything needed for planner pages (planner + drawer + catalog-list + breadcrumb + entry, etc.)
- `styles/planner/planner-entry`: minimal CSS for the entry block only

## How to integrate

The planner is split across two surfaces:

1. A **`planner-entry` block** that you embed on an existing page (it is embedded by default on the catalog home). It shows the guest stepper and start options, and redirects the user to the current menu page when they begin planning.
2. A **current menu page** — a dedicated URL on your website where the full planner renders. Your server fetches the HTML for this page from the SSR API (`/planner/current-menu`) and injects it into your template, the same way as any other Mealz component.

Include the planner styles on the current menu page from `GET /styles/planner`. See [Stylesheets](#stylesheets-css) above.



### Using the planner URL in marketing campaigns

You can point campaign links directly to your planner page (e.g. `https://your-website.com/meals-planner`). When a user lands on that URL:

- If they already have a menu in progress, the planner opens it.
- If they do not, the planner starts a new menu from the current suggestions.

This requires no special configuration — the behavior comes from the `GET /v2/planner` route, which always opens the current-menu experience.

## What works without a store or without a logged-in user

The planner is usable before the user has picked a store or logged in, but a few things are store- or account-dependent.

### No store selected

Without a store, Mealz cannot fetch product suggestions or prices, and the budget feature is unavailable (budget limits are store-specific). The rest of the planning experience — browsing and adding recipes, viewing the menu — works normally.

When the user opens recipe details inside the planner and tries to act on the shopping list, they will be prompted to pick a store at that point.

### Not logged in

Users can build an entire menu as guests. The only thing that requires a login is **transferring the menu to the cart** — when the user tries to finalize, Mealz will ask them to log in first.

Once they log in, their guest menu is carried over automatically. One edge case to be aware of: if the newly logged-in user already had a saved menu, **the guest menu overwrites it**.

:::info localStorage
The planner uses `localStorage` to resume certain steps across navigations (store selection, guest count, finalize URL). If your integration runs in a constrained environment such as a webview with storage restrictions, make sure `localStorage` is available.
:::

## I18n

Planner uses the same i18n override mechanism as other SSR features (see [Internationalisation](/docs/web_ssr/customization/internationalization)).

Example planner text keys that can be overridden via i18n:

```json
{
  "PLANNER_ENTRY": {
    "TITLE": "Plan my week for",
    "HOW_IT_WORKS": "How does it work?",
    "DECREASE_GUESTS": "Decrease number of people",
    "INCREASE_GUESTS": "Increase number of people",
    "HERO_BADGE": "New",
    "HERO_DESCRIPTION_PREFIX": "Choose your recipes,",
    "HERO_DESCRIPTION_HIGHLIGHT": "we fill your basket",
    "HERO_DESCRIPTION_SUFFIX": "with the best products!",
    "HERO_CTA": "Let's go!"
  },
  "PLANNER_MENU_OPTION": {
    "SELECTION": "We suggest: this week's selection",
    "SELECTION_SUBTITLE": "Get inspired by our selection of recipes for the week!",
    "CUSTOM": "You're the chef: personalized selection",
    "CUSTOM_SUBTITLE": "Build your own selection, to your taste and according to your budget.",
    "CANCEL": "Empty menu"
  },
  "PLANNER_CURRENT_MENU": {
    "SUBTITLE": "Here are the recipes you have selected",
    "ADD_MENU": "Add the menu to the cart",
    "REGISTER_MENU": "Save my menu"
  },
  "PLANNER_RECIPE_LIST": {
    "SELECTION_TITLE": "My selection",
    "MEAL_SINGULAR": "meal",
    "MEAL_PLURAL": "meals",
    "CHOOSE_FROM_RECIPES": "Choose from our recipes",
    "ADD_FROM_CATALOG": "Add a recipe from the catalog",
    "SUGGESTIONS": "Suggestions"
  },
  "PLANNER_RECIPE_SUGGESTION": {
    "ADD": "Add to menu",
    "REMOVE": "Remove from menu",
    "MEAL": "Meal",
    "OUR_SUGGESTIONS": "Our suggestions",
    "SEE_RECIPE": "See recipe",
    "SWAP": "Skip"
  },
  "PLANNER_QUICK_MENU": {
    "SEE_MENU": "See menu",
    "ADD_RECIPE_ARIA": "Add a recipe",
    "MENU_PREVIEW_ARIA": "Menu preview"
  }
}
```


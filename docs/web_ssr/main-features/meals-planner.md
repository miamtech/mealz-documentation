---
sidebar_position: 5
---

# Meals planner (SSR)

## Overview

The **Meals planner** is a full-page experience that helps users build a meal plan (a “menu”) and then push it to the retailer cart.

**The only supported entrypoint is `planner-entry`**: you embed it on one of your pages (typically the catalog home), and it redirects the user to the planner experience.

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

## How to integrate (client-side expectations)

### 1) Full page SSR (recommended)

You embed `planner-entry` where you want the entrypoint to appear, and you expose a dedicated URL on your website for the **current menu page**. On that URL, your server should:

- Fetch the planner HTML from the SSR API (`/planner/current-menu`)
- Inject the returned HTML into your page template
- Include the planner styles from `GET /styles/planner` in the page `<head>`

Because the final HTML response sent to the browser contains the `<script type="module">` tags, the custom elements will load and hydrate normally.

### 2) Runtime HTML injection (SPA / partial refresh)

If you fetch planner HTML at runtime and inject it with `innerHTML`, **browser will not execute `<script>` tags** contained in the injected HTML.

In that case you must ensure that:

- Like for CSS links, you must ensure the required `<script type="module">` tags are present in your page (scripts injected via `innerHTML` won't execute).
- The SDK script (`SDK_WEBC_URL_V2`) is loaded once
- The required planner-related `mealz-components` modules are loaded (planner, preferences, catalog list/toolbar, recipe-card/cta…)
- The CSS links are present in `<head>` (via `styles/planner`)

## Routing configuration (what you must provide)

The planner contains internal navigation (from planner entry → planner current menu, and finally redirect to the retailer cart).

Those URLs are **client-dependent** and are configured on our side (per supplier + per environment). Concretely, we need:

- The URL of your **planner current menu** page
- The URL of your **retailer cart** page (redirect target after finalization)

This is stored in the SSR API routing configuration (example shape):

```json
{
  "baseUrl": "https://www.example.com",
  "features": { "planner": "/planner" },
  "planner": {
    "current": ""
  },
  "retailerCart": "/cart"
}
```

## Authentication behavior (what clients should know)

- Users can **start building a menu without being authenticated** (using an authless identity), but **authentication is required to push the menu to basket**.
- The planner flow uses browser storage to resume critical steps (for example after login / POS selection). In particular:
  - Guests selection is stored under `_mealz/planner/guests`
  - Finalize flow can be resumed using a cached URL (`_miam/cachedFinalizeMenuUrl`)

## Works without POS selected / without user connected (limitations)

The planner is designed to **remain usable even if no point of sale (POS) is selected and/or no user is logged in**, with the following limitations.

### Without a POS selected

- You **cannot set a budget** (budget is store-dependent).
- We **cannot fetch products nor product pricings**, because they depend on the store context.
- In the **recipe-details** view, inside **"I'm shopping"**, the user can be prompted to **select a POS** (open the retailer store selector) to unlock store-dependent features.

### Without a user logged in

- The user can still **build a menu** (authless flow), but when they try to **move recipes from the menu to the basket** (finalize), the planner will ask them to **connect / log in** first.

If a user built a menu while unauthenticated (authless), you can transfer it to the logged-in user at the end of your auth flow using:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/menu/merge-authless-menu?authless_id=...
```

Behavior precision: If the logged user already had a menu, it will be **overridden** by the menu created as an unauthenticated user.

If you embed Mealz in constrained contexts (webviews, strict privacy modes), ensure `localStorage` is available and not fully blocked.

## Deprecated routes (do not use as entrypoints)

The following routes exist for legacy integrations but are deprecated:

- `GET /planner` (dashboard page)
- `GET /planner-card-link` and `GET /planner-banner-link` (planner link blocks)

## I18n

Planner uses the same i18n override mechanism as other SSR features (see [Internationalisation](/docs/web_ssr/customization/internationalization)).

Some of the main planner text keys are:

```json
{
  "PLANNER_ENTRY": {
    "TITLE": "…",
    "HOW_IT_WORKS": "…",
    "DECREASE_GUESTS": "…",
    "INCREASE_GUESTS": "…"
  },
  "PLANNER_MENU_OPTION": {
    "SELECTION": "…",
    "SELECTION_SUBTITLE": "…",
    "CUSTOM": "…",
    "CUSTOM_SUBTITLE": "…",
    "CANCEL": "…"
  },
  "PLANNER_CURRENT_MENU": {
    "ADD_MENU": "…"
  }
}
```


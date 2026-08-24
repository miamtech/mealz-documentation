---
sidebar_position: 1
---

# Introduction

Mealz Custom Elements is a library of [Server Side Rendered (SSR)](https://www.heavy.ai/technical-glossary/server-side-rendering) [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) designed to enhance the customer experience in drive stores.

The library exposes an API (built on [NestJS](https://docs.nestjs.com/techniques/mvc)) with endpoints named after each component. Your server calls these endpoints, injects the returned HTML into your pages, and the components hydrate automatically in the browser.

:::tip V3 is the current version
**V3 is the current and recommended version.** It introduces SSR-driven setup (less page-load JavaScript configuration), no longer relies on the heavy and outdated Angular SDK and cleaner component APIs. See the [migration guide](./migration-v2-v3) if you are upgrading from V2.
:::

## How it works

The integration follows three steps:

1. **Fetch HTML from the SSR API**: call the route for the component you want to display, passing your credentials and context as HTTP headers.
2. **Inject the HTML into your page**: drop the returned fragment into the appropriate place in your server-rendered template.
3. **Wire client-side callbacks**: synchronize the cart and connect runtime logic via callbacks so Mealz stays in sync with your website.

In V3, step 1 also loads and initializes the Mealz runtime from the headers and parameters you pass on the SSR request. You no longer need to call any setup functions on page load. The API uses a few internal names in headers and parameters; see [Note about terminology](./main-features/pre-rendered-components#note-about-terminology).

## Explore the docs

- **Understand the features**: see [Our features](./about/features).
- **New integration?**: follow the [Getting started with V3](./getting-started-v3) tutorial.
- **Upgrading from V2?**: read the [V2 to V3 migration guide](./migration-v2-v3).
- **Looking for an API reference?**: browse the **Main features** and **Customization** sections in the sidebar.

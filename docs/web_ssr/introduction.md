---
sidebar_position: 1
---

# Introduction

Mealz Custom Elements is a library of [Server Side Rendered (SSR)](https://www.heavy.ai/technical-glossary/server-side-rendering) [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) designed to enhance the customer experience in drive stores.

The library exposes an API (built on [NestJS](https://docs.nestjs.com/techniques/mvc)) with endpoints named after each component. Your server calls these endpoints, injects the returned HTML into your pages, and the components hydrate automatically in the browser.

:::tip V3 is the current version
**V3 is the current and recommended version.** It simplifies setup (Mealz initializes from your SSR request headers), consolidates components in `mealz-components`, and improves SSR coverage for teams leaving the older Web SDK. See [What's new](./whats-new) for a short overview, or the [migration guide](./migration-v2-v3) if you are upgrading from V2.
:::

## Where to start

- **New integration?** Follow [Getting started](./getting-started/overview).
- **Curious what shoppers see?** Browse [About Mealz](./category/about-mealz).
- **Upgrading from V2?** Read [Migrating from V2 to V3](./migration-v2-v3).
- **Looking up a route or parameter?** Use the [Integration reference](./category/integration-reference).

## How it works

The integration follows three steps:

1. **Fetch HTML from the SSR API**: call the route for the component you want, with your credentials and context as HTTP headers.
2. **Inject the HTML into your page**: place the returned fragment in your server-rendered template.
3. **Connect client-side callbacks**: keep login, cart, and hooks in sync with your website.

In V3, step 1 also loads and initializes the Mealz runtime from the headers and parameters you pass on the SSR request. You do not need a separate setup call on page load for the usual case.

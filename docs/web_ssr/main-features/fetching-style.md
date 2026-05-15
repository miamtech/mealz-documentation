---
sidebar_position: 2
---

# Fetching the components stylesheets

We have tried many solutions to provide a 1-request experience for our components, but sadly, for performances and good practices alikes, the better solution was to separate the stylesheets from the components HTML

Good practices ask that external stylesheets should be provided as a `<link rel="stylesheet">` tag in the page's head tag.

This means that, when your server is pre-rendering your page, in addition to calling the various routes we provide to fetch the HTML of our components, you will need to make an other call to fetch the corresponding CSS and add it to your page's head

## The easy way

The one-size-fits-all approach is to have a single route that simply sends you all CSS links used in our components. 
This way, your server doesn't have to know which Mealz components are displayed on a page to figure out which calls to make.


The base url for this route is:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles
```

Which will return data in the following format:

```json
{
  "links": [
    "https://unpkg.com/mealz-ds@2.0.0/mealz--ds.min.css",
    "https://cdn.jsdelivr.net/npm/webc-miam@9.2.2/miam-style.css",
    "https://unpkg.com/mealz-components@1.4.0/dist/catalog/catalog-home/catalog-home.css",
    "https://unpkg.com/mealz-components@1.4.0/dist/recipe-card/recipe-card.css",
    "https://unpkg.com/mealz-components@1.4.0/dist/recipe-card-cta/recipe-card-cta.css",
    "https://unpkg.com/mealz-components@1.4.0/dist/recipe-pricing/recipe-pricing.css",
    "https://unpkg.com/mealz-components@1.4.0/dist/like-button/like-button.css"
  ],
  "html": "<link rel=\"stylesheet\" href=\"http://localhost:4201/miam-style.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-ds@2.0.0/mealz-ds.min.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@1.4.0/dist/catalog/catalog-home/catalog-home.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@1.4.0/dist/recipe-card/recipe-card.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@1.4.0/dist/recipe-card-cta/recipe-card-cta.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@1.4.0/dist/recipe-pricing/recipe-pricing.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@1.4.0/dist/like-button/like-button.css\" />"
}
```

You can either directly inject the HTML tags from the `html` attribute into the `<head>` if your framework supports it, or loop through the links attribute to dynamically create and append each `<link>` tag.

## The performant way

You might not want to have all of our CSS on each and every page. In this case, we provide you with a more hands-on approach, where you can fetch only the CSS you need for a given component

All of our components use a base Design System for many of their subparts.
This means that one route will need to be called each and every time **there is at least one Mealz component on your page**:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/base
```

The following route will fetch all CSS **for displaying recipe-cards**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/recipe-card
```

The following route will fetch all CSS **for displaying the catalog**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog
```
:::warning
  Since the catalog displays recipe-cards, **it contains the CSS for the recipe-cards as well**
:::

#### If you want to be even more specific:

The following route will fetch all CSS **for displaying the catalog's home page only**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-home
```

The following route will fetch all CSS **for displaying the catalog's category page only**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-category
```

The following route will fetch all CSS **for displaying the catalog's favorites page only**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-favorites
```

The following route will fetch all CSS **for displaying the catalog's list page only**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-list
```

The following route will fetch all CSS **for displaying the catalog's my-space page only**:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/my-space
```

:::info
  All styles routes that have the same naming convention as a component route are implied to contain **all stylesheets for included subcomponents**.
  
  For example, since the /catalog/catalog-home route displays recipe-cards, the route /styles/catalog/catalog-home **will contain the CSS for the recipe-cards as well**
:::

## Variant query parameters (v3 and onward)

Starting from `API_VERSION = v3`, every component that exposes a variant query parameter on its rendering route also exposes the same parameter on the matching `/styles/...` route. Pass the variant you intend to render to make sure the response only contains the CSS files needed for that variant — instead of the union of every variant.

For example, the recipe-card has three variants. Calling:

```
GET https://MEALZ_SSR_API_URL/v3/styles/recipe-card?variant=2
```

returns the CSS files needed for `recipe-card` variant 2 only (base + variant-2 overrides + embedded sub-components). The same applies to any parent endpoint that embeds variantized components, e.g.:

```
GET https://MEALZ_SSR_API_URL/v3/styles/catalog/catalog-home?recipe_card_variant=2
```

returns the CSS files needed by `catalog-home` when its recipe-cards are rendered with variant 2.

The supported variant values are `1`, `2`, `3` for `recipe-card`. An invalid or missing value falls back to variant `1`.

## All-variants behavior of `/v3/styles`

The `GET /v3/styles` endpoint returns **every** CSS file shipped by Mealz components. Variantized components ship one base stylesheet (e.g. `recipe-card/recipe-card-base.css`) plus one stylesheet per variant (e.g. `recipe-card/variant-1/recipe-card.css`, `variant-2`, `variant-3`).

The base stylesheet contains the rules shared by every variant; variant stylesheets only contain overrides scoped under `.<component-class>.variant-<N>`. This means all variant stylesheets can be loaded simultaneously without rule conflicts, even if two variants disagree on, say, `flex-direction`.

If your client only ever renders one variant of a given component, prefer the more targeted endpoints documented above (e.g. `/v3/styles/recipe-card?variant=2`) to avoid shipping unused CSS to the browser.

## CSS file convention for variantized components

For Mealz contributors writing new variantized components in `mealz-components` (v3 branch and later):

- Ship one `<component-name>/<component-name>-base.css` containing every rule shared across variants. Use bare class selectors (e.g. `.mealz-foo { ... }`) — no variant scope.
- Ship one `<component-name>/variant-<N>/<component-name>.css` per variant. Each file must contain only `.<component-class>.variant-<N> { ... }` rules. Do not use `@import` to pull in the base stylesheet — the SSR style manifests load it alongside the variant sheet automatically.
- Update `src/v3/styles/all-styles.manifest.ts` in `mealz-ssr-api` to reference the new files; a CI test fails the build if any `.css` file in `mealz-components/src/components` is forgotten.

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
GET http://MEALZ_SSR_API_URL/API_VERSION/styles
```

Which will return data in the following format:

```json
{
  "links": [
    "https://unpkg.com/miam-ds@1.2.4/miam-ds.min.css",
    "https://cdn.jsdelivr.net/npm/webc-miam@8.6.1/miam-style.css",
    "https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/catalog/catalog-home/catalog-home.css",
    "https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-card/recipe-card.css",
    "https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-card-cta/recipe-card-cta.css",
    "https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-pricing/recipe-pricing.css",
    "https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/like-button/like-button.css"
  ],
  "html": "<link rel=\"stylesheet\" href=\"http://localhost:4201/miam-style.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/miam-ds@1.2.4/miam-ds.min.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/catalog/catalog-home/catalog-home.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-card/recipe-card.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-card-cta/recipe-card-cta.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/recipe-pricing/recipe-pricing.css\" /><link rel=\"stylesheet\" href=\"https://unpkg.com/mealz-components@0.3.0-alpha.4/dist/like-button/like-button.css\" />"
}
```

You can then either simply use the html tags provided in `html` to add them in your head tag, or loop on the `links` attribute to create each link tag

## The performant way

You might not want to have all of our CSS on each and every page. In this case, we provide you with a more hands-on approach, where you can fetch only the CSS you need for a given component

All of our components use a base Design System for many of their subparts.
This means that one route will need to be called each and every time **there is at least one Mealz component on your page**:

```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/base
```

The following route will fetch all CSS **for displaying recipe-cards**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/recipe-card
```

The following route will fetch all CSS **for displaying the catalog**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/catalog
```
:::warning
  Since the catalog displays recipe-cards, **it contains the CSS for the recipe-cards as well**
:::

#### If you want to be even more specific:

The following route will fetch all CSS **for displaying the catalog's home page only**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-home
```

The following route will fetch all CSS **for displaying the catalog's category page only**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-category
```

The following route will fetch all CSS **for displaying the catalog's favorites page only**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-favorites
```

The following route will fetch all CSS **for displaying the catalog's list page only**:
```
GET http://MEALZ_SSR_API_URL/API_VERSION/styles/catalog/catalog-list
```
:::warning
  Since the catalog-home displays recipe-cards, **these will contain the CSS for the recipe-cards as well**
:::
---
sidebar_position: 4
---

# Internationalization

The internationalization of our components is based on the mandatory [HTTP request header](/docs/web_ssr/main-features/pre-rendered-components#http-request-headers) `Language-id` that you provide on each API call.

By default the values it takes are the [language ISO codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) ('fr' / 'en' / 'de' / 'es' etc)

But our solution also offers configurable internationalization (i18n), allowing you to customize labels with the text you prefer independently for any language.

We use dedicated .json translation files like fr.json and en.json for localization. If you need to, you can create custom override files such as fr-*retailer_name*.json to further tailor the content to your needs.

:::info
You can find the replaceable texts in JSON format within the description of each feature. This will help you identify which texts you can customize and how they correspond to specific parts of the interface.
:::

These files are formatted as follows:

```json
{
  "path_to_label": {
    "label_to_replace": "The text I want to show"
  }
}
```

This structure allows you to specify the path to the label and the text you wish to replace it with, providing a
flexible way to only customize the content you need to instead of the whole file.

The content of the base EN json file is the following:

```json
{
  "CATALOG_HOME": {
    "TITLE": "Meal ideas in 1 click",
    "CATEGORY": {
      "SEE_ALL": "See all"
    }
  },
  "MY_MEALS_BUTTON": {
    "TEXT": " recipes in your cart",
    "CARET_ALT": "Open the list"
  },
  "RECIPE_PRICING": {
    "PER_GUESTS": "/pers."
  },
  "RECIPE_CARD_CTA": {
    "IN_BASKET_ICON_ALT": "See the products currently in basket",
    "NOT_IN_BASKET_ICON_ALT": "See the products"
  }
}
```

Our json files are internally stored as of now, so please contect us if you need to make a custom translation file
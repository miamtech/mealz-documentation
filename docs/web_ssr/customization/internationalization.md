---
sidebar_position: 4
---

# Internationalization

:::warning
Work in progress
:::

Our solution offers configurable internationalization (i18n), allowing you to set the language and customize labels with
the text you prefer.

We provide dedicated .json files like fr.json and en.json for localization. Additionally, you can create custom override
files such as fr-*your_name*.json to further tailor the content to your needs.
These files are formatted as follows:

```json
{
  "path_to_label": {
    "label_to_replace": "The text I want to show"
  }
}
```

This structure allows you to specify the path to the label and the text you wish to replace it with, providing a
flexible way to customize the content.

You can find those file in the Mealz SSR API project at `src/i18n/locales/**/**.json`
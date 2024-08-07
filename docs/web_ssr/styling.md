---
sidebar_position: 5
---

# Styling

## Global variables

This library mainly uses global CSS variables for its style (mainly the colors). You can easily adapt the theme of the library to your website's design simply by overriding those variables.

```html
<style>
  :host {
    --miam-ds-color-primary: blue;
    --miam-ds-color-background-primary: #FCFCFC;

    .miam-ds-text {
      font-weight: 500;
    }
  }
</style>
```

:warning: We are currently transitioning from our old variable system to our new Design System, which has its own set of CSS variables. Any variable that does not start with --miam-ds is meant to disappear at some point in the future.


## Component styles

For any other change in style you want to make, we recommend overriding directly our components' CSS class in you own CSS. You can override style classes of our components like below.

```html
<style>
  :host {
    .mealz-recipe-card {
      border-color: solid blue 1px;
    }
  }
</style>
```

> The only thing you need to keep in mind is that your override must be read by the DOM **after** our CSS so it overrides correctly.

---
sidebar_position: 9
---

# Styling

This library mainly uses global variables for its style (mainly the colors). You can easily adapt the theme of the library to your website's design simply by overriding those variables.

```html
<style>
  :host {
    --mealz-color-primary: blue;
    --mealz-color-black: #101010;
    --mealz-default-transition: all 1s linear;
    --mealz-border-radius: 3px;
  }
</style>
```

> :warning: We are currently transitioning from our old variable system to our new Design System, which has its own set of CSS variables. Any variable that does not start with `--mealz-ds-` is meant to disappear at some point in the future.
>
> SDK **v10** uses the **`mealz-ds@2.0.0`** design system (see the Changelog for more details). Prefer using the `--mealz-ds-*` variables whenever possible.

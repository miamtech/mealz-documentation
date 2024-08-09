---
sidebar_position: 9
---

# Styling

This library mainly uses global variables for its style (mainly the colors). You can easily adapt the theme of the library to your website's design simply by overriding those variables.

```html
<style>
  :host {
    --miam-color-primary: blue;
    --miam-color-black: #101010;
    --miam-default-transition: all 1s linear;
    --miam-border-radius: 3px;
  }
</style>
```

> :warning: We are currently transitioning from our old variable system to our new Design System, which has its own set of CSS variables. Any variable that does not start with --miam-ds is meant to disappear at some point in the future.

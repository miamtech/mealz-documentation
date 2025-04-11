---
sidebar_position: 10
---

# Component Styling

For any other change in style you want to make, we recommend overriding directly our components' CSS class in you own CSS. You can override style classes of our components like below.

```html
<style>
  :host {
    .miam-recipe-card {
      border-color: solid blue 1px;
    }
  }
</style>
```

> The only thing you need to keep in mind is that your override must be read by the DOM **after** our CSS so it overrides correctly.

---
sidebar_position: 6
---

# Styling

## Global variables

This library mainly uses global CSS variables for its style (mainly the colors). You can easily adapt the theme of the library to your website's design simply by overriding those variables.

```html
<style>
  :host {
    --mealz-ds-color-primary: blue;
    --mealz-ds-color-background-primary: #FCFCFC;

    .mealz-ds-text {
      font-family: "Roboto";
    }
  }
</style>
```

:warning: We are currently transitioning from our old variable system to our new Design System, which has its own set of CSS variables. Any variable that does not start with --mealz-ds is meant to disappear at some point in the future.
// TODO still relevant ? (variables in mealz-components)

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

> The only thing you need to keep in mind is that your override must either be read by the DOM **after** our CSS or have more precision to override it correctly.

## About overriding CSS

If you are not familiar with CSS overriding, here are a couple tricks that should be helpful:

#### Override images

Most of our images and icons are in our neutral style and thus probably don't match your website very well
To override the src attribute of a img tag, you can use html, but a less computational-heavy option is to use CSS:
```css
.mealz-component__container-class {
  img {
    content: url('http://storage-website/the-new-image.png')
  }
}
```

#### Override texts

The recommended way to override texts is to send us a custom language file as part of our [i18n feature](./customization/internationalization.md), but you can also just override texts with CSS

All of our texts are contained in singular spans so that you can easily hide the span and add a custom text in its place like so

```css
// <button><span>Click me!</span></button>

button {
  span {
    display: none;
  }

  &::after {
    content: "Click here!";
  }
}
```

#### Responsive

All of our components are responsive.

Usually the breakpoint for displaying the mobile view is < 1024px, but some components stay in their desktop design on tablets too, thus having a breakpoint at < 600px.

We recommend keeping this in mind when overriding the CSS.

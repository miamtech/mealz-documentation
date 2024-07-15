---
sidebar_position: 1
---

# Getting started

## Getting started with the integration of ngMiam

> :warning: Your domain will need to be registered in our API (api.miam.tech) to use our SDK. Please contact us if you experience **CORS** issues to get your domain authorized.

### What is a WebcComponents library ?

We at Mealz needed a solution to provide any retailer with a list of features while being completely framework / language agnostic. The best mean to do this was to use WebComponents.

WebComponents is a standard component model for the Web allowing for encapsulation and interoperability of individual HTML elements. What this means for us is that we develop Angular components and then build them so anyone using any language and framework can access and use them like any HTML tag.

When building our angular library, we generate a Javascript file; this file gives you access to all of our WebComponents, just by being executed in your website.

### On WebComponents usage

Our WebComponents have inputs and outputs to communicate with your website and for customization.

You can pass input parameters to a WebComponent simply by adding properties to the corresponding HTML tag, with a js script:

```javascript
const card = document.querySelector('webc-miam-recipe-card');
card.productIds = ['id1', 'id2']
```

If you need to listen to the Webcomponents's outputs (events), you can add an EventListener to the corresponding DOM element :

```javascript
// miam-recipe-card.js
const card = document.querySelector('webc-miam-recipe-card');
recipeCard.addEventListener('hide', (event) => {
  alert(event);
}
```

If your framework gives you an other way to interact with HTML tags, you should be able to use it for our components. For exemple in Angular you can do this:

```html
<webc-miam-recipe-card>
  [productIds]="['id1', 'id2']"
  (hide)="alert($event)"
</webc-miam-recipe-card>
```

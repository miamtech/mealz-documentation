---
sidebar_position: 1
---

# Getting started

To prevent any unwanted side effect, we highly recommend you to follow the steps described below **in order** and **at the starting point of your app** (either in your index.js in a Next.js application, in the equivalent file for other frameworks, or within a `<script>` tag in your index.html). If you want to do the setup somewhere else, please keep in mind that :

- Setup needs to be done once per application initialization
- Unless stated otherwise, doing any setup step multiple times can cause errors
- Setup needs to be done before you expect our custom elements to appear visually, as they require some setup to function properly
- After initial client-side hydration, components will continue to operate based on user actions. This includes updating displayed data, rendering additional components, and interacting with your website (such as managing items in a cart).

We will be doing a setup tutorial using Javascript, which should work across most web app. In this tutorial, we are going to put all the setup in a class named `Mealz` so all of our methods are at the same place :

```js
// Example Setup
export class Mealz {
  // Mealz setup goes here
}
```

> The easiest for you is to follow this tutorial and then copy-paste the full class where it is easiest for you to call it in your code, and just fill the missing parts, but the library does not expect you to use the class.


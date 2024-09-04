---
sidebar_position: 1
---

# Set up

To prevent any unwanted side effect, we highly recommend you to follow the steps described below **in order** and **at the starting point of your app** (either in your app.component.ts if you are in Angular, in the equivalent file for other frameworks, or in a `<script>` tag in your index.html). If you want to do the setup somewhere else, please keep in mind that :

- Setup needs to be done only one time per execution of the script webc-miam-lang.js
- Unless stated otherwise, doing any step of the setup multiple times can cause errors
- Setup needs to be done before you expect our webcomponents to appear visually for the client, because all of them need at least some part of the setup to do anything

We will be doing a setup tutorial in Javascript that should work almost as is on any web app. In this tutorial, we are going to put all the setup in a class named Mealz so all of our methods are at the same place :

```js
// Example Setup
export class Mealz {
  // Mealz setup goes here
}
```

> The easiest for you is to follow this tutorial and then copy-paste the full class where it is easiest for you to call it in your code, and just fill the missing parts, but the library does not expect you to use the class.

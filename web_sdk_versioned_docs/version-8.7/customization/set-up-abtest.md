---
sidebar_position: 4
---

# Setting up an ABTesting campain

Sometimes we hesitate on wordings or design choices, and no opinion is better than the opinion of the users.

ABTest campains are an easy tool for making the best choice between multiple designs for a designated feature.

If you want to want to start ABTesting some design for our features, you have the liberty to do so however you want, since you have the possibility of [override the style of our components](../component-styling).

But in order for us to inform you about the performance of the different versions your are ABTesting, our library needs to know which version it is currently showing, so that we can update our analytics events with an identifier or the version.

In order to inform the library of the Abtested version currently showed, you can call:

```ts
window.miam.analytics.setAbTestKey(key: string)
```

:::info
Ideally this needs to be called before the call to `setSupplierToken`, as the initialisation process can send analytics events.
:::

Imagine for example that you have a doubt on the text of the button "Add all products to cart" of the recipe-details. You set up an ABTest campain with version 'A' being the current state of the component with the text "Add all products to cart" and version 'B' being the test for a new text "Add everything".

On your side you set up your website so that version 'A' is showed to 50% of users and version 'B' to the other 50%.
If for all users that are showed version 'A', you call `window.miam.analytics.setAbTestKey('A')` and for all users that are showed version 'B', you call `window.miam.analytics.setAbTestKey('B')`, we can then provide you with the performances of each version.

By example we could tell you that version 'A' has 25% clicks than version 'B' but that the users that are showed version 'B' are 30% more inclined to remove products addes by Mealz components from their cart, which can then help you make an informed decision about the best of the two versions.

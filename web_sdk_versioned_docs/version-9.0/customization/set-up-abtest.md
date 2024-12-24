---
sidebar_position: 4
---

# Setting up an ABTesting campain

Sometimes we hesitate on wordings or design choices, and no opinion is better than the opinion of the users.

ABTest campains are an easy tool for making the best choice between multiple designs for a designated feature.

If you want to want to start ABTesting some design for our features, you have the liberty to do so however you want, since you have the possibility of [override the style of our components](../component-styling).

But in order for us to inform you about the performance of the different versions your are ABTesting, our library needs to know which version it is currently showing, so that we can update our analytics events with an identifier or the version.

In order to inform the library of the Abtested version currently shown, you can call:

```ts
window.mealz.analytics.setAbTestKey(key: string)
```

:::info
Ideally this needs to be called before the call to `setSupplierToken`, as the initialisation process can send analytics events.
:::

Imagine for example that you have a doubt on the text of the button "Add all products to cart" of the recipe-details. You set up an ABTest campain with version 'A' being the current state of the component with the text "Add all products to cart" and version 'B' being the test for a new text "Add everything".

On your side, you configure your website so that version 'A' is shown to 50% of users and version 'B' to the other 50%. If you call `window.mealz.analytics.setAbTestKey('A')` for all users shown version 'A', and `window.mealz.analytics.setAbTestKey('B')` for those shown version 'B', we can then provide you with the performance data for each version.

For example, we could tell you that version 'A' has 25% more clicks than version 'B', but users shown version 'B' are 30% more likely to remove products added by Mealz components from their cart. This data can help you make an informed decision about the best version.

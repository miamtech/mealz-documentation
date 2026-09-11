---
sidebar_position: 4
---

import ImageSideBySide from '@site/src/components/ImageSideBySide';

# Recipe reminders

To complement the other features which let users add products to their cart through recipes, Mealz provides the [recipe-tags](../integration-reference/recipe-tags) component to remind users why a product is in their basket.

Recipe tags can be fetched server-side in batch via `GET /v3/recipe-tags` and injected next to each product on your cart page.

Imagine your cart page looks like this:

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCart.png "fake cart")

If you insert the recipe-tags component into each product component of your cart, you may have something that looks like this:

<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReduced.png"
firstAlt="Fake cart with recipe tags"
firstCaption="Closed"
firstImageMaxWidth="600px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReducedOpen.png"
secondAlt="Fake cart with recipe tags open"
secondCaption="Opened"
secondImageMaxWidth="600px"
/>
<br/><br/>

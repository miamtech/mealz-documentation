---
sidebar_position: 1
label: "Component Injection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Components injection

There are two ways to inject Mealz components into the host app:

1. **Jetpack Compose** (preferred as nothing has to be changed on the component itself, except styling adjustments)
2. **your own full XML** version of the component (a bit more complex, but gives full flexibility of changing every aspect of the component)

For the sake of the example, we will inject a component showing a recipe card in the host app.
In Mealz, recipe cards can either be "fixed" (= fetched by on a predefined ID) or "suggested" (= fetched based on the user navigation context)

<Tabs
defaultValue="compose"
groupId="code-example"
values={[
{ label: 'Jetpack Compose', value: 'compose' },
{ label: 'XML', value: 'xml' },
]}>

<TabItem value="compose">

## With Jetpack Compose (preferred)

Initialize a RecipeView object, passing your current context:

```kotlin
val recipe = RecipeCard(context)
```

```kotlin
import com.miam.sdk.model.SuggestionsCriteria

// Implemented in Mealz SDK
data class SuggestionsCriteria(
    // Ids of products displayed in the search results, right before and after the recipe card
    val shelfIngredientsIds: List<String>? = null,
    // Ids of products displayed on a product details page (optional)
    val currentIngredientsIds: List<String>? = null,
    // Ids of products already in app basket (optional)
    val basketIngredientsIds: List<String>? = null,
    // (optional)
    val groupId: String? = null
)

val recipe1 = RecipeCard(this@MainActivity)
val recipe2 = RecipeCard(this@MainActivity)

// Instanciate a fixed recipe card
recipe1.bind(recipeId = 305)

// Instanciate a suggested recipe card
recipe2.bind(
    criteria = SuggestionsCriteria(
        shelfIngredientsIds = listOf(
            PRODUCT_ID_IN_APP,
            PRODUCT_ID_IN_APP
        )
    )
)

// Inject in the page using Compose
setContent {
    Column {
        recipe1.Content()
        recipe2.Content()
    }
}
```

:::info
All injectable components definitions can be found in the `/androidSDK` folder 
=> have a look at each View file to discover which attributes must be passed to instantiate the view.
:::

</TabItem>
<TabItem value="xml">

## With XML injection

If you are not using Jetpack Compose, you can inject Mealz recipe cards directly into your own XML View:

```xml
<!-- defined in layout/item_miam.xml -->
<com.miam.kmm_miam_sdk.android.ui.components.recipeCard.RecipeView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    android:layout_width="match_parent"
    android:layout_height="wrap_content" 
/>
```

And then bind the properties like this:

```kotlin
import com.miam.sdk.model.SuggestionsCriteria

// Implemented in Miam SDK
data class SuggestionsCriteria(
    // Ids of products displayed in the search results, right before and after the recipe card
    val shelfIngredientsIds: List<String>? = null,
    // Ids of products displayed on a product details page (optional)
    val currentIngredientsIds: List<String>? = null,
    // Ids of products already in app basket (optional)
    val basketIngredientsIds: List<String>? = null,
    // (optional)
    val groupId: String? = null
)

val mealzCard = R.layout.item_miam as RecipeCard

mealzCard.bind(
    criteria = SuggestionsCriteria(
        shelfIngredientsIds = listOf(
            PRODUCT_ID_IN_APP,
            PRODUCT_ID_IN_APP
        )
    )
)
```
:::tip
Can also be done by replacing `R.layout.item_miam` by the usual `findViewById`.
:::

</TabItem>
</Tabs>
---
sidebar_position: 2
label: "View Implementation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View Implementation

For either XML or JetPack Compose, the migration is very quick & painless on the View side.
All you'll need to do is change a few lines.

## Catalog Feature

We have changed where the `Catalog` is imported from.

You can replace this code:
```kotlin
<com.miam.kmm_miam_sdk.android.ui.components.catalog.Catalog
```
with:
```kotlin
<com.miam.sdk.components.catalog.Catalog
```

### Customizing

You can completely configure all the templates & pages in the Catalog Feature.

[//]: # (You can read about it [here]&#40;/docs/android/features/catalog/customize-views&#41;.)

## Standalone Recipe Card Feature

We have changed the `RecipeView` to be a `RecipeJourney` that includes the Recipe Details & allows users to add it to their basket.

You can replace this code:
```kotlin
private val recipeView: RecipeView = itemView as RecipeView
```
with:
<Tabs
defaultValue="xml"
groupId="code-example"
values={[
{ label: 'XML', value: 'xml' },
{ label: 'JetPack Compose', value: 'compose' },
]}>

<TabItem value="xml">

```kotlin
private val recipeView: RecipeJourney = itemView as RecipeJourney

// keep the same bind
fun bind(suggestionCriteria: SuggestionsCriteria?) {
    recipeView.bind(criteria = suggestionCriteria)
}
```
</TabItem>
<TabItem value="compose">

```kotlin
private val recipeView: RecipeJourney = itemView as RecipeJourney

// keep the same bind
fun bind(suggestionCriteria: SuggestionsCriteria?) {
recipeView.bind(criteria = suggestionCriteria)
}
recipeView.Content()
```
</TabItem>
</Tabs>

### Customizing

You can completely configure all the templates & pages associated with the Recipe Card Feature.

[//]: # (You can read about it [here]&#40;/docs/android/features/recipe-card/customize-views&#41;.)

## Favorites Feature

We have changed where the `FavoritePage` is imported from.

You can replace this code:
```kotlin
<com.miam.kmm_miam_sdk.android.ui.components.favoritePage.FavoritePage
```
with:
```kotlin
<com.miam.sdk.components.favoritePage.FavoritePage
```

### Customizing

You can completely configure all the templates & pages in the Favorites Feature.

[//]: # (You can read about it [here]&#40;/docs/android/features/favorites/customize-views&#41;.)

## MyMeals Feature (Recipes in your basket)

We have changed where the `MyMeal` is imported from.

You can replace this code:
```kotlin
<com.miam.kmm_miam_sdk.android.ui.components.myMeal.MyMeal
```
with:
```kotlin
<com.miam.sdk.components.myMeal.MyMeal
```

### Customizing

You can completely configure all the templates & pages in the MyMeals Feature.

[//]: # (You can read about it [here]&#40;/docs/android/features/myMeals/customize-views&#41;.)

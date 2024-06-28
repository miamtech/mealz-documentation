---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '@site/docs/ios/features/_shared/_custom-views/Explanation.md';
import BaseViews from '@site/docs/ios/features/_shared/_custom-views/BaseViews.md';
import CatalogRecipesListGridConfig from '@site/docs/ios/features/_shared/_custom-views/CatalogRecipesListGridConfig.md';
import StandaloneRecipeCardConstructor from './_custom-views/StandaloneRecipeCardConstructor.md';
import * as RecipeDetailsViewOptions from '@site/docs/ios/features/recipe-details/_custom-views/';

# Customize Views

<Explanation />

## Recipe Card Options

The Standalone Recipe Card is a little different. Instead of taking a "ViewOptions" object, it directly takes the RecipeCard & RecipeCardLoading.

### Custom Views

#### [CatalogRecipeCard](./components/CatalogRecipeCard)

A SwiftUI View that implements the `CatalogRecipeCardProtocol`

#### [RecipeCardLoading](./components/RecipeCardLoading)

A SwiftUI View that implements the `RecipeCardLoadingProtocol`

#### CGSize

A basic `CGSize` that includes the width & height.

### Standalone Recipe Card Feature Constructor

<StandaloneRecipeCardConstructor />

## Recipe Details Options

### View Options

<RecipeDetailsViewOptions.RecipeDetailsViewOptions />
<RecipeDetailsViewOptions.RecipeDetailsProductViewOptions />
<RecipeDetailsViewOptions.ItemSelectorViewOptions />

### Recipe Details Constructor

<RecipeDetailsViewOptions.RecipeDetailsFeatureConstructor />

## Putting it All Together

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
import MealzNavModuleIOS

MealzStandaloneRecipeCardUIKit(
    recipeId: /* your String recipe id */, // or Recipe or criteria 
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    recipeCardConstructor: MealzViewConfig.recipeCardConfig)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS

MealzStandaloneRecipeCardSwiftUI(
    recipeId: /* your String recipe id */, // or Recipe or criteria 
    recipeCardConstructor: MealzViewConfig.recipeCardConfig,
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig)
```
</TabItem>
</Tabs>
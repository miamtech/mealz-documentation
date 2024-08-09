---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '@site/docs/ios/features/_shared/_custom-views/Explanation.md';
import BaseViews from '@site/docs/ios/features/_shared/_custom-views/BaseViews.md';
import CatalogRecipesListGridConfig from '@site/docs/ios/features/_shared/_custom-views/CatalogRecipesListGridConfig.md';
import FavoritesViewOptions from './_custom-views/FavoritesViewOptions.md';
import FavoritesFeatureConstructor from './_custom-views/FavoritesFeatureConstructor.md';
import * as RecipeDetailsViewOptions from '@site/docs/ios/features/recipe-details/_custom-views/';
import ItemSelectorViewOptions from '@site/docs/ios/features/item-selector/_custom-views/ItemSelectorViewOptions.md';

# Customize Views

<Explanation />
<BaseViews />

## Favorites Options

### View Options

<FavoritesViewOptions />
<CatalogRecipesListGridConfig />

### Favorites Feature Constructor

<FavoritesFeatureConstructor />

## Recipe Details Options

### View Options

<RecipeDetailsViewOptions.RecipeDetailsViewOptions />
<RecipeDetailsViewOptions.RecipeDetailsProductViewOptions />
<ItemSelectorViewOptions />

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

public let mealzFavoritesFeature = MealzFavoritesFeatureUIKit(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    favoritesFeatureConstructor: MealzViewConfig.favoritesConfig
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS

MealzFavoritesFeatureSwiftUI(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    favoritesFeatureConstructor: MealzViewConfig.favoritesConfig)
```
</TabItem>
</Tabs>
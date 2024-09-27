---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '../_shared/_custom-views/Explanation.md';
import BaseViews from '../_shared/_custom-views/BaseViews.md';
import MyMealsRecipesListGridConfig from './_custom-views/MyMealsRecipesListGridConfig.md';
import MyMealsViewOptions from './_custom-views/MyMealsViewOptions.md';
import MyMealsFeatureConstructor from './_custom-views/MyMealsFeatureConstructor.md';
import * as RecipeDetailsViewOptions from '../recipe-details/_custom-views/';
import ItemSelectorViewOptions from '../item-selector/_custom-views/ItemSelectorViewOptions.md';

# Customize Views

<Explanation />
<BaseViews />

## My Meals Options

### View Options

<MyMealsViewOptions />
<MyMealsRecipesListGridConfig />

### My Meals Feature Constructor

<MyMealsFeatureConstructor />

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

public let mealzMyMealsFeature = MealzMyMealsFeatureUIKit(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    myMealsFeatureConstructor: MealzViewConfig.myMealsConfig
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS

MealzMyMealsFeatureSwiftUI(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    myMealsContructor: MealzViewConfig.myMealsConfig
)
```
</TabItem>
</Tabs>
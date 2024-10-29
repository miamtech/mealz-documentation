---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '../_shared/_custom-views/Explanation.md';
import BaseViews from '../_shared/_custom-views/BaseViews.md';
import FiltersViewOptions from '../_shared/_custom-views/FiltersViewOptions.md';
import * as CatalogViewOptions from './_custom-views/';
import CatalogRecipesListGridConfig from '../_shared/_custom-views/CatalogRecipesListGridConfig.md';
import MyMealsViewOptions from '../myMeals/_custom-views/MyMealsViewOptions.md';
import MyMealsRecipesListGridConfig from '../myMeals/_custom-views/MyMealsRecipesListGridConfig.md';
import * as RecipeDetailsViewOptions from '../recipe-details/_custom-views/';
import ItemSelectorViewOptions from '../item-selector/_custom-views/ItemSelectorViewOptions.md';

# Customize Views

<Explanation />
<BaseViews />

## Catalog Options

### View Options

<CatalogViewOptions.CatalogViewOptions />
<CatalogViewOptions.CatalogRecipesListViewOptions />
<CatalogViewOptions.CatalogPackageRowViewOptions />
<CatalogViewOptions.CatalogSearchViewOptions />

<CatalogViewOptions.PreferencesViewOptions />
<CatalogViewOptions.PreferencesSearchViewOptions />

<FiltersViewOptions />
<CatalogRecipesListGridConfig />

### Catalog Feature Constructor

<CatalogViewOptions.CatalogFeatureConstructor />

## My Meals Options

### View Options

<MyMealsViewOptions />
<MyMealsRecipesListGridConfig />

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

public let mealzCatalogFeature = MealzCatalogFeatureUIKit(
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    catalogFeatureConstructor: MealzViewConfig.catalogConfig,
    myMealsViewOptions: MealzViewConfig.myMealsView,
    myMealsRecipesListGridConfig: MealzViewConfig.myMealsGridConfig
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS

MealzCatalogFeatureSwiftUI(
    hideTitles: Bool = false, // hide the titles on the top navigation bar
    catalogId: String? = nil, // optionally pass in a catalog ID
    categoryTitle: String? = nil, // with a Catagory Title
    recipeDetailsConstructor: recipeDetailsConstructor,
    catalogFeatureConstructor: catalogFeatureConstructor,
    myMealsRecipesListGridConfig: myMealsRecipesListGridConfig,
    myMealsViewOptions:myMealsViewOptions
    // optionally MealPlannerFeatureConstructor
)
```
</TabItem>
</Tabs>

If you wish you to use the Meal Planner, you can find the configurable settings for the views here:

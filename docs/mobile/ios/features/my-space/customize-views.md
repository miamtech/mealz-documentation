---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '../_shared/_custom-views/Explanation.md';
import BaseViews from '../_shared/_custom-views/BaseViews.md';
import FavoritesViewOptions from '../favorites/_custom-views/FavoritesViewOptions.md';
import OrderHistoryViewOptions from '../order-history/_custom-views/OrderHistoryViewOptions.md';
import OrderDetailsViewOptions from '../order-history/_custom-views/OrderDetailsViewOptions.md';
import MySpaceViewOptions from './_custom-views/MySpaceViewOptions.md';
import MySpaceFeatureConstructor from './_custom-views/MySpaceFeatureConstructor.md';
import MyMealsViewOptions from '../myMeals/_custom-views/MyMealsViewOptions.md';
import * as RecipeDetailsViewOptions from '../recipe-details/_custom-views/';
import ItemSelectorViewOptions from '../item-selector/_custom-views/ItemSelectorViewOptions.md';

# Customize Views

<Explanation />
<BaseViews />

## Favorites Options

### View Options

<FavoritesViewOptions />

## Order History Options

### View Options

<OrderHistoryViewOptions />
<OrderDetailsViewOptions />

## My Meals Options

### View Options

<MyMealsViewOptions />

## My Space Options

### View Options

<MySpaceViewOptions />

### My Space Feature Constructor

<MySpaceFeatureConstructor />

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
import MealziOSSDK

public let mealzMySpaceFeature = MealzMySpaceFeatureUIKit(
    hideTitles: true,
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    mySpaceFeatureConstructor: MealzViewConfig.mySpaceFeatureConstructor,
    navigateToCatalog: { // navigate to Mealz Catalog Feature },
    navigateToClientBasket: { // optional nav to the client basket on MyMeals page }
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealziOSSDK

MealzMySpaceFeatureSwiftUI(
    hideTitles: true,
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    mySpaceFeatureConstructor: MealzViewConfig.mySpaceFeatureConstructor,
    navigateToCatalog: { // navigate to Mealz Catalog Feature },
    navigateToClientBasket: { // optional nav to the client basket on MyMeals page }
)
```
</TabItem>
</Tabs>

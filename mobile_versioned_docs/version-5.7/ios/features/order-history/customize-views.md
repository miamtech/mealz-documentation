---
sidebar_position: 2
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '../_shared/_custom-views/Explanation.md';
import BaseViews from '../_shared/_custom-views/BaseViews.md';
import OrderHistoryViewOptions from './_custom-views/OrderHistoryViewOptions.md';
import OrderDetailsViewOptions from './_custom-views/OrderDetailsViewOptions.md';
import OrderHistoryFeatureConstructor from './_custom-views/OrderHistoryFeatureConstructor.md';
import * as RecipeDetailsViewOptions from '../recipe-details/_custom-views/';
import ItemSelectorViewOptions from '../item-selector/_custom-views/ItemSelectorViewOptions.md';

# Customize Views

<Explanation />
<BaseViews />


## Order History Options

### View Options

<OrderHistoryViewOptions />
<OrderDetailsViewOptions />


### Order History Feature Constructor

<OrderHistoryFeatureConstructor />

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

public let mealzOrderHistoryFeature = MealzOrderHistoryFeatureUIKit(
    hideTitles: true,
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    orderHistoryFeatureConstructor: MealzViewConfig.orderHistoryFeatureConstructor
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealziOSSDK

MealzOrderHistoryFeatureSwiftUI(
    hideTitles: true,
    recipeDetailsConstructor: MealzViewConfig.recipeDetailsConfig,
    orderHistoryFeatureConstructor: MealzViewConfig.orderHistoryFeatureConstructor
)
```
</TabItem>
</Tabs>

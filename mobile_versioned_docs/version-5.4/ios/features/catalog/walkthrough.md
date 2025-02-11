---
sidebar_position: 1
label: "Overview"
---

import TimeIcon from '@site/src/components/TimeIcon';
import Prerequisites from '../_shared/Prerequisites.md';
import LinkToCustomization from '../_shared/LinkToCustomization.md';
import * as CatalogOverviews from '@site/docs/mobile/shared/page-overviews/Catalog/';
import * as BasketOverviews from '@site/docs/mobile/shared/page-overviews/Basket/';
import * as GeneralOverviews from '@site/docs/mobile/shared/page-overviews/GeneralPages/';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Catalog Overview

The Catalog feature is the bread & butter of Mealz. 
The Catalog is all of our Recipes, with additional features & options to filter, search, add dietary restrictions, & a whole lot more. 

<TimeIcon titleText="Time to read:" timeText="30 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="8 hours" /><br />
<TimeIcon titleText="Time for full customization:" timeText="2.5 weeks" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

The Catalog is made up of 8 base pages, with an additional 2 more being optional. Each page has its own functionality & is customizable, so that each component fits the appearance of your application.

### Categories Page
<CatalogOverviews.CatalogView platform="ios"/>

### Catalog Results
<CatalogOverviews.CatalogResults platform="ios"/>

### Filters
<CatalogOverviews.Filters platform="ios"/>

### Catalog Search
<CatalogOverviews.CatalogSearch platform="ios"/>

### Recipe Details
<GeneralOverviews.RecipeDetails platform="ios"/>

### Sponsor Details
<GeneralOverviews.SponsorDetails platform="ios"/>

### My Meals
<BasketOverviews.MyMeals platform="ios"/>

### Item Selector
<BasketOverviews.ItemSelector platform="ios"/>

### Preferences - Optional
<CatalogOverviews.Preferences platform="ios"/>

### Preferences Search - Optional
<CatalogOverviews.PreferencesSearch platform="ios"/>

## Steps

We've made using Mealz as simple as possible. 
All you'll need to do is import `MealziOSSDK`.

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">
We use a UIKit coordinator to have proper navigation functionality & experience.
At a minimum, you'll just need to pass in a `navigationController`.

```swift
import MealziOSSDK

let navController = // your nav controller from the button or tab opening view
let baseConstructor = MealzBaseNavCoordinator.Constructor(
    navigationController: navController
)
        
let mealzCatalogCoord = CatalogFeatureNavCoordinator(
    baseConstructor: baseConstructor,
    recipeDetailsConstructor: RecipeDetailsFeatureConstructor()
)

// show CatalogView
mealzCatalogCoord.showCatalog()
```
</TabItem>
<TabItem value="swiftUI">
All the navigation of the Catalog Feature is provided by us (using a UIKit controller).
Our wrapper is a one line that you can add to your project as a tab, modal, or standalone page.

```swift
import MealziOSSDK

VStack { // VStack is optional, you can this like any SwiftUI component
   MealzCatalogFeatureSwiftUI()
}

```
</TabItem>
</Tabs>
---
sidebar_position: 1
label: "Walkthrough"
---

import MyMeals from '@site/docs/mobile/shared/page-overviews/Basket/MyMeals';
import ItemSelector from '@site/docs/mobile/shared/page-overviews/Basket/ItemSelector';
import RecipeDetails from '@site/docs/mobile/shared/page-overviews/GeneralPages/RecipeDetails';
import SponsorDetails from '@site/docs/mobile/shared/page-overviews/GeneralPages/SponsorDetails';
import Prerequisites from '../_shared/Prerequisites.md';
import LinkToCustomization from '../_shared/LinkToCustomization.md';
import TimeIcon from '@site/src/components/TimeIcon';

# My Meals Walkthrough

The MyMeals feature is the standalone page where users see the recipes in their basket.
Most likely, if you integrated the Catalog Feature, you've already created this page.
This tutorial will just help you create a standalone page.

<TimeIcon titleText="Time to read:" timeText="5 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="1 hour" /><br />
<TimeIcon titleText="Time for full customization:" timeText="2 hours" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

### MyMeals
<MyMeals platform="ios"/>

### ItemSelector
<ItemSelector platform="ios"/>

### RecipeDetails
<RecipeDetails platform="ios"/>

### SponsorDetails
<SponsorDetails platform="ios"/>

## Customization
<LinkToCustomization />

## Next Steps

After integrating MyMeals, you have a standalone page for your users, most likely in their Account.
If you'd like to provide another useful feature for your users, you can add `Meal Planner`.

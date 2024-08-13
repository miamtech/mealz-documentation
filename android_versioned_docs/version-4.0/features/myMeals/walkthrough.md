---
sidebar_position: 1
label: "Walkthrough"
---

import MyMeals from '@site/docs/shared/page-overviews/Basket/MyMeals';
import ItemSelector from '@site/docs/shared/page-overviews/Basket/ItemSelector';
import RecipeDetails from '@site/docs/shared/page-overviews/GeneralPages/RecipeDetails';
import SponsorDetails from '@site/docs/shared/page-overviews/GeneralPages/SponsorDetails';
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
<MyMeals platform="android"/>

### ItemSelector
<ItemSelector platform="android"/>

### RecipeDetails
<RecipeDetails platform="android"/>

### SponsorDetails
<SponsorDetails platform="android"/>

[//]: # (## Steps)

[//]: # ()
[//]: # (### 1. Create MyMeals page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # ()
[//]: # (The only new aspect is navigating to the Catalog Feature when the user does not have any recipes in their basket.)

[//]: # ()
[//]: # (The first thing to be done is to create a MyMealsViewController or MyMealsView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating to the Catalog Feature.)

[//]: # (For example, you may want to pass a Navigation Delegate or a binding of the current tab.)

[//]: # (<SharedSteps.ImplementMyMeals />)

[//]: # ()
[//]: # (### 2. Create ItemSelector page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # (You have nothing more to do for this.)

[//]: # ()
[//]: # (The first thing to be done is to create a ItemSelectorViewController or ItemSelectorView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating back to the MyMeals page.)

[//]: # (<SharedSteps.ImplementItemSelector />)

[//]: # ()
[//]: # (### 3. Create Recipe Details page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # (You have nothing more to do for this.)

[//]: # ()
[//]: # (The first thing to be done is to create a RecipeDetailsViewController or RecipeDetailsView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating back to the MyMeals page.)

[//]: # (The navigation to the basket can be ignored as that Call To Action will not be shown as the product is already in the basket.)

[//]: # (<SharedSteps.ImplementRecipeDetails />)

[//]: # ()
[//]: # (### 4. Create Sponsor Details page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # (You have nothing more to do for this.)

[//]: # ()
[//]: # (The first thing to be done is to create a SponsorDetailsViewController or SponsorDetailsView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating back to the MyMeals page.)

[//]: # (<SharedSteps.ImplementSponsorDetails />)

## Customization
<LinkToCustomization />

## Next Steps

After integrating MyMeals, you have a standalone page for your users, most likely in their Account.
If you'd like to provide another useful feature for your users, you can add `Meal Planner`.

---
sidebar_position: 1
label: "Walkthrough"
---

import ImageWithText from '@site/src/components/ImageWithText';
import TimeIcon from '@site/src/components/TimeIcon';
import Prerequisites from '@site/docs/ios/features/_shared/Prerequisites.md';
import LinkToCustomization from '@site/docs/ios/features/_shared/LinkToCustomization.md';
import * as MealPlannerPage from '@site/docs/shared/page-overviews/MealPlanner/';
import * as CatalogOverviews from '@site/docs/shared/page-overviews/Catalog/';
import * as GeneralOverviews from '@site/docs/shared/page-overviews/GeneralPages/';
import ItemSelector from '@site/docs/shared/page-overviews/Basket/ItemSelector';
import * as SharedSteps from '@site/docs/ios/features/_shared/_steps/';
import * as Steps from './_walkthrough/_steps';

# Meal Planner Walkthrough

The Meal Planner feature returns recipes to users based on a certain budget, number of guests, & number of recipes.
This is our `Anti-Inflation` feature. 

<TimeIcon titleText="Time to read:" timeText="20 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="4 hours" /><br />
<TimeIcon titleText="Time for full customization:" timeText="1.5 weeks" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

The Meal Planner is made up of 9 base pages, where 4 of them are already implemented if you have implemented Catalog Feature.
It also has a Call To Action that can be implemented inside the Catalog Feature directly.

### Meal Planner CTA
<MealPlannerPage.MealPlannerCTA platform="ios"/>

### Meal Planner Form
<MealPlannerPage.MealPlannerForm platform="ios"/>

### Meal Planner Results
<MealPlannerPage.MealPlannerResults platform="ios"/>

### Meal Planner Recipe Picker
<MealPlannerPage.MealPlannerRecipePicker platform="ios"/>

### Meal Planner Basket
<MealPlannerPage.MealPlannerBasket platform="ios"/>

### Meal Planner Recap
<MealPlannerPage.MealPlannerRecap platform="ios"/>

### Filters
<CatalogOverviews.Filters platform="ios"/>

### Recipe Details
<GeneralOverviews.RecipeDetails platform="ios"/>

### Sponsor Details
<GeneralOverviews.SponsorDetails platform="ios"/>

### Item Selector
<ItemSelector platform="ios"/>

## Steps


### 1. Create Files & ViewControllers/Pages
<Steps.CreateFiles />

### 2. Implement MealPlannerCTA
<Steps.ImplementCTA />

### 3. Implement MealPlannerForm
<Steps.ImplementForm />

### 4. Implement MealPlannerResults
<Steps.ImplementResults />

### 5. Implement MealPlannerRecipePicker
<Steps.ImplementRecipePicker />

### 6. Implement Filters
<SharedSteps.ImplementFilters />

### 7. Implement RecipeDetails
<SharedSteps.ImplementRecipeDetails />

### 8. Implement SponsorDetails
<SharedSteps.ImplementSponsorDetails />

### 9. Implement MealPlannerBasket
<Steps.ImplementBasket />

### 10. Implement ItemSelector
<SharedSteps.ImplementItemSelector />

### 11. Implement MealPlannerRecap
<Steps.ImplementRecap />

## Customization
<LinkToCustomization />

## Next Steps

After integrating Catalog, you have the bulk of the Miam functionality in your iOS application. 
However, we also have other features & standalones pages. 
You can integrate a standalone `MyMeals` page, `Favorites` page, or our full feature `Meal Planner`.

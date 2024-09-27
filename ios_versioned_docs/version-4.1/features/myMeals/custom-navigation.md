---
sidebar_position: 3
label: "Custom Navigation"
---

import * as SharedSteps from '../_shared/_steps/';

# Custom Navigation

If you don't want to use the provided Mealz navigation, you can recreate the navigation yourself.
We have documented a simple walkthrough, but feel free to implement your practice of Coordinators.

## Steps

### 1. Create MyMeals page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.

The only new aspect is navigating to the Catalog Feature when the user does not have any recipes in their basket.

The first thing to be done is to create a MyMealsViewController or MyMealsView standalone page.
The only parameters this page may expect are those related to navigating to the Catalog Feature.
For example, you may want to pass a Navigation Delegate or a binding of the current tab.
<SharedSteps.ImplementMyMeals />

### 2. Create ItemSelector page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a ItemSelectorViewController or ItemSelectorView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
<SharedSteps.ImplementItemSelector />

### 3. Create Recipe Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a RecipeDetailsViewController or RecipeDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
The navigation to the basket can be ignored as that Call To Action will not be shown as the product is already in the basket.
<SharedSteps.ImplementRecipeDetails />

### 4. Create Sponsor Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a SponsorDetailsViewController or SponsorDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
<SharedSteps.ImplementSponsorDetails />
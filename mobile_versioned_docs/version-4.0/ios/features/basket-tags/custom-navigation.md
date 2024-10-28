---
sidebar_position: 3
label: "Custom Navigation"
---

import AddBasketTags from './_walkthrough/AddBasketTags.md'
import ImplementSponsorDetails from '../_shared/_steps/ImplementSponsorDetails.md';
import ImplementRecipeDetails from '../_shared/_steps/ImplementRecipeDetails.md';

# Custom Navigation

If you don't want to use the provided Mealz navigation, you can recreate the navigation yourself.
We have documented a simple walkthrough, but feel free to implement your practice of Coordinators.

## Steps

### 1. Add Basket Tag to your product
<AddBasketTags />

### 2. Create Recipe Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a RecipeDetailsViewController or RecipeDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
The navigation to the basket can be ignored as that Call To Action will not be shown as the product is already in the basket.
<ImplementRecipeDetails />

### 3. Create Sponsor Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a SponsorDetailsViewController or SponsorDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
<ImplementSponsorDetails />
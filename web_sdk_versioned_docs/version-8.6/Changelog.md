---
sidebar_position: 11
---

## Changelog

## v8.6.7 - [15/11/2024]

Merged 8.5.8 in 8.6 -> See v8.5.8 for changes

## v8.6.6 - [05/11/2024]

Merged 8.3.13 in 8.6 -> See v8.3.13 for changes

## v8.6.5 - [14/10/2024]

#### Fixed:
- *add-recipe-card*:
  - Fix 2px flickering because of its border size
- *basket-transfer*:
  - cachedRecipe check could go for an infinite loop if cachedRecipe was set in sessionStorage from outside of the SDK before the check
  - Fixed transfer didn't wait for POS to be initialised before checking for forcing POS
- *basket-service*:
  - The route for updating the pricebook could empty Mealz' basket
  - The route for updating the pricebook could be called with a falsy pricebook name

#### Internal:
- *basketService*:
  - Removed useless param "merge_with" on refresh current basket route
- *packagesService*:
  - removed unused filter user_preferences

Merged 8.3.12 in 8.6 -> See v8.3.12 for changes

## v8.6.4 - [03/10/2024]

Merged 8.5.5 in 8.6 -> See v8.5.5 for changes

## v8.6.3 - [09/09/2024]

Merged 8.3.10 in 8.6 -> See v8.3.10 for changes

#### Updated:
- *recipe-details-infos*:
  - Now when no recipe info (difficulty, preparation time, cooking time) is available, its badge is not displayed

- *recipe-filters*:
  - Updated behaviour where confirming filter without selecting any filter option will go to catalog list page nonetheless

#### Fixed:
- *recipe-details*:
  - Fixed issue where when opening a recipe modal without having any POS selected, the products-picker component was still shown in loading state

- *catalog-toolbar*:
  - added toolbar anchor width to prevent intersectionObserver glitches

## v8.6.2 - [03/09/2024]

Merged 8.5.2 in 8.6 -> See v8.5.1 & v8.5.2 for changes

#### Breaking changes:
- *window.miam*:
  - pos.load now needs to be called with an undefined or null value if the user has not chosen a store

#### Fixed:
- *recipe-catalog*:
  - categories now wait for the pos to have been initialized to fetch the categories, to avoid to call the request without the primary_completion_perc param (which filters recipes that do not have their primary ingredients available in the store) if the pos is initialized after the call
  - Fix first catalog category displayed a blank space if empty

#### Internal:
- *PointOfSaleService*:
  - Added a getter for POS that doesn't emit until the pos is initialized and truthy

## v8.6.1 - [27/08/2024]
#### Added:
- *SEO*:
  - Added canonical link handler for displayRecipe query params

## v8.6.0 - [01/08/2024]

#### Added:
- *recipe-catalog*:
  - New optional input maxRecipesPerCategory to reduce recipes fetched per category
  - New optional input displayRecipeVariant to change displayed recipe variant in the recipe-catalog
  - Fixed some mobile breakpoints were set to 1025px instead of 1024px
- *recipe-details*
  - Added the "POS not found" use-case to the 'no-pos' view in the recipe details.
- *SEO*:
  - Added optional SEO support.
  - Added meta tags on all recipe-details, with a robots: "no-index, no-follow" meta tag
  - Added JSON-LD format recipes-specific structured data when robots is set to 'index,follox'
- *window.miam*
  - *features.enableSeo*: Turn all robots meta on proprietary recipes to "index, follow"

#### Fixed:
- *window.miam*
  - *hookCallback*: Is no longer called with isLogged to true when an authless user id is set

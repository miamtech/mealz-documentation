---
sidebar_position: 11
---

## Changelog

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

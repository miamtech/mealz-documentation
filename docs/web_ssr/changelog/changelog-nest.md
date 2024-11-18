---
sidebar_position: 1
---

# Mealz SSR API Changelog 

## 1.1.0 [15/11/2024]

#### Added:
- Added `mealz-session-id` to request headers
- Added Redis configuration for caching
- *catalog-category*
  - Implemented empty state for scenarios where no recipes match the selected criterias.
  - Added search functionality
  - Integrated user preferences
- *catalog-favorites*
  - Added search functionality
- *catalog-home*
  - Integrated user preferences
- *catalog-list*
  - Added component + controller for JS injection
- *catalog-toolbar*
  - Added preferences badge count

#### Updated:
- *catalog-toolbar*
  - Removed unused filters
- *catalog-favorites*
  - Removed preferences button

#### Internal:
- Added a cache controller to manage Redis cache through ng-miam-sdk
- Enabled caching for `getBasket`, `getPointOfSaleByExtId`, `getByRecipeId`, `getRecipeById`, `getRecipePricing`

#### Fixed:
- *catalog-home*:
  - Added back arrow to "See All" button.
- *generate-authless-token*
  - Added error handling for missing or invalid supplier token
- *http.service*
  - Added null checks for supplier data to avoid errors when supplierId is undefined or null
- *point-of-sales.service*
  - Added a check to ensure `pos` is defined before attempting to access `id`

## 1.0.2 [08/11/2024]

#### Added:
- Added logs for missing required query parameters

#### Fixed:
- *catalog*:
  - Made the *display_recipe_variant* query paramater optional

## 1.0.1 [04/11/2024]

#### Updated:
- *urls*:
  - Moved every routes from v0 to v1

#### Fixed:
- *recipe-card*
  - Fixed suggested recipe-card

## 1.0.0 [24/10/2024]

#### Breaking changes:
- *window.miam*:
  - Renamed to window.mealz

#### Added:
- *catalog-category*
  - Added component + controller for JS injection
- *catalog-favorites*
  - Added component + controller for JS injection
- *catalog-home*
  - Added controller for JS injection
- *like-button*
  - Added controller for JS injection
- *recipe-card*
  - Added controller for JS injection
- *recipe-card-cta*
  - Added controller for JS injection
- *recipe-pricing*
  - Added controller for JS injection
- *catalog-breadcrumbs*
  - Added component
- *catalog-toolbar*
  - Added component
- *my-meals-button*
  - Added component
    -*http.service*
- Now handles errors and build header from this service, throw error when category_id is required but not provided

#### Updated:
- *catalog*:
  - Now fetches recipe sponsor on catalogs pages
- *catalog-category*:
  - update routes from /catalog/category/ID to /catalog/category?id=ID
- *recipe-card*:
  - if no suggestion is given for recipe in shelf, throws NotFoundException
- *ng-miam-sdk*:
  - updated to 9.0.1 on prod and uat

#### Fixed:
- *catalog-favorites*:
  - Fix new logic on like button

## 0.2.1 [23/09/2024]

#### Fixed:
- *recipe-card*:
  - Fixed double basket-current call

#### Internal:
- Added performance log to measure requests times

## 0.2.0 [20/09/2024]

#### Added:
- *point-of-sales-service*:
  - Added point-of-sales service with method getPointOfSaleByExtId
- *nextJS-demo*:
  - Added NextJS Demo to project using the SSR API
- *catalog*:
  - Initiated recipe catalog with home page
- *styles*:
  - Added routes to fetch components styles individually to add them to `<head>`
- *i18n*:
  - Added I18n for catalog-home, my-meals-button, recipe-pricing and recipe-card-cta

#### Fixed:
- *recipe-pricing*:
  - Recipe pricing initial data was an object rather than a string with the value

#### Internal:
- Updated mealz-component version to 0.4.0
- Added Nest built-in logger to project with some errors handling

## 0.1.1 [03/09/2024]

#### Fixed:
- env config for uat & prod

## 0.1.0 [30/08/2024]

#### Added
- *like-button*:
    - Added a route for the component, and the associated services and views
- *recipe-card*:
    - Added a route for the component, and the associated services and views
- *recipe-pricing*:
    - Added a route for the component, and the associated services and views
- *i18n*:
    - POC of i18n implementation, not enough text in the served components to use yet
- *routes*
    - Added a generate-authless-token route to fetch an authless token for loggued out users
- *versioning*:
    - Added basic versioning handler on url

#### Internal
- Added baskets service
- Added recipes service
- Added recipe-likes service
- Added supplier service
- Added user service
- Added scripts to download SDK Web-C lib and style files to each components
- Added environment files for dev, uat and prod

---
sidebar_position: 1
---

# Mealz SSR API Changelog 

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

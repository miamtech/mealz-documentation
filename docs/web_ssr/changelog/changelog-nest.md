---
sidebar_position: 1
---

# Mealz SSR API Changelog 
## 0.3.0 [30/08/2024]

**All components except store-locator are now the hydration & lifecycle of the corresponding HTML returned by the routes from Mealz SSR API**
**The components lifecycle use webc-miam@9.0 via the interface window.mealzInternal**

#### Added:
- *store-locator*:
    - Added supplierName property to posIdChange event
- *recipe-card*:
    - Added component with its hydration and lifecycle
- *recipe-cta*:
    - Added component with its hydration and lifecycle
- *recipe-pricing*:
    - Added component with its hydration and lifecycle
- *like-button*:
    - Added component with its hydration and lifecycle


## 0.3.0-alpha.1 - [17/07/2024]
#### Fixed:
- put "vite-plugin-static-copy" package at right place

#### Updated:
- gitlab-ci now build like-button and recipe-card

## 0.3.0-alpha.0 - [17/07/2024]

#### Added:
- *like-button*:
    - component first commit
- *recipe-card*:
    - component first commit

## 0.2.1 - [16/07/2024]

#### Fixed:
- *store-locator*:
    - Fixed nested CSS doesn't work for tag names

## 0.2.0 - [16/07/2024]

#### Added:
- *store-locator*:
    - When loading POS, displays a loader in the pos list
    - No POS found indicator
    - New radius selector for POS search
    - New supplier selector to filter results
    - Can now submit search using keyboard (Android / iOS / Web)

#### Fixed:
- *store-locator*:
    - Updated the search radius default value from 10 km to 25 km.
    - geolocationCoordinates input type changed to GeolocationPosition (was a custom Coordinates interface before)
    - Map initialization now waits for Leaflet to be fully loaded
    - Adjusted CSS for store-locator mobile view

## 0.1.2

#### Added
- *store-locator*:
    - Geolocation

## 0.1.1

#### Added
- *store-locator*:
    - Added some css classes to scope on elements
    - Added miam-ds to component

## 0.1.0

#### Added
- *store-locator* component

#### Internal
- Added a demo page to display the store-locator

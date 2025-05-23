---
sidebar_position: 2
---

# Mealz components Changelog

## 1.3.0 [23/05/2025]

#### Added:
- *history-order-expanded*:
  - Added new component for the new history display in list mode

#### Fixed:
- *history-order*:
  - Fixed orders were overlapping
  - Fixed gap between "Ordered on" and the date

## 1.2.8 [25/04/2025]

#### Fixed:
- *my-meals-button*:
  - The arrow could come out of the button of mobile resolutions
- Removed remaining occurences of miam-ds links as to not have conflicts with the version served by SSR-API

## 1.2.7 [18/04/2025]

#### Fixed:
- *catalog-toolbar*:
  - Remove "navigate back" on back button as already set in HTML and was triggering navigate back twice  

## 1.2.6 [18/04/2025]

#### Updated:
- *catalog-favorites*:
  - Now if unliking a recipe on the page or on the recipe-details view, the recipe will be removed from the list 

#### Fixed:
- *load-more*:
  - Fixed issue where load-more was based on the user scroll position from the bottom of the window and not from the list element

## 1.2.5 [28/03/2025]

#### Fixed:
- *catalog-favorites*:
  - Fixed init state was incorrectly set, now the hidden state of the elements are set on prerender and only updated on render
  - Removed unused loader on start

## 1.2.4 [21/03/2025]

#### Fixed:
- Recipe-cards CSS was lacking the rules to remove margins on p tags that are in the catalog CSS
- *catalog-load-more*
  - The auto-load more recipes on scroll was triggered even when no more recipes were available
- *catalog-history*:
  - The history-order cards now use a CSS variable for their width that uses the same base value as the recipe-cards by default
- *catalog-toolbar*:
  - Back button now does a native back action instead of redirecting to the home page
- *recipe-pricing*:
  - Prevent price displaying `NaN` When price starting data is null

## 1.2.3 [31/01/2025]

#### Internal
- *catalog-category*
  - Added pageview event
- *catalog-favorites*
  - Added pageview event
- *catalog-home*
  - Added pageview event
  - Added category.show event, triggered when category is 80% in viewport for 1s
- *catalog-toolbar*
  - Added search event

## 1.2.2 [10/01/2025]

#### Added:
- *catalog*:
  - Added category.display event on click on "See all" / the title of a category

#### Updated:
- *headers*:
  - requests for `load-more` and `drawer` now uses authlessId if needed in authorization header

#### Fixed:
- *catalog-load-more*
  - Fixed the auto-load more recipes on scroll for unconnected users
- *toolbar*:
  - Added CSS class for toolbar to do full width on Firefox
- *store-locator*:
  - In getByCoordinates, lat and lng parameters were inverted

#### Internal:
- Synchronize the session id with SDK during initialization for the following components:
  - *catalog-category*
  - *catalog-favorites*
  - *catalog-history*
  - *catalog-home*
  - *catalog-list*
  - *recipe-card*

## 1.2.1 [20/12/2024]

#### Added:
- *catalog*
  - Added support for store-locator
- *recipe-promotion*
  - Added css for component
- *promotions-banner*
  - Added css for component, is hidden by default and must be displayed manually
- *catalog-history*
  - Added component
  - Open drawer of the clicked order
  - Added "no history" view
- *catalog-tabs*
  - Added component
- *drawer*
  - Added component
- *history-order*
  - Added component
- *recipe-card*
  - Added style for a new variant

#### Updated:
- *recipe-card*
  - Updated some css to match mock ups
- *viewport-listener*:
  - Handle unsubscription to prevent memory leaks

#### Fixed:
- *catalog-favorites*
  - Fixed an infinite loader issue when the user hadn't marked any recipes as favorites

## 1.2.0 [13/12/2024]

#### Updated:
- Removed the `starting-data` attribute from HTML after it has been successfully read for the following components:
  - *catalog-category*
  - *catalog-favorites*
  - *catalog-home*
  - *catalog-list*
  - *catalog-toolbar*
  - *recipe-card-cta*
  - *recipe-pricing*

#### Fixed:
- Fixed margins & selectors after semantic tags were added in SSR-API
- *catalog-load-more*
  - Catch failed requests and log to console instead of displaying in HTML

#### Internal
- *recipe-card*
  - Handle `path` and `categoryId` in starting data for analytics
  - New recipe.show event sent when recipe-card is 80% in viewport for 1s
- *catalog-toolbar*
  - Handle `path` in starting data for analytics
- *my-meals-button*
  - Handle starting data with `path` for analytics
- *viewport-listener*:
  - Create class

## 1.1.2 [29/11/2024]

#### Fixed:
- *catalog*
  - Fix only the home page had a padding at the bottom

## 1.1.1 [25/11/2024]

#### Fixed:
- *catalog-favorites*
  - Fix infinite loader

## 1.1.0 [22/11/2024]

#### Added:
- *catalog-favorites*
  - Added auto-load more recipes on scroll
- *catalog-list*
  - Added auto-load more recipes on scroll
- *catalog-toolbar*
  - Added preferences loader

#### Updated:
- *catalog-toolbar*
  - Reset stickyObserver when new value is given using mealz.setStickyHeaderHeight(...)

#### Internal:
- *catalog-load-more*
  - Added component to group load more functionality

## 1.0.2 [15/11/2024]

#### Added:
- *catalog*
- Added support for preferences

#### Updated:
- *catalog-toolbar*
  - Removed unused filters

#### Fixed
- *catalog-home*:
  - Added back arrow to "See All" button
  - Fixed gap issue in category header for smaller screens
- *like-button*:
  - Corrected icon color on hover
- *recipe-card*
  - Fixed recipe-card width for smaller screens
- *recipe-pricing*:
  - Encapsulated hidden and active classes

## 1.0.1 [31/10/2024]

merged 0.6.1 into 1.0. See 0.6.1 for changes

## 1.0.0 [24/10/2024]

#### Breaking changes:
- *window.miam*:
  - Renamed to window.mealz

#### Updated:
- *catalog*:
  - created catalog.css for shared styles between catalog components

#### Fixed:
- *like-button*:
  - State of button was not updated properly

## 0.5.0 [03/10/2024]

#### Added:
- *store-locator*:
  - Added loaders on the POS select buttons after selecting a POS
  - Added searchChange output
- *catalog-category*
  - Added component
- *catalog-favorites*
  - Added component
- *catalog-breadcrumbs*
  - Added component
- *catalog-toolbar*
  - Added component

#### Fixed:
- *like-button*
  - now listens to recipe-like changes

## 0.4.0 [20/09/2024]

#### Added:
- *catalog-category-home*:
  - Added component with its hydration and lifecycle
- *recipe-pricing*
  - Added fetch on scroll

#### Fixed:
- *recipe-card-cta*
  - Fixed state didn't update correctly

## 0.3.0 [20/09/2024]

**All components except store-locator are now the hydration & lifecycle of the corresponding HTML returned by the routes from Mealz SSR API**
**The components lifecycle use webc-miam@9.0 via the interface window.mealzInternal**

#### Added:
- *store-locator*:
  - Added supplierName property to posIdChange event
- *recipe-card*:
  - Added component with its hydration and lifecycle
- *recipe-card-cta*:
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

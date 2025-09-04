---
sidebar_position: 12
---

## Changelog

## v9.2.7 - [01/09/2025]

#### Fixed:
- *recipe-details*:
  - Update product-cards when the selected-item of an ingredient changes after modifying the number of guests

## v9.2.6 - [04/08/2025]

#### Fixed:
- Event analytics url for recipe.add

## v9.2.5 - [23/06/2025]

#### Fixed:
- condition related to pricebook deprecated

## v9.2.4 - [23/06/2025]

#### Removed:
- *pricebook*:
  - No more used, we removed all related code

## v9.2.3 - [10/06/2025]

#### Fixed:
- Accessibility fixes on recipes picture aria-hidden, badge alt and role lists

## v9.2.2 - [09/06/2025]

#### Updated:
Improved accessibility across components (recipe-details, counter-input, like-button, modal ...) following French RGAA standards

Merged 9.1.15 in 9.2 -> See v9.1.15 for changes

## v9.2.1 - [31/03/2025]

#### Fixed:
- *recipe-card*:
  - Generic card didn't redirect to catalog

## v9.2.0 - [28/03/2025]

#### Added:
- *recipe-card*:
  - Added a generic card to redirect to the catalog instead of leaving the card empty when no recipe has been found
- *recipe-catalog*:
  - Added new "All recipes" button

#### Fixed:
- *recipe-catalog*:
  - mandatory completion filters were added on all filters instead of in-place

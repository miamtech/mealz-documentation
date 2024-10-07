---
sidebar_position: 11
---

## Changelog

## v8.7.0 - [03/10/2024]

#### Added:
- *store-locator*:
  - Added search.store event
- *no-supplier-onboarding*:
  - Added an onboarding popup for users who have never used the "no-supplier" experience (i.e. Mealz for recipe websites)
- *warning-store-locator*:
  - Added a temporary warning popup for suppliers for which deeplinks are a problem
- *window.miam*:
  - Added `basket.overrideTransferUrl: (url: string) => void` for testing purposes to override the transfer url for the basket transfer

#### Updated:
- *window.miam*:
  - Added window.miam.setAbTestKey
- *analytics-service*:
  - Removed Google Optimize

#### Fixed:
- *basket-preview-block*:
  - Opening the basket preview without a selected point of sale was sending the pageview event and the store locator event
- *recipe-details*:
  - Opening the recipe details without a selected point of sale was sending the pageview event and the store locator event

#### Internal
- Updated mealz-components to 0.5

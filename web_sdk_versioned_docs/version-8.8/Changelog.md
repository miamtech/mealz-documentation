---
sidebar_position: 11
---

## Changelog

## v8.8.2 - [15/11/2024]

Merged 8.5.8 in 8.8 -> See v8.5.8 for changes

## v8.8.1 - [05/11/2024]

Merged 8.3.13 in 8.8 -> See v8.3.13 for changes
Updated mealz-component to 0.6

## v8.8.0 - [31/10/2024]

#### Updated:
- *basket-transfer*:
  - Now opens "My meals" drawer after the transfer is complete
  - Changed the wording for the warning-store-locator component
- *no-supplier-onboarding*:
  - Changed the wording and moved the text above the image
- *miam-ds*:
  - Changed --miam-ds-color-neutral-black fallback from #1F3543 to #0F191F

#### Fixed:
- *replace-item*:
  - ingredients quantity shown now updates on number of guests
- *window.miam*:
  - *user.setLocation* now correctly stops the store-locator loading state if called with undefined or any other falsy value

#### Internal:
- Added an environment variable for mealz-components base url

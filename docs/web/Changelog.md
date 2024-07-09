---
sidebar_position: 11
---

## Changelog

## v8.4.0 - [08/07/2024]

#### Added:
- *list-scan*: 
  - Reimplemented the feature as it didn't work since version 7.0.0 && redesigned it to match other features (Notably the "Product" view from the no-supplier experience)
- *product-addiction-card*:
  - Added a css class on the title of the card
  - Removed view encapsulation on the component which made it impossible to override the CSS

#### Removed:
- *overlay-button*: removed component - unused
- *ingredient-list*: removed component - did not work

#### Fixed:
- *basket*: when adding or removing products, products that weren't linked to an ingredient were all skiped except the last one **(use-case specific to the list-scan feature)**
- *basket-synchronization*: was running in double if the supplier changed value
- *analytics*: removed_products analytics could break if a basket-entry in basket was unavailable **(use-case specific to the list-scan feature)**
- *replace-item*: Broken view when trying to replace an unavailable product whose basket-entry was in basket **(use-case specific to the list-scan feature)**

#### Internal:
- *list-scan*: moved most of the logic to a dedicated service
- *demo-app*: added a tab for the list-scan feature
---
sidebar_position: 11
---

## Changelog

## v8.5.0 - [16/07/2024]

#### Added:
- *basket-transfer-modal*:
  - Added a new component basket-transfer-modal which appears on affiliated website after the user is redirected to the supplier's website. The modal acts disappears when the user clicks on the CTA if the basket transfer was completed; if not, it asks the user if they want to abort the transfer and add new recipes or if they want to complete the transfer, in which case they are redirected again.
- *products-picker*:
  - Legal mentions for alcohol recipes [See visual](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/8.5/RecipeDetailsLegalNotice.png)
- *window.miam.features.collapseUnavailableProductsByDefault*:
  - Added method to enable collapsing of unavailable products by default
- *window.miam.supplier.getAffiliateSuppliers*:
  - Added new method to retrieve affiliated suppliers

#### Updated:
- *window.miam.analytics* eventSent$:
  - **entry.add**: Added **product_quantity** prop
  - **entry.delete**: Added **product_quantity** prop

#### Fixed:
- *affiliate basket transfer*:
  - Basket transfer could start before supplier/pos has been set, which would always call forcePosCallback
  - Basket transfer could sometimes end in an infinite loop of current basket refreshes
  - Added support for custom url param "magasin_id"
- *window.miam*:
  - user.setLocation now takes a GeolocationPosition as param
- *openPreview*:
  - calls openBasket with a default EventTrace that does not crash
- *i18n*:
  - Added 128 missing EN translations
- *miam-interface*:
  - Added missing JSDoc

#### Internal:
- *store-locator*:
  - Update to 0.1.3: Removed Coordinates interface as store-loactor now takes a GeolocationPosition as input
- *basket*:
  - 'status' attribute was added to basket model && to sparse fields in basket service
- *window.miam.pos.getByAddress*:
  - Added a suppliers[] parameter
- *window.miam.pos.getByCoordinates*
  - Added a suppliers[] parameter
- *point-of-sales-service*:
 - Added a suppliers[] parameter to getByAddress and getByCoordinates methods to filter the suppliers
- *recipe-details service*
  - Add a getter for checking alcohol presence in recipes
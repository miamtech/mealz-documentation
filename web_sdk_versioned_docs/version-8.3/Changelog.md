---
sidebar_position: 11
---

## Changelog

## v8.3.8 - [28/06/2024]

#### Added:
- *store-locator*:
  - Provided a listener on user coordinates 
- *point-of-sales*:
  - Created getByCoordinates method to retrieve POS around coordinates

#### Fixed:
- *preferences-search*:
  - Replaced fill-available css attribute as deprecated and showing warnings
- *recipe-modal*:
  - (from 8.2.6) removed flickering when switching between the drawer between the recipe-details and the basket-preview
- *analytics*:
  - (from 8.2.6) switching between the recipe-details and the basket-preview back and forth doesn't append infinitely to the analytics path
- *window.miam.user.loadWithExternalId*:
  - If transferring the authless basket throws an error, fetch the current basket instead to avoid blocking the whole library

#### Internal
- Remove ng-miam from dependencies
- Replaced all console.logs by console.debug So they are still available for debugging but less visible
- Changed the library used to read and write translation files
- *interceptor-service*:
  - Fixed issue where Language-Id header was incorrectly overwritten when it already existed. Now, the header is set only if it does not exist.

## v8.3.7 - [10/06/2024]

#### Fixed:
- *preferences*:
  - Change wording of preferences validation button to reflect accurate recipe count
- *products-picker*:
  - Fix unavailable section title did not have miam-ds-text classes
- *recipe-card-cta*: 
  - serves input did not check if recipe was in basket before trying to update guests of the recipe in the basket
- *recipe-filters*:
  - Radio buttons no longer allow selecting multiple options at once
- *recipe-pricing*:
  - Fixed pricing could sometimes not be fetched if the basket takes too much time to be fetched
  - Fixed pricing requests were sent too often
- *window.miam.user.reset*:
  - Doesn't reset and refresh the basket if the user is already unlogged
- *window.miam.user.loadWithExternalId*:
  - Now resets the basket-sync to avoid doubling the products that were in basket previously in the cases where logging in doesn't refresh Mealz's script

#### Added
- *noSupplier Mode*:
  - Selecting a POS now saves it in localStorage with `_miam/noSupplier/posId` key, it will be used during navigation

## v8.3.6 - [03/06/2024]

#### Fixed
- *recipe-catalog*:
  - Fix an issue where the sticky toolbar would not update it's state on Safari

## v8.3.5 - [30/05/2024]

#### Fixed:
- *recipe-card-cta*:
  - Serves input is now dynamic if recipe is in basket or not and sends change-guests event
- *recipe-card*:
  - Serves input is now dynamic if recipe is in basket or not and sends change-guests event
- *recipe-pricing*:
  - Serves input is now dynamic if recipe is in basket or not and sends change-guests event

#### Updated:
- *mealz-components*: update to 0.1.1
- *miam-store-locator* set component changeDetection and encapsulation


## v8.3.4 - [30/05/2024]

#### Fixed
- *translation-files*: Added missing translations for ES lang

#### Internal
- Simplified docker config for webc testing


## v8.3.3 - [30/05/2024]

#### Added:
- *like-button*: added classes on empty and full img to differentiate them

#### Fixed
- *basket-sync*: 
  - If the POS was updated without a script reload, the basket-sync still kept the basket-entries linked to the old POS in memory which doubled the effective quantity of product in Mealz's basket and thus resent a notification to add them to the retailer
- *recipe-details*:
  - Fix an issue where the header would flicker on Safari
- *recipe-pricing*: Sometimes the price was not fetched - Streamlined the workflow to be sure the price is fetched and is fetched only once

#### Internal
- *reach-top*:
  - Now uses getBoundingClientRect() instead of intersectionRatio for compatibility purposes


## v8.3.2 - [27/05/2024]

#### Fixed:
- *preferences*:
  - Now shows the same number of results as filters, updates on every pages and not only on catalog defaults


## v8.3.1 - [27/05/2024]

#### Fixed:
- *product-card*:
  - Prevented add product cta click spam that lead to add recipe to basket duplicated request creating API error
- *window.miam.user*:
  - **reset**: Now properly resets user informations and then generates an authlessId


#### Updated:
- *product-card*: Refactored the scroll back feature after a product was replaced to account for the possibility that the original product-card can be removed from the DOM in between


## v8.3.0 - [17/05/2024]

#### Breaking Changes:
- *products-picker*: **miam-products-picker__more-anchor>button** has a new class **miam-products-picker__close-modal-button** with **display: none** rule
- *preferences*:
  - CSS rule **.miam-preferences__footer** has new attribute **box-sizing** under 450px screen width
  - Footer buttons are now `flex-direction: column-reverse` with a smaller gap
  - [from 8.2.4] Drawer width was too big, it is now reduced to 450px  
- *recipe-filters*: Footer buttons are now `flex-direction: column-reverse` with a smaller gap
- *recipe-card-cta*:
  - Remove loading state and "clicked" output emitting true if recipe was added to basket as cta only opens recipe modal
  - Replace `<span></span>` around basket icon `<img>` with ng-container that was useless in the DOM

#### Added:
- *basket-preview-block*: In noSupplier mode, added a swapper to be able to swap between the "Recipes" view and a new "Products" view
  - Moved the price and price per person to `PriceComponent`
- *counter-input*: Added class to minus button when the counter drops to `1` to be able to scope it for CSS override
- *modal*: 
  - Added a new bottom bar in the basket preview for no supplier mode
  - **.miam-modal__actions div** has new class **.miam-modal__interactions** for scenarios with a supplier
  - **.miam-modal__actions div** has new class **.miam-modal__place-order** for scenarios without a supplier
- *product-card*:
  - Added class to the replace and select buttons to be able to scope them for CSS override
  - Moved the price to a `PriceComponent`
- *products-picker*: Added class for "More ideas" button to distinguish close modal event and catalog URL redirection
  - 'miam-products-picker__go-to-catalog-button' for catalog URL redirection
  - 'miam-products-picker__close-modal-button' for close modal event
- *products-picker*: Added guest counter next to ingredient number for noSupplier mode
- *replace-item*:
  - Moved the price to a `PriceComponent`
  - Added classes and `<span>` children to empty views to be able to scope them for CSS override
  - Added entry name and search string to the empty views, hidden by default
- *recipe-details-infos*: Added classes on recipe-details missing infos
  - **div.miam-recipe-details-infos__badge** has new class **.no-preparation-time-defined** for missing preparation time
  - **div.miam-recipe-details-infos__badge** has new class **.no-cooking-time-defined** for missing cooking time
  - Added new classes to the badges to be able to scope them individually for CSS override
  - **#defaultTime span** has new class **.miam-recipe-details-infos__no-time-placeholder** for the "0 min" label
  - **#defaultText span** has new class **.miam-recipe-details-infos__no-data-placeholder** for label showing "-" instead of data
  - Moved the price to a `PriceComponent`
- *recipe-details*:
  - Added noSupplier mode where recipe picture, favorite button, basic data (preparation time, cooking time, difficulty) and cooking steps tab are hidden
  - Added "See my basket" button in no supplier mode when all ingredients from shown recipe is added to basket
- *recipe-modal*: Added a product replacement modal
- *recipe-catalog*: Added class on page titles to be able to scope them for CSS override
- *catalog-header*: Added class on page titles to be able to scope them for CSS override
- *catalog-toolbar*: Added class on page titles to be able to scope them for CSS override
- *catalog-list*: Added class on component tag to be able to differentiate the different pages for CSS override
- *window.miam.analytics* eventSent$:
  - **entry.replace**: Added **new_ext_item_id** and **old_ext_item_id** props
  - **entry.add**: Added **ext_item_id** props
  - **entry.remove**: Added **ext_item_id** props
  - **entry.change-quantity**: Added **ext_item_id** props
  - **recipe.add**: Added **catalog_id** props if user added a recipe from a category
- *window.miam.user*:
  - **setLocation**: can now provide user location if they allowed it
- *window.miam.events*:
  - **storeLocatorOpened**: Observable that returns either `true` if the store locator is opened or `false`if it's closed
- *store-locator*: New component to select affiliated store from either a *recipe-details* modal view or *basket-preview-block*
- *basket-transfer*: Can now generate an URL to redirect on POS and transfer noSupplier basket into supplier Basket
- *authless-transfer*: Can now merge a basket from an authless user to a logged one
- *analytics-service*:
  - Added events to selected Point of Sale with point of sale name and id
  - Added pageview event on store locator navigation
- *recipe-card-cta*:
  - takes "serves" as input to force number of guests
  - on click, opens store locator if the pos is not selected
- *recipe-card*: takes "serves" as input to force number of guests
- *window.miam.recipes*:
  - setDefaultRecipePicture: can now set a default recipe picture placeholder
- *recipe picture and ingredient picture*: if we're not able to load a picture (no data or not found), we display a placeholder picture

#### Updated:
- *catalog-toolbar*: Searchbar placeholder has now a different label if searching favorites
- *catalog-toolbar*: Searchbar placeholder has now a different label if searching favorites
- *window.miam.analytics* eventSent$:
  - **ProductsPickerComponent**: Path is now URL/miam/recipe/details 
  - **ReplaceItemComponent**: Path is now URL/miam/recipe/details/replace-item from **recipe-details**
- *preferences*: Changed custom checkboxes into `miam-ds-checkbox`
- *replace-item*: Removed irrevelent "optimization" query for search endpoint
- *product-picker*: number of ingredient display now waits for real value instead of showing "0 ingredient" during loading

#### Fixed:
- *basket-preview-line*: Fix plural on number of products inside a recipe
- *recipe-details*: Basket actions storage didn't take into account the possibility of the client allowed unlogged basket actions and didn't removed the actions from sessionStorage when the hooCallback allowed the action to continue, which opened the recipe-details on the next navigation - Now if hookCallbakc returns true, the basket actions are removed from SessionStorage
- *recipe-details*: Header would sometime glitch when scrolling (recipe title too long, new padding triggering intersectionObserver again) - setting a rootMargin put "is-pinned" class earlier and prevents triggering intersectionObserver when new class is added
- *modal*: Emitted close on navigation even if modal was opened, which could trigger filters to toggle on - Now checks if opened before emitting closed
- *preferences*: Resetting preferences did not clear guest preference, causing the vignette to persist - when preferences are reset, guest preference is also reset to its initial value
- *preferences*: Footer buttons disappeared on smaller devices - adjusted style to ensure consistent visibility across all screen sizes - See Breaking changes for **.miam-preferences__footer**
- *preferences*: Footer buttons didn't have the right display under 450px - See Breaking changes for **.miam-preferences__footer**
- *preferences*: Changing the guest preference had no effect - updated recipes to reflect changes in guest preferences
- *recipe-filters*: Footer buttons didn't have the right display under 450px - See Breaking changes for **.miam-recipe-filters__ctas**
- *recipe-catalog*: When on the homepage and searching for a word, then navigating to favorites, the search remained stored - on click of favorites, reset all current filters (including search) to favorites page filters
- *recipe-details*: Header would sometime glitch when scrolling (recipe title too long, new padding triggering intersectionObserver again) - setting a rootMargin put "is-pinned" class earlier and prevents triggering intersectionObserver when new class is added
- *recipe-details*: Like button in header has now analytics path and props
- *recipe-pricing*: Was not exported as a webcomponent and didn't work in noSupplier mode
- *product-card*: Removed css media query that blocked the "Cart" CTA hover effect over 1023px widths and under 800px heights
- *replace-item*: Changed API route used when a product as already added to the basket
- *replace-item*: Searchbar has now a debounce
- *window.miam.analytics* eventSent$:
  - Props "category_id" is added to every recipe actions coming from the category page and not only catalog page
  - **entry.change-quantity**: diff props is now showing proper value (1 if one product added, -1 if one product removed)
- *recipe-pricing*: prevent pricing request to be sent twice on scroll
- *miam.basket.recipeCount()*: subscribing to it now updates on new value

#### Internal
- Added `PriceComponent` to split the price's amount and currency
- Added `ProductReplacementService` to open the product replacement modal
- *baskets-service*:
  - Use the right route to update a BasketEntry's quantity
  - Removed the ingredient-id from the add and remove ingredient routes
  - Handle the BasketEntry removal for both recipe and standalone entries
*reach-top-directive*: Added stickyByDefault input to directly put "is-pinned" class name after view init
*store-locator-component* Moved every instances of web-c Store-Locator into in its component, sending events and communicating with dedicated service
*currency-service* Now currency is by default in EUR but is overrided on every occurence with LOCALE_ID set in the service
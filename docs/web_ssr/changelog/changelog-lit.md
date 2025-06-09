---
sidebar_position: 2
---

# Mealz components Changelog

## 1.4.0 [Unreleased] // TODO 2.0.0 ?

#### Breaking changes:
- *catalog-breadcrumb*
  - The component *mealz-catalog-breadcrumb* has been renamed to *mealz-breadcrumb*

#### Added:
- *accordion*
  - Added component
- *planner*
  - Added *planner-abandon-modal*
  - Added *planner-budget-gauge*
  - Added *planner-catalog*
  - Added *planner-current-menu*
  - Added *planner-current-menu-modal*
  - Added *planner-dashboard*
  - Added *planner-form*
  - Added *planner-menu-option*
  - Added *planner-recipe-card*
  - Added *planner-recipe-list*
  - Added *planner-recipe-suggestion*
  - Added *product-card-planner*
  - Added *planner-open-catalog-modal*
- *preferences*
  - Added component
- *recipe-details*
  - Added planner mode
- *url-params-handler*:
  - Now adds url parameters depending on the drawer opened in order to open it back on refresh

#### Updated:
- *recipe-card*
  - Updated recipe card width and height
  - Added an overlay and a badge when a recipe is in the basket (applies to catalog view in the planner)
- *recipe-pricing*
  - Updated layout and colors

#### Internal:
- *catalog-load-more*
  - Add the auto-load more recipes on drawer scroll
  - Prevent load-more when list is hidden
- *no-shadow-element*:
  - Added `elements` and `selectors` properties
  - Added `initSelectors`and `addClickListener` methods
- *basketPreviewState$*:
  - replaced basketPreviewIsOpen\$ observable with basketPreviewState\$ in order to have the initial tab info rather than just a boolean

---
sidebar_position: 1
---

# Mealz SSR API Changelog

## 2.0.0 [Unreleased]

#### Added:
- *all-recipes-banner*
    - New all recipes banner on catalog home
- *catalog-list*
    - Added `planner` to request parameters (default: false)
    - Added `all_recipes` to request parameters (default: false)
- *planner*
    - Added *planner-budget-gauge* component
    - Added *planner-current-menu* component and controller
    - Added *planner-dashboard* component and controller
    - Added *planner-menu-option* component
    - Added *planner-recipe-card* component and controller
    - Added *planner-recipe-list* component
    - Added *planner-recipe-suggestion* component
- *price*
    - Add dynamic currency formatting based on language settings
- *drawer*:
    - New routes to fetch mandatory JS and CSS for component

#### Updated:
- *catalog-list*
    - Updated view for planner compatibility
- *catalog-toolbar*
    - Updated view for planner compatibility
- *recipe-card-cta*
    - Updated view for planner compatibility
- *recipe-card*
    - Updated view for planner compatibility

#### Internal:
- Added planner page to the demo
- Added config in the demo to test *addProductsToCart* & *removeProductsFromCart* instead of *pushProductsToCart*
- Logging out in demo site was creating an error

## Upgrading from v1

This guide outlines the breaking changes and migration steps when upgrading from v1 to v2.

### Component Renaming

#### Prefix Changes

All components previously using `ng-miam-*` and `webc-miam-*` prefixes have been renamed to use the `mealz-*` prefix. Additionally, all CSS class names with `miam-...` have been updated to `mealz-...`.

<details>
<summary>Components with updated prefixes</summary>

- `ng-miam-no-pos-selected` → `mealz-no-pos-selected`
- `ng-miam-products-picker` → `mealz-products-picker`
- `ng-miam-slider-tabs` → `mealz-slider-tabs`
- `ng-miam-replace-item` → `mealz-replace-item`
- `webc-miam-basket-transfer-modal` → `mealz-basket-transfer-modal`
- `webc-miam-last-order-modal` → `mealz-last-order-modal`
- `webc-miam-no-supplier-onboarding` → `mealz-no-supplier-onboarding`// TODO Has been removed in v2 ?
- `webc-miam-recipe-addon` → `mealz-recipe-addon`
- `webc-miam-recipe-details` → `mealz-recipe-details`

</details>

#### Name Changes

The following components have been renamed with new naming conventions:

- `ng-miam-progress-tracker` → `mealz-planner-budget-gauge`
- `ng-miam-store-locator` → `mealz-store-locator-drawer`
- `webc-miam-recipe-details-infos` → `mealz-details-infos`
- `webc-miam-recipe-details-ingredients` → `mealz-details-ingredients`
- `webc-miam-recipe-details-steps` → `mealz-details-steps`
- `webc-miam-recipe-modal` → `mealz-drawer-view-swapper`
- `webc-miam-store-locator-link` → `mealz-store-indicator`
- `mealz-catalog-breadcrumb` → `mealz-breadcrumb`

### Sponsor Components Consolidation

All sponsor-related components have been deprecated and replaced by a single, unified component: `mealz-sponsor-block`

> **Note:** The internal CSS classes for sponsor components remain unchanged.

<details>
<summary>Deprecated sponsor components</summary>

- `ng-miam-sponsor-block-container`
- `ng-miam-sponsor-image-and-text-block`
- `ng-miam-sponsor-image-with-text-block`
- `ng-miam-sponsor-logo-block`
- `ng-miam-sponsor-picture-block`
- `ng-miam-sponsor-small-picture-block`
- `ng-miam-sponsor-small-text-block`
- `ng-miam-sponsor-small-title-block`
- `ng-miam-sponsor-text-and-image-block`
- `ng-miam-sponsor-text-block`
- `ng-miam-sponsor-title-block`

</details>

### Removed Components

#### Unused Components

The following components were removed due to lack of usage:

- `ng-miam-tabs`
- `ng-miam-time-picker`
- `ng-miam-toaster`
- `webc-miam-toaster-stack`

#### Deprecated Components

These components have been fully removed as they are deprecated and no longer maintained:

<details>
<summary>List of deprecated components</summary>

- `ng-miam-addon-link`
- `ng-miam-guests-dropdown`
- `ng-miam-meals-planner-basket-confirmation`
- `ng-miam-meals-planner-basket-preview`
- `ng-miam-meals-planner-catalog`
- `ng-miam-meals-planner-form`
- `ng-miam-meals-planner-result`
- `ng-miam-tooltipable-content`
- `webc-miam-basket-preview-block`
- `webc-miam-basket-preview-disabled`
- `webc-miam-basket-preview-line`
- `webc-miam-meals-planner`
- `webc-miam-recipes-history`
- `webc-miam-sponsor-storytelling`
- `webc-miam-warning-store-locator`

</details>

:::warning
If any of your style overriding or other interactions includes components listed above, please update them accordingly.
:::

### Drawer Components Structure

All drawer and modal components have been restructured to use a consistent pattern:

```html
<mealz-drawer>
  <mealz-drawer-view-swapper>
    <MEALZ_COMPONENT></MEALZ_COMPONENT>
  </mealz-drawer-view-swapper>
</mealz-drawer>
```

This new structure applies to:
- `basket-preview`
- `history-drawer`
- `recipe-addon`
- `recipe-details`
- `replace-item`
- `preferences`

### Design System Renaming

Our design system has been renamed from `miam-ds` to `mealz-ds`. All style classes previously using `miam-ds-...` have been updated to `mealz-ds-...`.

---
sidebar_position: 6
---

# No-supplier flows (SSR helpers)

## What is the "no-supplier" experience?

The **no-supplier** experience is used when Mealz powers a recipe website or inspiration experience that **does not directly own the retail cart**, and instead redirects users to one or more partner retailers to purchase ingredients.

Historically, this experience relied on:

- A dedicated onboarding component (`no-supplier-onboarding`).
- A custom flow that guided users from recipes to a partner retailer.

In SDK **v10**, the legacy onboarding component is removed, and the flow is now driven by the **Mealz SSR project** and a set of internal helpers.

## SSR-only helpers

SDK v10 exposes new helpers under `window.mealzInternal.noSupplier` that are used by Mealz SSR templates and internal components to coordinate the no-supplier experience:

- `addRecipeToBasketFromIdAndOpenPreview`  
  Adds a recipe to the basket using its ID and then opens the basket preview, used to power no-supplier journeys that start from a recipe page.

- `displaySupplierSelector$`  
  An observable used internally to control when a **supplier selector** should be displayed in Mealz components as part of the no-supplier flow.

These helpers are:

- **SSR-only**: they are meant to be used by the Mealz SSR controllers and templates, not directly from your integration code.
- **Internal**: they may change without notice and are not part of the public `window.mealz` API.

## How this impacts your integration

If you are integrating Mealz in a **no-supplier** scenario with SDK **v10**:

- The overall journey (from Mealz features to a retailer site) is orchestrated by the **Mealz SSR project**.
- You **do not need** to call `window.mealzInternal.noSupplier.*` directly in your frontend.
- You should:
  - Coordinate with Mealz to define where the no-supplier CTAs and supplier selector appear.
  - Use CSS overrides to align the look & feel with your brand, as with the other components.

For more details about templates, routes and retailer redirection logic, refer to the **Web SSR documentation** or contact Mealz support.



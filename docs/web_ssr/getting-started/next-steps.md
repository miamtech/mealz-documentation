---
sidebar_position: 7
---

# Next steps

You should now have a recipe card loading through the SSR API with styles and basic client wiring. From here you can grow the integration at your own pace.

## Add more features

- [Recipe catalog](../integration-reference/recipe-catalog): browsable recipes on your site ([product overview](../about-mealz/recipe-catalog))
- [Meals planner](../integration-reference/meals-planner): weekly menu flow ([product overview](../about-mealz/meals-planner))
- [Recipe tags](../integration-reference/recipe-tags): reminders on the cart page ([product overview](../about-mealz/recipe-reminders))
- [Styling](../styling) and [Customization](../category/customization-and-optional-features)

## If you are upgrading from V2

Use [Migrating from V2 to V3](../migration-v2-v3) for breaking changes and a migration checklist. For a non-technical summary of why V3 helps, see [What's new](../whats-new).

## Checklist before going live

- [ ] Styles load on every page that shows a Mealz component
- [ ] Recipe cards render for logged-in and guest users (correct `Authorization` / `Authless-id`)
- [ ] Basket synchronization updates your cart when shoppers add or remove products from Mealz
- [ ] Hooks send shoppers to store selection or login when required
- [ ] Login and logout keep Mealz in sync when the page does not fully reload

## How Mealz ships changes

When you ask for a change, or when we ship a new capability, we follow the process in [Versioning process](../about-mealz/versioning-process) so your live site is not surprised by a breaking update.

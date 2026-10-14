---
sidebar_position: 2
---

# What's new

V3 is the release where the SSR API stands on its own: the old Web SDK is no longer required for a full integration, and the path to integrate the SSR API is simpler than it has ever been.

## A standalone SSR API

With V3, the transition from the old Web SDK to the SSR API is complete. Features and logic that previously needed the SDK now run through the SSR API and `mealz-components`, so the integration is standalone.

That also means a much lighter client-side footprint: the separate `webc-miam` script is gone, and you no longer ship the deprecated SDK stack with its outdated dependencies. Components that used the `ng-miam-` prefix are renamed to `mealz-` (for example `ng-miam-recipe-tags` → `mealz-recipe-tag`).

## A simpler way to start Mealz

In earlier versions, many sites needed startup JavaScript on every page to identify the retailer and load Mealz. In V3, the SSR API uses the headers you already send when fetching components (supplier token, user or guest identity, language, and session) to initialize Mealz for you, which reduces the steps you need to make our features work on your website.

For pages that need the Mealz JavaScript API without a visible component, use [`GET /v3/core`](./customization/window-mealz#need-to-use-windowmealz-without-a-mealz-component). You no longer need the old bootstrap route.

## Closer feature parity with the Web SDK

If you are moving from the Web SDK to SSR, V3 also closes gaps that used to force you to keep SDK-only pieces. For example:

- Drink recipes can show a **drink badge** on recipe cards.
- When a shelf has no recipe suggestion, SSR can show a **"Discover our catalog"** card so the shelf does not collapse (you can turn this off with `allow_default=false`).
- Recipe tags on the cart can be fetched in batch via `GET /v3/recipe-tags`.
- Catalog improvements such as the all-recipes banner and related list behavior are available on the SSR path (see the [SSR API changelog](./changelog/changelog-nest) for the full list).

These are capabilities many SDK integrations already relied on; V3 makes them available in the SSR integration so you can migrate with fewer gaps.

## Clearer recipe card layouts

Recipe card variants were simplified and renumbered so the choices are easier to reason about. If you already pass a variant today, check the mapping in the [migration guide](./migration-v2-v3) before you upgrade.

## Upgrading from V2

Ready to move? Follow [Migrating from V2 to V3](./migration-v2-v3) for the concrete steps and breaking-change details.

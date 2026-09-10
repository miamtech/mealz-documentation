---
sidebar_position: 5
---

# Sponsor block

## Overview

In SDK **v10**, all previous sponsor-related components have been **consolidated** into a single, unified component: `mealz-sponsor-block`.

Instead of multiple Angular and WebComponent variants (containers, image/text blocks, logo blocks, storytelling blocks, etc.), the sponsor experience is now handled through this single SSR-driven block, which is injected into the Mealz views where sponsor content is available.

Sponsor content (images, copy, links, positions) is configured on Mealz side and rendered server-side by the **Mealz SSR API**.

## Behaviour and placement

- The `mealz-sponsor-block` component is rendered by the **SSR templates** wherever sponsor content is configured (for example in recipe-details, catalog or planner views).
- From the retailer point of view:
  - You **do not** need to manually instantiate a dedicated WebComponent tag for sponsor blocks in your pages.
  - The sponsor block will appear where the Mealz SSR templates place it.
- The block is responsive and follows the same layout rules as the surrounding Mealz UI.

## Styling

The consolidation only affects the **component surface**, not the internal CSS hooks:

- Changelog explicitly states that **internal CSS classes remain unchanged** for sponsor components.
- If you already override sponsor styles using CSS class selectors (from previous versions), your overrides should continue to work in v10.

We recommend:

- Keeping your existing sponsor-specific CSS overrides and verifying them visually after upgrading to v10.
- Scoping any new overrides to the sponsor container where possible, to avoid affecting other components.

## Internal helpers

SDK v10 also introduces internal helpers under `window.mealzInternal.sponsor`:

- `hasStorytelling`: used by Mealz to check if a sponsor has storytelling content available.
- `getSponsorBlocks`: used by Mealz to retrieve all sponsor blocks associated with a given sponsor, sorted by position.

These helpers are used by the Mealz SSR stack and web components and are **not part of the public SDK API**.  
You should not call them directly from your integration; instead, rely on the sponsor block rendered by SSR and customize it through CSS only.



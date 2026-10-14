---
sidebar_position: 1
---

# Overview and prerequisites

This guide walks you through a first Mealz SSR integration: load styles and Mealz scripts, render a recipe card, then connect login, cart, and hooks so Mealz stays in sync with your site.

## What you will have at the end

- Mealz styles loading on a page that shows a Mealz component
- A recipe card rendered from the SSR API and hydrating in the browser
- Client callbacks for login/logout, basket synchronization, and hooks

## Prerequisites

Before you start, make sure you have your Mealz **supplier token** (your Mealz contact provides these, including separate tokens for test and production)

:::note
If you are upgrading an existing V2 integration instead of starting fresh, prefer the [migration guide](../migration-v2-v3).
:::

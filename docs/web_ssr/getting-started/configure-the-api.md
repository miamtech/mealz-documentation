---
sidebar_position: 2
---

# Configure the API

Every Mealz SSR call follows the same URL shape:

```
https://MEALZ_SSR_API_URL/API_VERSION/...
```

- **`MEALZ_SSR_API_URL`**: the host for your environment (test or production).
- **`API_VERSION`**: the API major version path segment, for example `v3`. The version **must** be present; requests without it fail.


We recommend storing the version (or the full API url) **as an environment variable** (for example `MEALZ_API_VERSION=v3` or `MEALZ-API-URL=https://MEALZ_SSR_API_URL/v3`) and building URLs from that value.

Components from different major versions generally cannot coexist on the same page, so your site should target a single version everywhere. A shared setting makes that easier: when you move to a new major version, you change one place and review the matching migration guide, instead of hunting through hard-coded paths.


:::info
Major versions, as well as opt-in variants, and feature flags are described in [Versioning process](../about-mealz/versioning-process). That page explains how we avoid pushing breaking changes onto your site without your consent.
:::

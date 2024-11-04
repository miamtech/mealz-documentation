---
sidebar_position: 6
---

# Versioning

The SSR API follows a versioning strategy to ensure backward compatibility and allow for iterative updates without disrupting existing integrations. Each version of the API is accessed through the following URL format:

```
http://MEALZ_SSR_API_URL/API_VERSION/...
```

`API_VERSION`: This specifies the version of the API you are using, such as **v0**, **v1**, **v2**, etc.

Both current and future versions of the API will follow this versioning pattern.

:::warning
The version must be explicitly specified in your requests. If API_VERSION is not provided, the request will fail.
:::

**Integration Guidance**: During your integration process, we will inform you which API version to use. This ensures you are using the most appropriate version for your needs.

**Migrating to New Versions**: Whenever a new API version is introduced, we will guide you on how and when to transition,
including any potential breaking changes that may affect your integration.
This will allow you to upgrade at the right time, ensuring smooth continuity of service.

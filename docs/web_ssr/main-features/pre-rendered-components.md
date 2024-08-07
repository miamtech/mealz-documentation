---
sidebar_position: 1
---

# Pre-rendered components

As previously explained, to use our pre-rendered components, you must retrieve them through a dedicated route, similar to how you retrieve data from a CRUD API.

## Components parameters

Previously, components parameters were set in the **HTML attributes**. Now, these parameters need to be specified as **URL parameters**.

Some parameters are mandatory, while others are optional. These details will be specified on the dedicated component documentation page.

## Error handling

Previously, errors were sent through **custom events** that were caught by event listeners. Now, they are thrown as **HTTP errors**.
The error code will match the [HTTP response status codes convention](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## HTTP request headers

Sending requests with the mandatory parameters alone is not sufficient to retrieve our components; you will also need to include HTTP headers in your requests.

```json
{
  "Authorization": "user_id <user-token>",
  "Supplier-token": "<your-supplier-token>",
  "Language-id": "<your-language-id>"
}
```

- **Authorization**: This header is required to access user information (likes, basket, suggestions). It should be formatted as `"user_id <user-token>"`. If the user is not logged in, the user token must be replaced with an [authless token](TODO)

- **Supplier-token**: We will provide you with your supplier token (in JWT format). This token allows us to identify you.

- **Language-id**: Set this header to either the language ISO code alone or the language ISO code combined with your retail name:

```json
{
  "Language-id": "fr" | "fr-<your-retail-name>"
}
```

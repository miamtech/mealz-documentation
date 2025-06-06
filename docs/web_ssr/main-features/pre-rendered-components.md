---
sidebar_position: 1
---

# Pre-rendered custom elements

As previously explained, to use our pre-rendered custom elements, you must retrieve them through a dedicated route, similar to how you retrieve data from a CRUD API.

## Components parameters

Previously, components parameters were set in the **HTML attributes**. Now, these parameters need to be specified as **URL parameters**.

Some parameters are mandatory, while others are optional. These details will be specified on the dedicated component documentation page.

## Error handling

Previously, errors were sent through **custom events** that were caught by event listeners. Now, they are thrown as **HTTP errors**.
The error code will match the [HTTP response status codes convention](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## HTTP request headers

Some informations are needed to display all of our components. In order to not have too much parameters on each route, these informations are passed as mandatory HTTP request headers on all requests to custom elements endpoints

```json
{
  "Authorization": "user_id <user-token>", // if "Authless-id" is not provided
  "Authless-id": "<authless-token>", // if "Authorization" is not provided
  "Supplier-token": "<your-supplier-token>",
  "Language-id": "<your-language-id>",
  "Session-id": "<a-unique-id>",
  "profiling": "<true/false>"
}
```

- **Authorization**: This header is required to access user information (likes, basket, suggestions). It should be formatted as `"user_id <user-token>"`. If the user is not logged in you must use the `Authless-id` header instead.

- **Authless-id**: This header is necessary for saving user data even when the user is not logged in. It is also used to transfer the basket created while unauthenticated to their account once they log in. To generate an authless token, you can use the [Generate Authless Token](/docs/web_ssr/main-features/pre-rendered-components#authless-user) route.

- **Supplier-token**: We will provide you with your supplier token (in Base64 format). This token allows us to identify you and serve data pertinent for your website.
:::info
  The token also contains constants linked to the environment, which means we will send you 2 tokens: a token for production, and a token for testing and development. 
:::

- **Language-id**: I18n header. Set this header to either the [language ISO code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) alone or the language ISO code combined with your retail name:

```json
{
  "Language-id": "fr" | "fr-<your-retail-name>"
}
```
See [Internationalisation](/docs/web_ssr/customization/internationalization) for how to configure a custom I18n file to override our base texts with your own.
- **Session-id**: A unique identifier to differentiate sessions from one another (for example a uuid). This helps us keep things consistent during a session.
> For example if a user sees a recipe on a shelf, clicks on a product and goes to the product page, then goes back, they would expect to see the same recipe on the shelf. With the session-id, we are able to return the same recipe if the products passed in parameters are the same as a previous request with the same session-id

- **profiling**: **_(Optionnal)_** Default value is true. If passed with a `false` value, informs Mealz that the profiling permissions have been refused by the user in the cookies. Deactivates all personalization in all Mealz features.

## Authless user
Even if the user is not logged into your website, you might want to allow them to add products to their basket.

We also need a way to track user events and the basket, so that the contents can be transferred to their account once they log in.

To do that you'll need to **generate an authless token**, store it on your side (for example in a cookie) and provide it to the [Authorization Header](./pre-rendered-components#http-request-headers).
you must also call `window.mealz.user.loadWithAuthlessId(<authless_id>)` in your app.

The route to generate the **Authless Token**:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/generate-authless-token
```

which will return an object:

```json
{
  "authless_id": "<generated-authless-token>"
}

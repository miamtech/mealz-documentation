---
sidebar_position: 1
---

# Pre-rendered custom elements

Each Mealz feature exposes a dedicated SSR API route. Your backend calls that route and receives an **HTML fragment**: Web Component tags with server-rendered markup inside, plus the scripts needed to make them interactive.

## How it works

1. **Call the component route from your server**, with the [HTTP headers](#http-request-headers) required on every request and any feature-specific parameters as URL query params (see [Component parameters](#component-parameters) below).
2. **Inject the returned HTML** into your page template where the component should appear.
3. **Load the matching stylesheets** in your page `<head>` via a separate `/styles/…` request. See [Fetching styles](./fetching-style).
4. **Let the browser hydrate the components.** The module scripts in the response register the custom elements; in V3, the same response also initializes `window.mealz` from the headers you passed.

### Example

Request for a recipe card on a product page:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card?surrounding_products_ids=["123456","234567"]&store_id=1234
```

Send the [mandatory HTTP headers](#http-request-headers) on this request.

The API returns an HTML fragment. For example:

```html
<script>/* initializes Mealz from your headers */</script>
<script type="module" src="…/recipe-card.min.js"></script>
<!-- other scripts for nested parts (CTA, pricing, …) -->
<mealz-recipe-card starting-data="…">
  <!-- server-rendered card markup -->
</mealz-recipe-card>
```

Place this fragment in your server-rendered template at the slot where the card should show. Then fetch the stylesheets for the same component (and the same variant, if you use one) as described in [Fetching styles](./fetching-style).

Full parameter lists and routes for each feature are listed on their own page under **Integration reference** (catalog, recipe card, meals planner, and so on).

## Component parameters

Component parameters are specified as **URL query parameters** on the component route (as in the example above).

Some parameters are mandatory, while others are optional. These details are specified on each feature's documentation page.

## Error handling

Errors are returned as **HTTP errors**.
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
  "cookies-consent": "<true/false>"
}
```

- **Authorization**: This header is required to access user information (likes, basket, suggestions). It should be formatted as `"user_id <user-token>"`. If the user is not logged in you must use the `Authless-id` header instead.

- **Authless-id**: This header is necessary for saving user data even when the user is not logged in. It is also used to transfer the basket created while unauthenticated to their account once they log in. To generate an authless token, you can use the [Generate Authless Token](/docs/web_ssr/integration-reference/pre-rendered-components#authless-user) route.

- **Supplier-token**: We will provide you with a supplier token (in Base64 format). It identifies your website and carries configuration for your environment. See [Note about terminology](#note-about-terminology) for why the header says "supplier" rather than "retailer".
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

- **cookies-consent**: **_(Recommended)_** Send `true` when the user has accepted cookies that allow Mealz profiling and personalization. When the header is absent or not `true`, Mealz treats profiling as refused. This value is passed into the client bootstrap with your other headers.$

## Authless user
Even if the user is not logged into your website, you might want to allow them to add products to their basket.

We also need a way to track user events and the basket, so that the contents can be transferred to their account once they log in.

To do that you'll need to **generate an authless token**, store it on your side (for example in a cookie) and pass it in the **`Authless-id` header** on your SSR requests.

If the authless id changes while Mealz scripts stay on the page without a reload, also call `window.mealz.user.loadWithAuthlessId(<authless_id>)`. See [Handle user login and logout](../set-up-and-usage/login-and-logout).

The route to generate the **Authless Token**:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/generate-authless-token
```

which will return an object:

```json
{
  "authless_id": "<generated-authless-token>"
}
```

## Client-side injection

Most integrations call the SSR API from your **backend**, then inject the HTML into the page template. For technical reasons, you may want or need to fetch Mealz HTML in the browser and insert it into the DOM with JavaScript instead.

### Scripts and `innerHTML`

Browsers **never** execute `<script>` tags inserted via `element.innerHTML`. Mealz HTML fragments include `<script type="module" src="…">` tags that register custom elements. If you only assign the HTML string to `innerHTML`, those modules never run and the components will not hydrate.

### Recommendations

To inject Mealz HTML from the client without losing script execution:

1. Build the same headers you would send server-side (`Supplier-token`, `Authorization` or `Authless-id`, `Language-id`, `Session-id`, and optionally `cookies-consent`). Managing a guest authless id (generate, store, reuse) is your responsibility on the client.
2. `fetch` the SSR endpoint and read the response as text.
3. Parse the HTML (`DOMParser`), collect every `<script type="module" src="…">`, and append matching `<script type="module">` tags to `document.head` if that `src` is not already loaded. Wait for those scripts to load before relying on the custom elements.
4. Assign the HTML to your container (`innerHTML` is fine for markup once scripts are handled separately).
5. Fetch styles from the `/styles/…` JSON endpoint and append any missing `<link rel="stylesheet">` tags to `<head>` (deduplicate by URL).

## Note about terminology

Mealz documentation and code do not always use the same words:

- **Supplier and retailer** — This documentation usually says **retailer** (your grocery website). In our database and API, the same concept is a **supplier**: the `Supplier-token` header, routing configured per supplier, and so on.
- **POS and store** — **Store** in the docs (`store_id`, the shop the user selected) maps to **POS** (point of sale) in code, for example `window.mealz.pos.load`.
- **No-supplier and non-retailer** — Recipe sites and publishers that do not sell ingredients themselves use a lighter integration. In code and routes this is **`no-supplier`** (`noSupplier` in your token, `no-supplier-add-to-cart-cta`, …). See [Non-retailer integration](../non-retailer-integration/introduction).

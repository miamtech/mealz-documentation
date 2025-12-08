---
sidebar_position: 2
---

# Installation

Installing our library on your website only requires you to add the following tag to your page :

```html
 <script type="module" src="https://cdn.jsdelivr.net/npm/webc-miam@${version}/webc-miam-${lang}.js"></script>
```
Executing the script makes all tags of our WebComponents available to use and will also initialize the many services that handle the communication between our components.

> Before calling the scripts Mealz webcomponents just be "dead" tags in the DOM, not doing anything but also not breaking anything, so you don't need to worry about errors appearing if the script is called late or not at all for some reason.

If you use a tag manager like GTM or TagCommander our script can also be injected on your website with it.

> :speech_balloon: Please contact us if you don't know which version number to write after "webc-miam@" 

We use a different script for each locale we support, so depending on the language the user selected on your website, you'll need to call a different script (ex: webc-miam-fr.js for FR locale)

> Here is the full list of supported locales: DE, EN, ES, FR, IT, NL, PT, RO
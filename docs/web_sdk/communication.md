---
sidebar_position: 5
---

# Communication with the website

## How does Mealz communicate with my website ?

To make communication between Mealz and your website easier, we decided to gather all methods and variables you might need in one interface.

The object `miam`, instanciated in our _context.services.ts_ is the interface you will use to setup our SDK, customize some features and access some useful datas that you might need.

For this interface to be accessible for anyone, we inject it into the `window` object when the SDK script is run, so you will only need to call `window.mealz` to access our methods and variables.

The methods and variables in `window.mealz` are grouped in thematic categories, like `window.mealz.user` or `window.mealz.recipes` for example. See [window.mealz](./customization/window-mealz) for more details on the content of each category.

### If you use Typescript

If you use Typescript, using `window.mealz` as is will likely result in your compiler complaining that window has no object mealz.

The easy fix to this problem is to write `(window as any).mealz`: casting window to an `any` type will fix your compilation errors, but you might be upset that it breaks the typing, as mealz will also be considered an `any` type, so you wouldn't have access to autocomplete on its many attributes.

As a workaround, we have created an interface that describes the object mealz, and included that interface in our compilated directory.

This means you can do an `npm i webc-miam@${same version as the script}` to add a webc-miam directory to your nodes_modules directory. You can then import the interface like this :

```typescript
import MealzInterface from "webc-miam/interfaces/mealz-interface";

const mealz = (window as any).mealz as MealzInterface;
```

Now this mealz const will point to `window.mealz`, but correctly typed, which will give you access to autocomplete, method documentation and other useful features your language and editor give you access to with a typed object.

---
sidebar_position: 2
label: "Styling"
---

import ColorList from './_styling/ColorList.md';
import IconList from './_styling/IconList.md';

# Styling

This SDK lets you adjust the components styling so that they can be naturally inserted in your app without confusing the end user.

Components styling can be customized by either:
- Passing a whole template and mapping it to the controller inputs/outputs
- Overriding the style properties

:::tip
A combination of both ways can be used. Note that in this case, the default style variables won't be taken into account
:::

## Overriding style properties

You can globally customize styles by overriding some classes it will be applied to all components.
There are several types of properties that can be overridden:
**Colors**, 
**Wording**, 
**Typography**, 
**Icons / Images**, & 
**Dimensions**

:::note
- Component styling overrides global styling
- Properties that aren't overriden  will keep their default values
defined by Mealz in the SDK
:::

### Colors

Colors can be globally overriden by redefining them in your main assets file.

For example, adding a new Color, `mealzPrimaryText` will set all components using Color.mealzColor(.primaryText) to your new color.

![color override sample](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/updateColor.png)

<ColorList />

### Wording

To update the text, you must update the [I18n Resolver](../advanced/i18n.md).

### Icons / Images

Icons can be globally overriden by redefining them in your main assets file.

For example, adding a new Icon, `mealzPlus` will set all components using Image.mealzIcon(icon: .plus) to your new icon.

![icon override sample](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/updateIcon.png)

<IconList />

### New templating system

In version 4.0.0 we have moved away from the Template singleton. 
It has been replaced by protocols that you will need to implement.

All views used in the meal planner are implemented using the new [templating system](./ui-customization.md).

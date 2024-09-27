---
sidebar_position: 2
label: "Styling"
---

import ColorList from '@site/docs/shared/usage/styling/ColorList.md';
import IconList from '@site/docs/shared/usage/styling/IconList.md';

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

:::info
Components injected using Jetpack or XML can both have their styling customized the same way
:::

### Colors

Here is how to override a color variable globally:

```kotlin
import androidx.compose.ui.graphics.Color
import com.miam.kmm_miam_sdk.android.theme.Colors

class MealzTemplateManager {
    init {
        Colors.primary = Color(0xFF44D6B3)
``` 

:::tip
 `0x` means hex, `FF` stands for opacity, `44D6B3` is the color code
:::

List of colors you can override:
<ColorList />

### Wording

To update the text, you must update the [I18n Resolver](/docs/android/advanced/i18n.md).

### Typography

All fonts used across our SDK are defined ao they can be overridden globally
in `androidSDK/src/main/theme/typography.kt` or in a lower level.
Our typography are of type <a target='https://www.jetpackcompose.net/textstyle-in-jetpack-compose' href='https://www.jetpackcompose.net/textstyle-in-jetpack-compose'> **TextStyle** </a> 

```kotlin
import com.miam.kmm_miam_sdk.android.theme.Typography

typography.h1 = TextStyle(
    color = Color.Red,
    fontSize = 16.sp,
    fontFamily = FontFamily.Monospace,
    fontWeight = FontWeight.W800,
    fontStyle = FontStyle.Italic,
    letterSpacing = 0.5.em,
    background = Color.LightGray,
    textDecoration = TextDecoration.Underline
)
```

### Icons / Images

All icons and images are injected using Mealz `Image` objects, which can be overriden globally or
component by component as follows:

```kotlin
import com.miam.kmm_miam_sdk.android.ressource.Image

Image.basketIcon = R.drawable.your_basket_icon
```

<IconList />

### Dimensions

All padding, width or height are injected using Miam `Dimension` object, which can be overriden
globally or component by component as follows:

```kotlin
import com.miam.kmm_miam_sdk.android.theme.Dimension

Dimension.xlPadding = 40.dp
```

### New templating system

In version 4.0.0 we have moved away from the Template singleton.
It has been replaced by protocols that you will need to implement.

All views used in the meal planner are implemented using the new [templating system](/docs/android/usage/ui-customization).
Each page & template is fully customizable to your brand's design.
All Template slote are optional, there are Mealz defaults for each view.

:::info
To understand how to create a custom component, you can read [here](/docs/android/usage/ui-customization).
:::

We recommend putting all of your custom Template into a custom module, then configure mealz in a configClass
In our sample implementations, we have one class `MealzTemplateManager`

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            // the below View class go here
        }
}
```
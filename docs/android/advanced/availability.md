# Availability

Even after adding **Mealz** to your code base you can decide to disable the feature.
You can also enquire on the status of the individual components.

## Readiness

Mealz has a small startup time after launching your app to provide the required function and props.

:::caution
Mealz will **never** be ready in the folowing cases :
- the **user** is not authenticated
- the **point of sale** is incorrect or not set
- you have not provided an **initial cart** for Mealz' basket synchronisation
- your supplier **origin** or **id** is incorrect
:::

Here's how you can find out of Mealz is available:
```kotlin
import com.miam.core.Mealz

Mealz.environment.isAvailable()
```
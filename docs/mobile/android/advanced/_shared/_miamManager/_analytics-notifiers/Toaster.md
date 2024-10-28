We have added notifications like Toaster, so you can add this to listen:
```kotlin
// show toast to users on certain events
Mealz.Notifications.toaster.listen { notification ->
    when (notification) {
        is ToasterNotification.RecipeAdded -> {
            println("Mealz.Notifications.recipesCount recipe add")
        }
        is ToasterNotification.RecipeLiked -> {
            println("Mealz.Notifications.recipesCount recipe like")
        }
    }
    println("Mealz.Notifications.recipesCount $")
}
```
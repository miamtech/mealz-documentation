We have added notifications like Toaster, so you can add this to listen:
```swift
// show toast to users on certain events
Mealz.shared.notifications.toaster.listen(callBack: { event in
    switch event as? ToasterNotification {
    case ToasterNotification.RecipeAdded():
        print("MealzNotification: Recipe Added")
    case ToasterNotification.RecipeLiked():
        print("MealzNotification: Recipe Liked")
    default:
        break
    }
})
```
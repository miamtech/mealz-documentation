```swift
// listen to analytics events
Mealz.shared.notifications.analytics.listen { event in
    print("Mealz.Notifications.analytics \(String(describing: event))")
}
```
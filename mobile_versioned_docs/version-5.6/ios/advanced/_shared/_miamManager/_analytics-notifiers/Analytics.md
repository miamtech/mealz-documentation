```swift
// listen to analytics events
Mealz.shared.notifications.analytics.listen { event in
    print("Mealz.Notifications.analytics \(String(describing: event))")
}
```

You can also deactivate analytics on our side and continue to benefit from these notifications by
setting this configuration at any time : 

```swift 
  Mealz.environment.setAnalyticsTracking(false)
```

You will still recieve notification from `AnalyticsNotifier` but they will not be sent to our analytics solution. 
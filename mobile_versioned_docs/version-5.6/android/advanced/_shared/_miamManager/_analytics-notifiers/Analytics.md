```kotlin
// listen to analytics events
Mealz.notifications.analytics.listen {
    println("Mealz.Notifications.analytics $it")
}
```
You can also deactivate analytics on our side and continue to benefit from these notifications by
setting this configuration at any time : 

```koltin 
  Mealz.environment.setAnalyticsTracking(false)
```

You will still recieve notification from `AnalyticsNotifier` but they will not be sent to our analytics solution. 
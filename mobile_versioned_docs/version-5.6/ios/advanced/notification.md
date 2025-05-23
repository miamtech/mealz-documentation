import Toaster from './_shared/_miamManager/_analytics-notifiers/Toaster.md';
import Analytics from './_shared/_miamManager/_analytics-notifiers/Analytics.md';

# Notifications

Mealz provides a notification service to make your UI more interactive for customers.
Currently we handle two events : 

  - **Recipe added to cart**
  - **Recipe liked**

<Toaster />

:::info
By default, notifications are disabled. 
You must provide content for the events you wish to enable for this to work.
:::

Mealz provides a notification service to help you to know how many products are added to your store : 

```swift
Mealz.shared.notifications.basketSummary.listen(callBack: { summary in
    println("number of product added to basket : ${summary.added}")
    println("number of total product : ${summary.total}")
    println("number of product mutualized in basket : ${summary.mutual}")
    println("number of product out of stock : ${summary.outOfStock}")
}
```



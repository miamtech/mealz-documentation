---
sidebar_position: 3
---

# Handle user login and logout (Optional)

Many of Mealz features are enabled by having a user connected, so if you want to use them, you will need to set events to notice the SDK when your users log in or out.

> Features that require the user being connected include:
>
> - Personalized content (machine learning on recipes added & products replaced by the user)
> - Favorite recipes
> - Personal recipes
> - Preferences

When your user logs in, you can use:

```ts
window.miam.user.loadWithExternalId(userID: string, forbidProfiling: boolean).subscribe();
// This method is an observable so you can call some code only after user is logged in our system if you need,
// the downside being that you have to subscribe() even if you don't need it
```

- userId: a unique identifier that we can recognize the user by
- forbidProfiling: true if the user has refused all cookies and false if they have accepted them (if true, personalized content will be desactivated).

When your user log out, simply call `window.miam.user.reset()` to disconnect the user from Mealz

```ts
// Example Setup
export class Mealz {
  // Call this method from your app when the user logs in
  handleLogin(user) {
    window.miam.user
      .loadWithExternalId(user.id, user.cookiesAccepted())
      .subscribe(() => {
        alert("User logged in on Mealz!");
      });
  }

  // Call this method from your app when the user logs out
  handleLogout() {
    window.miam.user.reset();
  }
}
```

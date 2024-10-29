---
sidebar_position: 1
label: "Installation"
---

# Installation

## Dependency

We are self-hosting our libray on <a target="\_blank" href='https://github.com/miamtech/releaseMealz'> GitHub</a>.
To use it follow these steps : 


Add a dependency resolution in your settings.gradle on repository root :

``` gradle

dependencyResolutionManagement {
    repositories {
        maven {
            url = uri("https://github.com/miamtech/releaseMealz/raw/main")
        }
    }
}
```

then import in your module build.gradle 

``` gradle
// Your module gradle file
implementation("ai.mealz.android:mealz-android:<version>")
implementation("ai.mealz.core:mealz-core:<version>")
```

## ProGuard config

If you have enabled minification, you must add these lines in your ProGuard config file 

```
-keep class ai.mealz.core.model.** { *; }
-keep class ai.mealz.core.services.** { *; }
```

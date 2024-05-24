---
sidebar_position: 1
label: "Installation"
---

# Installation

We are self-hosting our libray on <a target="\_blank" href='https://github.com/miamtech/releaseMealz'> github</a>.
To use it you have to folow those step : 


``` gradle
// In your main gradle file 
dependencyResolutionManagement {
    repositories {
        maven {
            url = uri("https://github.com/miamtech/releaseMealz/raw/main")
        }
      }
}
```

Import with Gradle Kotlin DSL

``` gradle
// Your module gradle file
dependencies {
    implementation("ai.mealz.core:mealz-core:version")
    implementation("ai.mealz.android:mealz-android:version")
}
```



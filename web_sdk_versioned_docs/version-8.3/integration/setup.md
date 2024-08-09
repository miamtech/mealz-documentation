---
sidebar_position: 3
---

# Setup

## Setup for using WebComponents

Depending on the framework, you may need to do some things for WebComponents to not break your compilation.

### Example for Angular

To let the Angular compiler know that unknown HTML tags in your code may come from an external source to which it doesn't have access, you will have to add CUSTOM_ELEMENTS_SCHEMA into your app.module.ts (or any module that declares components which use our WebComponents).


```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
```

### Example for Vue

To let the Vue compiler know that the unknown HTML tags of our WebComponents in your code come from an external source to which it doesn't have access, you will have to add the tags names to `Vue.config.ignoredElements` like this :

```javascript
Vue.config.ignoredElements = [
  'webc-miam-suggestion-card'
]
```

### Other frameworks

WebComponents is a well-documented model, so it is highly probable that you will find documentation on how to implement WebComponents for your specific application.

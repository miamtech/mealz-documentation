import ImageSideBySide from '@site/src/components/ImageSideBySide';

You would like to implement a new Loader, let's say just with simple text.
First & foremost, you would create a Jetpack Compose View that implements the Mealz `Loader`.

```kotlin
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import com.miam.sdk.components.baseComponent.loader.Loader
import com.miam.sdk.components.baseComponent.loader.LoaderParameters

class CustomLoader: Loader {
    @Composable
    override fun Content(params: LoaderParameters) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = "plz wait ... ",
                style = Typography.h1.copy(fontWeight = FontWeight.Bold),
                color = Colors.primary
            )
        }
    }
}
```
in this case, `LoaderParameters` does not expect anything passed in
```kotlin
object LoaderParameters
```

## Add it to our MealzTemplateManager

Next, you would pass that component into the `view` of the `loader` for the `catalog`.

```swift
class MealzTemplateManager {
    init {
        Colors.primary = Color(0xFF44D6B3)
        MiamTheme.Template {
            catalog {
                loader {
                    view = CustomLoader()
                }
            }
```

Here is the result when we run our application.
<ImageSideBySide 
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/android/customization/defaultLoader.png"
firstAlt="Old Background"
firstCaption="Old Loader on Catalog"
firstImageMaxWidth="250px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/android/customization/customLoader.png"
secondAlt="New Background"
secondCaption="New Loader on Catalog"
secondImageMaxWidth="250px"
/>
<br /> <br />

If you want to see what options you have, you can read our documentation, or directly view the parameters in Android documentation.
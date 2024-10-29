After the `RecipeDetails`, implement the `SponsorDetails` Page.
`SponsorDetails` expects a `sponsor` object.
`SponsorDetails` also expects `params: SponsorDetailsParameters`.

#### SponsorDetailsParameters
`SponsorDetailsParameters` does not expect navigation functions, so you don't need to implement anything unless you add custom views.

#### Putting it all together

Now we have all the parameters we need for the `SponsorDetails`.

```swift
SponsorDetails(
    params: SponsorDetailsParameters() /* default */,
    sponsor: sponsor /* the callback navigating to this view will provide this */
)
```
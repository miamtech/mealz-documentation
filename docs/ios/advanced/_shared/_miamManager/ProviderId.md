This will be provided by Mealz during implementation.
This will include information such as PROD vs UAT & your unique company identifier.

If you just want to play around, you can use the sample Mealz Store:

```swift
val providerKey = "ewoJInByb3ZpZGVyX2lkIjogIjE0IiwKCSJwbGF1c2libGVfZG9tYWluZSI6ICJtaWFtLnRlc3QiLAoJIm1pYW1fb3JpZ2luIjogIm1pYW0iLAoJIm9yaWdpbiI6ICJtaWFtIiwKCSJtaWFtX2Vudmlyb25tZW50IjogIlVBVCIKfQ"
```
which you'll see decodes from base 64 to this:
```json
{
	"provider_id": "14",
	"plausible_domaine": "miam.test",
	"miam_origin": "miam",
	"origin": "miam",
	"miam_environment": "UAT"
}
```
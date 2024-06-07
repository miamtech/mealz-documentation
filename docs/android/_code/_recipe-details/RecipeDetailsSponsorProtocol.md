```koltin 
interface RecipeDetailSponsorBanner {
    @Composable
    fun Content(params: RecipeDetailSponsorBannerParameters){

    }
}
```
where

```koltin 
data class RecipeDetailSponsorBannerParameters(
    val sponsor: Sponsor,
    val openSponsorDetail: (sponsor: Sponsor) -> Unit
)
```
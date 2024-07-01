```koltin 
interface PreferencesSuccessHeader {
    @Composable
    fun Content(params: PreferencesSuccessHeaderParameters){
        
    }
}
```
where
```koltin 
data class PreferencesSuccessHeaderParameters(val close: () -> Unit)
```
import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as PreferencesProtocols from '../../../_code/_preferences/'
import EmptyProtocol from '../../../_code/_base/EmptyProtocol.md'
import LoadingProtocol from '../../../_code/_base/LoadingProtocol.md'

<details>
  <summary>Preferences</summary>
  <div>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`var PreferencesLoadingTemplate: (@Composable() () -> Unit)?`}
            newCode={<LoadingProtocol />}/>
    </details>
<details>
        <summary>Search Result Row</summary>
        <CodeUpdateComparison
oldCode={`var SearchResultRowPreferencesTemplate: (@Composable() (select: () -> Unit, name: String,) -> Unit)?`}
            newCode={<PreferencesProtocols.PreferencesSearchResultRowProtocol />}/>
    </details>
<details>
        <summary>Footer</summary>
        <CodeUpdateComparison 
oldCode={`var PreferencesFooterTemplate: (@Composable() (closePref: () -> Unit, applyPref: () -> Unit, recipesFound: Int) -> Unit)?`}
            newCode={<PreferencesProtocols.PreferencesFooterProtocol />}/>
    </details>
<details>
        <summary>Search</summary>
        <CodeUpdateComparison 
oldCode={`var SearchPreferencesTemplate: (@Composable() (
        back: () -> Unit, text: TextFieldValue, onChange: (value: TextFieldValue) -> Unit) -> Unit)?`}
            newCode={<PreferencesProtocols.PreferencesSearchFieldProtocol />}/>
    </details>
<details>
        <summary>Diet</summary>
        <CodeUpdateComparison 
oldCode={`var DietPreferencesSectionTemplate: (@Composable() (dietsTag: List<CheckableTag>, togglePreference: (tagIdToToogle: String) -> Unit) -> Unit)?`} 
newCode={<PreferencesProtocols.PreferencesDietProtocol />}/>
    </details>
<details>
        <summary>Equipment</summary>
        <CodeUpdateComparison 
oldCode={`var EquipmentPreferencesSectionTemplate: (@Composable() (
        equipmentsTag: List<CheckableTag>, togglePreference: (tagIdToToogle: String) -> Unit) -> Unit)?`} 
newCode={<PreferencesProtocols.PreferencesEquipmentProtocol />}/>
    </details>
<details>
        <summary>Guest</summary>
        <CodeUpdateComparison 
oldCode={`var GuestPreferencesSectionTemplate: (@Composable() (guests: Int?, guestChanged: (count: Int) -> Unit) -> Unit)?`} newCode={<PreferencesProtocols.PreferencesGuestProtocol />}/>
    </details>
<details>
        <summary>Ingredients</summary>
        <CodeUpdateComparison 
oldCode={`var IngredientPreferencesSectionTemplate: (@Composable() (
        ingredientsTag: List<CheckableTag>, togglePreference: (tagIdToToogle: String) -> Unit,
        back: () -> Unit, goToSearch: () -> Unit) -> Unit)?`} 
newCode={<PreferencesProtocols.PreferencesIngredientsProtocol />}/>
    </details>

<details>
        <summary>Search Loading</summary>
        <CodeUpdateComparison 
oldCode={`var SearchPreferencesLoadingTemplate: (@Composable() () -> Unit)?`}
            newCode={<LoadingProtocol />}/>
    </details>
<details>
        <summary>Search Empty</summary>
        <CodeUpdateComparison 
oldCode={`var SearchPreferencesEmptyTemplate: (@Composable() () -> Unit)?`}
            newCode={<EmptyProtocol />}/>
    </details>
  </div>
</details>
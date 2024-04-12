import CodeUpdateComparison from '@site/src/components/CodeUpdateComparison'
import * as PreferencesProtocols from '@site/docs/ios/_code/_preferences/'
import EmptyProtocol from '@site/docs/ios/_code/_base/EmptyProtocol.md'
import LoadingProtocol from '@site/docs/ios/_code/_base/LoadingProtocol.md'
import SearchProtocol from '@site/docs/ios/_code/_base/SearchProtocol.md'

<details>
  <summary>Preferences</summary>
  <div>
    <p>We have moved to using individual protocols for each section of the Preferences Page</p>
<details>
        <summary>Loading</summary>
        <CodeUpdateComparison 
oldCode={`preferencesLoadingViewTemplate: (() -> AnyView)?`}
            newCode=<LoadingProtocol />/>
    </details>
    <details>
        <summary>Success</summary>
        <CodeUpdateComparison 
oldCode={`preferencesSuccessViewTemplate: ((Int, [CheckableTag], [CheckableTag], [CheckableTag], Int, @escaping (Int) -> Void,
        @escaping (CheckableTag) -> Void, @escaping () -> Void, @escaping () -> Void, @escaping () -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>List</summary>
        <CodeUpdateComparison 
oldCode={`preferencesListViewTemplate: ((String, String, [CheckableTag], @escaping (CheckableTag) -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>List Item</summary>
        <CodeUpdateComparison 
oldCode={`preferenceListItemViewTemplate: ((CheckableTag, @escaping (CheckableTag) -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Tags List</summary>
        <CodeUpdateComparison 
oldCode={`preferencesTagsListViewTemplate: ((String, String, [CheckableTag], GeometryProxy,
        @escaping (CheckableTag) -> Void, @escaping () -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Add Tag</summary>
        <CodeUpdateComparison 
oldCode={`addTagViewTemplate: ((@escaping () -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Tag View</summary>
        <CodeUpdateComparison 
oldCode={`preferencesTagViewTemplate: ((CheckableTag, @escaping (CheckableTag) -> Void) -> AnyView)?`}
            newCode="Removed"/>
    </details>
<details>
        <summary>Footer</summary>
        <CodeUpdateComparison 
oldCode={`preferencesFooterView: ((@escaping () -> Void, @escaping () -> Void, Int) -> AnyView)?`}
            newCode=<PreferencesProtocols.PreferencesFooterProtocol />/>
    </details>
<details>
        <summary>Search</summary>
        <CodeUpdateComparison 
oldCode={`preferencesSearchViewTemplate: ((PreferencesSearchVM, @escaping () -> Void) -> AnyView)?`}
            newCode=<SearchProtocol />/>
    </details>
<p>Here are some new Templates:</p>
<details>
        <summary>Diet</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0" newCode=<PreferencesProtocols.PreferencesDietProtocol />/>
    </details>
<details>
        <summary>Equipment</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0" newCode=<PreferencesProtocols.PreferencesEquipmentProtocol />/>
    </details>
<details>
        <summary>Guest</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0" newCode=<PreferencesProtocols.PreferencesGuestProtocol />/>
    </details>
<details>
        <summary>Ingredients</summary>
        <CodeUpdateComparison 
oldCode="Added in 4.0" newCode=<PreferencesProtocols.PreferencesIngredientsProtocol />/>
    </details>
  </div>
</details>
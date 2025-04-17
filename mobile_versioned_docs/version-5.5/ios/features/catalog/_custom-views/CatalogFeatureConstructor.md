```swift
CatalogFeatureConstructor(
    useMealPlanner: useMealPlanner, // if you'd like to use the meal planner feature
    usesPreferences: Bool = true, // you can optionally turn off preferences (vegetarian, equipment, etc)
    baseViews: baseViews,
    catalogViewOptions: catalogViewOptions,
    recipesListViewOptions: recipesListViewOptions,
    packageRowViewOptions: packageRowViewOptions,
    catalogSearchViewOptions: catalogSearchViewOptions,
    filtersViewOptions: filtersViewOptions,
    preferencesViewOptions: preferencesViewOptions,
    preferencesSearchViewOptions: preferencesSearchViewOptions,
    catalogViewGridConfig: recipesListGridConfig, // these can be different
    catalogResultsGridConfig: recipesListGridConfig // these can be different
)
```
# Search experience consuming the Rick and Morty API with Vue 

Second challenge as an academy fellow in Empathy.co, there are two branches:
- main: contains the challenge implemented with Vue.
- vuex: contains the code from main migrated to Vuex.

## Prerequisites:

* Create a basic Vue project with `create-vue`.
* We would use as a reference [this](https://github.com/alonsogb/academy-path) project.

## Steps to complete:

1. Create Basic HTML and CSS structure in App.vue without any logic.
2. Modify text input so it makes API calls to [rick & morty API](https://rickandmortyapi.com/) using the
   [filter endpoint](https://rickandmortyapi.com/documentation/#filter-characters). Save the results and print the characters by console.
3. Paint dynamically with `v-for` the characters with its name, status and image.
4. Modify the filters so they use the filters inside characters and print them dynamically with `v-for`. Make the filters work also.
5. Move each filter, character card and input to a separate component (e.g `StatusFilter`,`CharacterCard`,`SearchInput`) but ensure the
   application works properly after these changes.
6. Make one API call per filter, following API specification.
7. Put `CharacterCard` inside a `Grid` component to use `slots`.

## Bonus track

8. Create `FilterList` component that made the filter rendered interchangeable.

```vue
// some pseudocode that makes it more clear the point.

<FilterList :list="filters">
<RadioFilter/>
</FilterList>

// with these code we want to make clear that we want to render a list of filters but also we want that filters list to use radio buttons as filters.
```

9. Add fade-in transitions to the filters and cards using the `Transition` components pre-built on Vue. so every time you make a new request
   the filters and character cards appear with ease.
10. Add a button on the page so it shows a list of all the episodes. You should leave the layout as it is, but instead of showing characters
    information you would show episodes information in each card.

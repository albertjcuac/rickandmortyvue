# Search experience consuming the Rick and Morty API with Vue 

Second challenge as an academy fellow in Empathy.co, there are two branches:
- main: contains the challenge implemented with Vue.
- vuex: contains the code from main migrated to Vuex.

# VueX project challenge

## Prerequisites:

* Use your `vue` project created in the previous session.
* Create a new branch in your project to develop this challenge instead of creating a new project. Call it: `vuex-chanllenge`

## Steps to complete:

1. Create a basic store and move some data from your components to the store.
2. Use getters and the state to retrieve the info from the store.
3. Create mutations that modifies the state.
4. Create an action to call the api.
5. Divide the store en two modules, these modules should interact between them. Use `namespaced:true`.


<FilterList :list="filters">
<RadioFilter/>
</FilterList>

// with these code we want to make clear that we want to render a list of filters but also we want that filters list to use radio buttons as filters.
```

9. Add fade-in transitions to the filters and cards using the `Transition` components pre-built on Vue. so every time you make a new request
   the filters and character cards appear with ease.
10. Add a button on the page so it shows a list of all the episodes. You should leave the layout as it is, but instead of showing characters
    information you would show episodes information in each card.

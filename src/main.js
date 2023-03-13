import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
state:{
    characters: [],
    selectedFilter: 'all',
    visibleCharacters:[],
    query:''
},
mutations:{
    setCharacters(state, characters){
        state.characters=characters

    },
    setSelectedFilter(state, filter){
        state.selectedFilter=filter

    },
    setVisibleCharacters(state, visibleChar){
        state.visibleCharacters = visibleChar
    },
    setQuery(state, query){
        state.query = query
    },
},
getters:{
    getCharacters(state){
        return state.characters
    },
    getSelectedFilter(state){
        return state.selectedFilter
    },
    getVisibleCharacters(state){
        return state.visibleCharacters
    },
    getQuery(state){
        return state.query
    }
}



});


createApp(App).use(store).mount('#app')

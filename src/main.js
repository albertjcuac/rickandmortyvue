import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
state:{
    characters: [],
    selectedFilter: 'all',
    visibleCharacters:[]
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
    }

}



});


createApp(App).use(store).mount('#app')

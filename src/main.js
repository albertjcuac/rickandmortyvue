import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
state:{
    characters: [],
    selectedFilter: 'all'
},
mutations:{
    setCharacters(state, characters){
        state.characters=characters

    },
    setSelectedFilter(state, filter){
        state.selectedFilter=filter

    }

},
getters:{
    getCharacters(state){
        return state.characters
    },
    getSelectedFilter(state){
        return state.selectedFilter
    }

}



});


createApp(App).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
state:{
    characters: []
},
mutations:{
    setCharacters(state, characters){
        state.characters=characters

    }

},
getters:{
    getCharacters(state){
        return state.characters
    }

}



});


createApp(App).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

const store = createStore({
state:{
    characters: [],
    selectedFilter: 'all',
    visibleCharacters:[],
    query:'',
    currentPage : 1,
    totalPages:0,
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
    setCurrentPage(state, currentPage){
        state.currentPage = currentPage
    },
    setTotalPages(state, totalPages){
        state.totalPages = totalPages
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
    },
    getCurrentPage(state){
        return state.currentPage
    },
    getTotalPages(state){
        return state.totalPages
    }
},
actions:{
    decreasePage({commit,state}){
        let page=state.currentPage-1;
        commit('setCurrentPage',page)

    },

    increasePage({commit,state}){
        let page=state.currentPage+1;
        commit('setCurrentPage',page)


    },

   async fetchAllCharacters({commit,state},url){
       fetch(url+'&page='+state.currentPage)
           .then(response => response.json())
           .then(data => {
               commit('setTotalPages',data.info.pages);
               commit('setVisibleCharacters',data.results);
               commit('setCharacters',data.results);

           });

    },
    async fetchFilteredCharacters({commit,state},url){
        fetch(url + `&status=` + state.selectedFilter+'&page='+state.currentPage)
            .then(response => response.json())
            .then(data => {
                commit('setTotalPages',data.info.pages);
                commit('setVisibleCharacters',data.results);

            });
    }

}


});


createApp(App).use(store).mount('#app')

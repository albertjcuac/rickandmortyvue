
import { State } from "vue";
import { Dispatch, Commit } from "vuex";
import { Store } from 'vuex'


declare module '@vue/runtime-core' {
    interface State {
        selectedFilter: 'all',
        query:'',

    }
    interface ComponentCustomProperties {
        $store: Store<State>|Store<Commit>|Store<Dispatch>
    }
}


export const searchModule ={



namespaced:true,
state:()=>({
    selectedFilter: 'all',
    query:'',



}),
mutations:{

    setSelectedFilter(state, filter){
        state.selectedFilter=filter

    },

    setQuery(state, query){
        state.query = query
    },


},

getters:{
    getSelectedFilter(state){
        return state.selectedFilter
    },

    getQuery(state){
        return state.query
    },


},









}
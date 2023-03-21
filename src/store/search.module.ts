
import { MutationTree, GetterTree, Module } from 'vuex';

interface SearchState {
    selectedFilter: string;
    query: string;
}

const state: SearchState = {
    selectedFilter: 'all',
    query: '',
};

const mutations: MutationTree<SearchState> = {
    setSelectedFilter(state, filter: string) {
        state.selectedFilter = filter;
    },

    setQuery(state, query: string) {
        state.query = query;
    },
};

const getters: GetterTree<SearchState, any> = {
    getSelectedFilter(state) {
        return state.selectedFilter;
    },
    getQuery(state) {
        return state.query;
    },
};



export const searchModule: Module<SearchState, any> = {
    namespaced: true,
    state,
    mutations,
    getters,
};

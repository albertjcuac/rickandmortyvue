import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

interface Character {
    // Define la estructura de cada personaje
}

interface State {
    characters: Character[];
    visibleCharacters: Character[];
    currentPage: number;
    totalPages: number;
}

const state: State = {
    characters: [],
    visibleCharacters: [],
    currentPage: 1,
    totalPages: 0,
};

const mutations: MutationTree<State> = {
    setCharacters(state, characters: Character[]) {
        state.characters = characters;
    },
    setVisibleCharacters(state, visibleChar: Character[]) {
        state.visibleCharacters = visibleChar;
    },
    setCurrentPage(state, currentPage: number) {
        state.currentPage = currentPage;
    },
    setTotalPages(state, totalPages: number) {
        state.totalPages = totalPages;
    },
};

const actions: ActionTree<State, any> = {
    async fetchAllCharacters({ commit, state }, url: string) {
        await fetch(url + '&page=' + state.currentPage)
            .then((response) => response.json())
            .then((data) => {
                commit('setTotalPages', data.info.pages);
                commit('setVisibleCharacters', data.results);
                commit('setCharacters', data.results);
            });
    },
    async fetchFilteredCharacters({ commit, state, rootGetters }, url: string) {
        await fetch(url + `&status=` + rootGetters['search/getSelectedFilter'] + '&page=' + state.currentPage)
            .then((response) => response.json())
            .then((data) => {
                commit('setTotalPages', data.info.pages);
                commit('setVisibleCharacters', data.results);
            });
    },
    decreasePage({ commit, state }) {
        const page = state.currentPage - 1;
        commit('setCurrentPage', page);
    },
    increasePage({ commit, state }) {
        const page = state.currentPage + 1;
        commit('setCurrentPage', page);
    },
};

const getters: GetterTree<State, any> = {
    getCharacters(state) {
        return state.characters;
    },
    getVisibleCharacters(state) {
        return state.visibleCharacters;
    },
    getCurrentPage(state) {
        return state.currentPage;
    },
    getTotalPages(state) {
        return state.totalPages;
    },
};

export const charactersModule: Module<State, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

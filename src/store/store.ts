
import {createStore} from 'vuex';
import {searchModule} from "./search.module";
import {charactersModule} from "./characters.module";

export const store=createStore({

modules:{
    search:searchModule,
    characters:charactersModule
}



})
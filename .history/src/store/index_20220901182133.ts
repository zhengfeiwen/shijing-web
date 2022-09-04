import { createStore } from "vuex";
const state = {
  num: 990
}

const actions = {
    add({commit}: any){
        commit('ADD')
    },
    reduce({commit}: any){
        commit('REDUCE')
    }
}

const mutations = {
    ADD(state: { num: number; }){
        state.num = state.num + 1
    },
    REDUCE(state: { num: number; }){
        state.num = state.num - 1
    }
}

 
export default createStore({
    state,
    mutations,
    actions
});
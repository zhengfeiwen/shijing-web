import { createStore } from "vuex";
const state = {
  num: 990
}

const actions = {
    add({commit},info){
        commit('ADD')
    },
    reduce({commit},info){
        commit('REDUCE')
    }
}

const mutations = {
    ADD(state){
        state.num = state.num + 1
    },
    REDUCE(state){
        state.num = state.num - 1
    }
}

 
export default createStore({
    state,
    mutations,
    actions
});
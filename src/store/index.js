import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IsSign: 0,
    token: ""
  },
  mutations: {
    ChangeIsSign(state, n) {
      state.IsSign = n;
    },
    SetToken(state, tok) {
      state.token = tok;
    }
  },
  actions: {},
  modules: {}
});

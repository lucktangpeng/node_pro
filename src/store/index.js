import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IsSign: 0
  },
  mutations: {
    ChangeIsSign(state, n) {
      state.IsSign = n;
    }
  },
  actions: {},
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import device from "./app";
Vue.use(Vuex);

new Vuex.Store({
  actions,
  state,
  mutations,
  modules: {
    device,
  }
  // strict: debug,
  //  	plugins: debug ? [createLogger()] : []
});

// const debug = process.env.NODE_ENV !== 'production'

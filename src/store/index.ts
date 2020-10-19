import Vue from 'vue';
import Vuex from 'vuex';

import news from './modules/news';
// import { StateInterface } from './types';

Vue.use(Vuex);

const store = {
  debug: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    news,
  },
};

export default new Vuex.Store(store);

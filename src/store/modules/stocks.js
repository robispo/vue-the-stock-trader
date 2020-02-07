import dataStocks from '../../data/stocks.js';

const state = {
  stocks: []
};

const mutations = {
  setStocks: (state, stocks) => {
    state.stocks = stocks;
  },
  rndStocks: s => {}
};

const actions = {
  buyStock: ({ commit }, p) => {
    commit('buyStock', p);
  },
  initStocks: ({ commit }, p) => {
    commit('setStocks', dataStocks);
  },
  ramdomizeStocks: ({ commit }) => {
    commit('rndStocks');
  }
};

const getters = {
  stocks: s => s.stocks
};

export default {
  state,
  getters,
  mutations,
  actions
};

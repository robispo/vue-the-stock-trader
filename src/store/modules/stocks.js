import dataStocks from '../../data/stocks.js';

const state = {
  stocks: []
};

const mutations = {
  setStocks: (state, stocks) => {
    state.stocks = stocks;
  },
  rndStocks: s => {
    s.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
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
  },
  loadDataStocks: ({ commit }, data) => {
    commit('setStocks', data.stocks);
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

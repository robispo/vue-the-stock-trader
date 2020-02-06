import dataStocks from '../../data/stocks.js';

const state = {
  stocks: [],
  funds: 10000
};

const mutations = {
  buyStock: (state, stock) => {
    const r = state.stocks.find(e => e.id == stock.stockId);
    if (r) {
      r.quantitiy += stock.quantitiy;
    } else {
      state.stocks.push({
        id: stock.stockId,
        quantitiy: stock.quantitiy
      });
    }
  }
};

const actions = {
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

const state = {
  stocks: [],
  funds: 10000
};

const mutations = {
  buyStock: (state, stock) => {
    const r = state.stocks.find(e => e.id == stock.stockId);
    if (r) {
      r.quantity += stock.quantity;
    } else {
      state.stocks.push({
        id: stock.stockId,
        quantity: stock.quantity
      });
    }
    state.funds -= stock.quantity * stock.stockPrice;
  },
  sellStock: (state, stock) => {
    const r = state.stocks.find(e => e.id == stock.stockId);
    let moneyBack = 0;

    if (r.quantity > stock.quantity) {
      r.quantity -= stock.quantity;
      moneyBack = stock.quantity * stock.stockPrice;
    } else {
      moneyBack = r.quantity * stock.stockPrice;
      state.stocks.splice(state.stocks.indexOf(r), 1);
    }
    state.funds += moneyBack;
  },
  loadDataPorfolio: (s, d) => {
    s.funds = d.funds;
    s.stocks = d.stockPorfolio;
  }
};

const actions = {
  sellStock: ({ commit }, order) => commit('sellStock', order),
  loadDataPorfolio: ({ commit }, data) => {
    commit('loadDataPorfolio', data);
    commit('loadDataStocks', data);
  }
};

const getters = {
  stockPorfolio: (s, g) => {
    return s.stocks.map(e => {
      const r = g.stocks.find(gs => gs.id == e.id);
      return {
        id: e.id,
        quantity: e.quantity,
        name: r.name,
        price: r.price
      };
    });
  },
  funds: s => s.funds
};

export default {
  state,
  getters,
  mutations,
  actions
};

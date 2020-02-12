import firebaseService from '../services/firebase.js';

export const loadData = ({ commit }) => {
  const data = firebaseService.loadData();

  data.then(
    d => {
      if (d) {
        commit('loadDataPorfolio', d);
        commit('setStocks', d.stocks);
      }
    },
    e => console.log(e)
  );
};

export const saveData = ({ commit }, data) => {
  firebaseService.saveData(data);
};

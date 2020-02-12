import Vue from 'vue';

const saveData = data => {
  Vue.http
    .put('data.json', data)
    .then(
      r => r.json(),
      e => console.log(e)
    )
    .then(
      d => console.log(d),
      e => console.log(e)
    );
};

const loadData = () => {
  return Vue.http
    .get('data.json')
    .then(
      r => r.json(),
      e => console.log(e)
    )
    .then(
      d => d,
      e => console.log(e)
    );
};

export default {
  saveData,
  loadData
};

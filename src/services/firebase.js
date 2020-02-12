import Vue from 'vue';

const saveData = async data => {
  const req = await Vue.http.put('data.json', data);
  const data = await req.json();
  console.log(data);

  // Vue.http
  //     .put('data.json', data)
  //     .then(
  //         r => r.json(),
  //         e => console.log(e)
  //     )
  //     .then(
  //         d => console.log(d),
  //         e => console.log(e)
  //     );
};

const loadData = async () => {
  const req = await Vue.http.get('data.json');
  return await req.json();

  //   Vue.http
  //     .get('data.json')
  //     .then(
  //       r => r.json(),
  //       e => console.log(e)
  //     )
  //     .then(
  //       d => d,
  //       e => console.log(e)
  //     );
};

export default {
  saveData,
  loadData
};

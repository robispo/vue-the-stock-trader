import Home from './components/Home.vue';
import Porfolio from './components/Home.vue';
import PorfolioStock from './components/Home.vue';
import Stocks from './components/Home.vue';
import StocksStock from './components/Home.vue';

export const routes = [
  { path: '/', component: Home, name: 'home' },
  {
    path: '/porfolio',
    component: Porfolio,
    name: 'porfolio',
    children: [{ path: ':id', component: PorfolioStock, name: 'porfolioStock' }]
  },
  {
    path: '/stocks',
    component: Stocks,
    name: 'stocks',
    children: [{ path: ':id', component: StocksStock, name: 'stock' }]
  },
  { path: '*', redirect: { name: 'home' } }
];

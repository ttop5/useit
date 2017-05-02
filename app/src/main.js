import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from './views/Home';
import News from './views/News';
import Square from './views/Square';
import Me from './views/Me';
import Login from './views/Login';
import Register from './views/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/news',
    component: News,
  },
  {
    path: '/square',
    component: Square,
  },
  {
    path: '/me',
    component: Me,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');

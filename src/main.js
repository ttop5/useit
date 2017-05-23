import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from './views/Home';
import Products from './views/Products';
import News from './views/News';
import NewsItem from './views/NewsItem';
import Square from './views/Square';
import Me from './views/Me';
import MyArticle from './views/MyArticle';
import AccountSetting from './views/AccountSetting';
import ChangePasswd from './views/ChangePasswd';
import AboutSoft from './views/AboutSoft';
import Login from './views/Login';
import Register from './views/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/news',
    component: News,
  },
  {
    path: '/news_item',
    component: NewsItem,
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
    path: '/myarticle',
    component: MyArticle,
  },
  {
    path: '/accountsetting',
    component: AccountSetting,
  },
  {
    path: '/changepasswd',
    component: ChangePasswd,
  },
  {
    path: '/aboutsoft',
    component: AboutSoft,
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

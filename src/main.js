// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import panel from './components/search-panel'
import result from './components/result'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import vueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(ElementUI)
const routes = [
  {
    path: '/',
    name: 'panel',
    component: panel
  },
  {
    path: '/result',
    name: 'result',
    component: result
  }
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App },
  router
})

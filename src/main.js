// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'

import Global from './assets/global.js'

import {
  Button,
  Search,
  Header,
  Cell
} from 'mint-ui'


Vue.use(ElementUI);
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.Global = Global


Vue.component(Button.name, Button)
Vue.component(Search.name, Search)
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})


// const originalPush = router.prototype.push
// router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

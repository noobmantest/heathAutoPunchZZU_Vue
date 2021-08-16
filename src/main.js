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
import Tools from './assets/tools.js'
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
Vue.prototype.Tools = Tools

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


const originalPush = router.prototype.push
router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


//路由守卫
router.beforeEach((to, from, next) => {

  console.log(to.path) //每次跳转的路径

  //路由中设置的needLogin字段就在to当中
  if (window.sessionStorage.user) {
    console.log(window.sessionStorage);
    // console.log(to.path) //每次跳转的路径

    if (to.path === '/') {
      //登录状态下 访问login.vue页面 会跳到index.vue
      next({
        path: '/Login'
      });
    } else {
      next();
    }
  } else {

    // 如果没有session ,访问任何页面。都会进入到 登录页
    if (to.path === '/' || to.path === '/Register') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      next();
    } else { // 否则 跳转到登录页面
      next({
        path: '/'
      });
    }
  }
})

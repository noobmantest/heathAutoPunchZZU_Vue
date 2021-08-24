import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login.vue'
import findUser from '@/components/findUser.vue'
import index from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/findUser',
      name: 'findUser',
      component: findUser
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

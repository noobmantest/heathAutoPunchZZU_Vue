import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FindCar from '@/components/index.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Main from '@/components/Main.vue'
import MyCar from '@/components/MyCar.vue'
import AddCar from '@/components/AddCar.vue'
import HistoryPark from '@/components/HistoryPark.vue'
import MyMsg from '@/components/MyMsg.vue'
import UpdateUserMsg from '@/components/UpdateUserMsg.vue'
import UploadImage from '@/components/UploadImage.vue'
import findUser from '@/components/findUser.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/findCar',
      name: 'FindCar',
      component: FindCar
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/MyCar',
      name: 'MyCar',
      component: MyCar
    }, {
      path: '/AddCar',
      name: 'AddCar',
      component: AddCar
    }, {
      path: '/HistoryPark',
      name: 'HistoryPark',
      component: HistoryPark
    }, {
      path: '/MyMsg',
      name: 'MyMsg',
      component: MyMsg
    }, {
      path: '/UpdateUserMsg',
      name: 'UpdateUserMsg',
      component: UpdateUserMsg
    }, {
      path: '/UploadImage',
      name: 'UploadImage',
      component: UploadImage
    }
  ]
})

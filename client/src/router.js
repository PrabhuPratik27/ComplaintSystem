import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserRegister from './components/Auth/UserRegister'
import UserLogin from './components/Auth/UserLogin'
import EnggRegister from './components/Auth/JERegister'
import EnggLogin from './components/Auth/JELogin'
import AdminLogin from './components/Auth/AdminLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/engg/register',
      name: 'EnggRegister',
      component: EnggRegister
    },
    {
      path: '/engg/login',
      name: 'EnggLogin',
      component: EnggLogin 
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})

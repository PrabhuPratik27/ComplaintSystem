import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/Auth/UserLogin'
import EnggLogin from './components/Auth/JELogin'
import AdminLogin from './components/Auth/AdminLogin'
import AddComplaint from './components/AddComplaint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin
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
    },
    {
      path: '/complaint/add',
      name:'AddComplaint',
      component: AddComplaint
    }
  ]
})

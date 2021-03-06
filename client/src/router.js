import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/Auth/UserLogin'
import EnggLogin from './components/Auth/JELogin'
import AdminLogin from './components/Auth/AdminLogin'
import AddComplaint from './components/AddComplaint'
import ComplaintList from './components/Complaints/Complaintslist'
import CompList from './components/Complaints/CompList'
import EditComplaint from './components/Complaints/EditComplaint'
import UpdateComplaint from './components/Complaints/UpdateComplaint'

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
    },
    {
      path: '/complaint/list',
      name: 'Complaintlist',
      component: ComplaintList
    },
    {
      path: '/complaint/edit/:name',
      name: 'EditComplaint',
      component: EditComplaint
    },
    {
      path: '/complaint/list/engg',
      name: 'CompList',
      component: CompList
    },
    {
      path: '/complaint/update/:name',
      name: 'UpdateComplaint',
      component: UpdateComplaint
    }
  ]
})

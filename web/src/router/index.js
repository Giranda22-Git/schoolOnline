import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kaspi_pay from '../views/Kaspi_pay.vue'
import Videos from '../views/Videos.vue'
import axios from 'axios'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kaspi-pay',
    name: 'Kaspi_pay',
    component: Kaspi_pay
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/watch/:id',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/Copyright',
    name: 'Copyright',
    component: () => import('../views/Copyright.vue')
  },
  {
    path: '/OBJECTIVES',
    name: 'OBJECTIVES',
    component: () => import('../views/OBJECTIVES.vue')
  },
  {
    path: '/OFFER',
    name: 'OFFER',
    component: () => import('../views/OFFER.vue')
  },
  {
    path: '/Props',
    name: 'Props',
    component: () => import('../views/Props.vue')
  },
  {
    path: '/PayInfo',
    name: 'PayInfo',
    component: () => import('../views/PayInfo.vue')
  },
  {
    path: '/Certificate',
    name: 'Certificate',
    component: () => import('../views/Certificate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

/*
{
      const user = {
        firstName: localStorage.getItem('autorize-firstName'),
        lastName: localStorage.getItem('autorize-lastName'),
        phone: localStorage.getItem('autorize-phone'),
        privilege: localStorage.getItem('autorize-privilege')
      }
      axios.post("http://localhost:3000/Validation/Users/Admin", user)
      .then( response => {
        console.log(response.data)
      })
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kaspi_pay from '../views/Kaspi_pay.vue'
import Videos from '../views/Videos.vue'
import admin from '../views/admin.vue'


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
    path: '/watch',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
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

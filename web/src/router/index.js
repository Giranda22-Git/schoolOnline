import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kaspi_pay from '../views/Kaspi_pay.vue'


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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

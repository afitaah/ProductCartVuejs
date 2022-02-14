import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Pastorders from '../views/Pastorders.vue'

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Pastorders',
    name: 'Pastorders',
    component: Pastorders
  }
]
// history: createWebHistory(process.env.BASE_URL),
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newMedicine from '../views/newMedicine.vue'
import Shop from '../views/Shop.vue'
import Search from '../views/Search.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newMedicine',
    name: 'newMedicine',
    component: newMedicine
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/shop/search/:search',
    name: 'searchValue',
    component: Search
  },
  {
    path: '/shop/:id',
    name: 'id',
    component: Comments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import FindUsers from '../views/FindUsers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'find'
  },
  {
    path: '/find',
    name: 'find',
    component: FindUsers
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

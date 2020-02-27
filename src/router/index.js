import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'

Vue.use(VueRouter)
const title = '| Simple SNS'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'find'
  },
  {
    path: '/find',
    name: 'find',
    component: Users,
    meta: {
      title: `Find ${title}`
    }
  },
  {
    path: '/following',
    name: 'following',
    component: Users,
    meta: {
      title: `Following ${title}`
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Users,
    meta: {
      title: `Search ${title}`
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/practice',
    name: 'practice',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/Practice.vue')
      }
  },
  {
    path: '/counter',
    name: 'counter',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/counter.vue')
      }
  },
  {
    path: '/search',
    name: 'search',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/search.vue')
      }
  },
  {
    path: '/filterDemo',
    name: 'filterDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/filterDemo.vue')
      }
  },
  {
    path: '/listDemo',
    name: 'listDemo',
    component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Practice/ListDemo.vue')
      }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

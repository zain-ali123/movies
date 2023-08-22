import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginUser from '../components/LoginUser.vue'
import UserView from '../views/UserView.vue'
import AddMovies from '../components/AddMovies.vue'
import ListAllMovies from '../components/ListAllMovies.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
    {
    path: '/register',
    name: 'reg',
    component: UserView
  },
  {
    path: '/add',
    name: 'add',
    component: AddMovies
  },
    {
    path: '/all',
    name: 'all',
    component: ListAllMovies
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

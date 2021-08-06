import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import Director from '../views/Director.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/director',
    name: 'Director',
    component: Director
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  { 
    path: '/:catchAll(.*)', 
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

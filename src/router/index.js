import Login from '@/components/LoginForm.vue'
import UserList from '@/components/MasterUser.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/user-list',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

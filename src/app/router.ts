import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from '@/entities/session'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/home/ui/HomePage.vue') },
  { path: '/about', name: 'about', component: () => import('@/pages/about/ui/AboutPage.vue') },
  { path: '/users', name: 'users', component: () => import('@/pages/users/ui/UsersPage.vue') },
  { path: '/login', name: 'login', component: () => import('@/pages/login/ui/LoginPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/not-found/ui/NotFoundPage.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const session = useSessionStore()
  if (to.meta.requiresAuth && !session.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

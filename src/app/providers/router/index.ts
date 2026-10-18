import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/entities/session'
import { HomePage } from '@/pages/home'
import { UsersPage } from '@/pages/users'
import { UserDetailsPage, UserEditPage } from '@/pages/user-details'
import { UserCreatePage } from '@/pages/user-create'
import { AboutPage } from '@/pages/about'
import { LoginPage } from '@/pages/login'
import { NotFoundPage } from '@/pages/not-found'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersPage,
    },
    {
      path: '/users/new',
      name: 'user-create',
      component: UserCreatePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/users/:id',
      component: UserDetailsPage,
      props: true,
      children: [
        {
          path: 'edit',
          name: 'user-edit',
          component: UserEditPage,
          props: true,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

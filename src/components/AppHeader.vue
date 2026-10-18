<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

function handleLogout() {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        <i class="bi bi-dice-5-fill text-warning me-2"></i>Vue Lottery
      </RouterLink>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Головна</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">Про автора</RouterLink>
          </li>
          <li class="nav-item" v-if="authStore.isAuthenticated">
            <RouterLink class="nav-link" to="/users">Користувачі</RouterLink>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <template v-if="authStore.isAuthenticated">
            <span class="text-light" v-if="authStore.user">
              <i class="bi bi-person-circle me-1"></i>
              {{ authStore.user.firstName }} {{ authStore.user.lastName }}
            </span>
            <button class="btn btn-outline-light btn-sm" @click="handleLogout">
              Вийти
            </button>
          </template>
          <template v-else>
            <RouterLink class="btn btn-primary btn-sm" to="/login">
              Увійти
            </RouterLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div class="text-center py-5">
    <h1 class="display-4 fw-bold mb-3">Вітаємо у Vue Lottery App!</h1>
    <p class="lead text-muted mb-4">
      Система управління учасниками та проведення лотерейних розіграшів.
    </p>

    <div class="d-flex justify-content-center gap-3">
      <RouterLink v-if="authStore.isAuthenticated" to="/users" class="btn btn-primary btn-lg">
        Перейти до списку користувачів
      </RouterLink>
      <RouterLink v-else to="/login" class="btn btn-primary btn-lg">
        Увійти в систему
      </RouterLink>
      <RouterLink to="/about" class="btn btn-outline-secondary btn-lg">
        Дізнатися більше
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/entities/session'

const sessionStore = useSessionStore()
</script>

<template>
  <nav class="app-navigation">
    <router-link to="/">Головна</router-link>
    <router-link to="/users">Користувачі</router-link>
    <router-link to="/about">Про автора</router-link>
    
    <router-link v-if="!sessionStore.isAuthenticated" to="/login" class="login-link">
      Увійти
    </router-link>
    <button v-else @click="sessionStore.clearSession()" class="logout-btn">
      Вийти
    </button>
  </nav>
</template>

<style scoped lang="scss">
.app-navigation {
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #e5e7eb;
    transition: color 0.2s;

    &:hover, &.router-link-active {
      color: #10b981;
      font-weight: bold;
    }
  }

  .login-link {
    padding: 6px 14px;
    border: 1px solid #10b981;
    border-radius: 6px;
  }

  .logout-btn {
    background: transparent;
    border: 1px solid #ef4444;
    color: #ef4444;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
  }
}
</style>

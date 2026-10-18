<script setup lang="ts">
import AppNavigation from './AppNavigation.vue'
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <router-link to="/" class="logo">Vue Lottery</router-link>
      <AppNavigation />
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #18181b;
  border-bottom: 1px solid #27272a;
  padding: 16px 0;

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
}
</style>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header'
</script>

<template>
  <div id="app-root">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app-root {
  min-height: 100vh;
  background-color: #09090b;
  color: #f4f4f5;
  font-family: system-ui, -apple-system, sans-serif;
}
.main-content {
  padding: 20px;
}
</style>

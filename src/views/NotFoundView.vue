<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="text-center py-5">
    <h1 class="display-1 fw-bold text-danger">404</h1>
    <h2 class="mb-3">Сторінку не знайдено</h2>
    <p class="text-muted mb-4">На жаль, запитувана сторінка не існує або була переміщена.</p>
    <RouterLink to="/" class="btn btn-primary">Повернутися на головну</RouterLink>
  </div>
</template>

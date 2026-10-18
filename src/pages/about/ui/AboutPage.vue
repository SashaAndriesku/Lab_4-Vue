<script setup lang="ts">
import { AppCard } from '@/shared/ui'
import authorPhoto from '@/shared/assets/author.jpg'
</script>

<template>
  <AppCard>
    <div class="about-author">
      <img :src="authorPhoto" alt="Андрієску Олександр Корнеліувич" class="author-photo" />
      <div class="author-info">
        <h1 class="page-title">Розробник проєкту</h1>
        <h2 class="author-name">Андрієску Олександр Корнеліувич</h2>
        <p class="muted">
          Розробник вебзастосунку Vue Lottery App. Проєкт реалізовано в межах лабораторної роботи
          з використанням сучасного стеку технологій Vue 3, TypeScript та архітектури Feature-Sliced Design.
        </p>
      </div>
    </div>
  </AppCard>
</template>

<style scoped lang="scss">
.about-author { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
.author-photo { width: 220px; height: 220px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.author-info { flex: 1; min-width: 280px; }
.author-name { font-size: 1.5rem; margin-bottom: 12px; color: var(--p-primary-color, #10b981); }
</style>

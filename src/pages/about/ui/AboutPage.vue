<script setup lang="ts">
import { AppCard } from '@/shared/ui'
import authorPhoto from '@/shared/ui/author.jpg'
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
          з використанням Vue 3, TypeScript та архітектури Feature-Sliced Design.
        </p>
      </div>
    </div>
  </AppCard>
</template>

<style scoped lang="scss">
.about-author {
  display: flex;
  gap: 24px;
  align-items: center;

  .author-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>

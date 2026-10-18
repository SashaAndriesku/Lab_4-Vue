<script setup lang="ts">
import { LoginForm } from '@/features/auth'
import { AppCard } from '@/shared/ui'
</script>

<template>
  <AppCard>
    <h1 class="page-title">Авторизація</h1>
    <LoginForm />
  </AppCard>
</template>

<style scoped lang="scss">
.page-title { margin-bottom: 20px; }
</style>

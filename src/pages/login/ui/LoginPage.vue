<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/entities/session'
import { AppCard, AppInput, AppButton } from '@/shared/ui'

const router = useRouter()
const sessionStore = useSessionStore()

const username = ref('')
const password = ref('')

function handleLogin() {
  if (username.value && password.value) {
    sessionStore.setSession('token-12345')
    router.push('/users')
  }
}
</script>

<template>
  <AppCard>
    <h1 class="page-title">Авторизація</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <AppInput v-model="username" label="Логін" placeholder="Введіть логін" />
      <AppInput v-model="password" type="password" label="Пароль" placeholder="Введіть пароль" />
      <AppButton label="Увійти" severity="primary" type="submit" />
    </form>
  </AppCard>
</template>

<style scoped lang="scss">
.page-title { margin-bottom: 20px; }
.login-form { max-width: 400px; display: flex; flex-direction: column; gap: 12px; }
</style>

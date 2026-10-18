<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/entities/session'
import { AppInput, AppButton } from '@/shared/ui'

const router = useRouter()
const sessionStore = useSessionStore()

function validateUsername(value: string) {
  if (!value || !value.trim()) return 'Логін є обов\'язковим полем'
  if (value.length < 3) return 'Логін має містити щонайменше 3 символи'
  return true
}

function validatePassword(value: string) {
  if (!value || !value.trim()) return 'Пароль є обов\'язковим полем'
  if (value.length < 6) return 'Пароль має містити щонайменше 6 символів'
  return true
}

const { handleSubmit } = useForm()
const { value: username, errorMessage: usernameError } = useField<string>('username', validateUsername)
const { value: password, errorMessage: passwordError } = useField<string>('password', validatePassword)

const onSubmit = handleSubmit(() => {
  sessionStore.setSession('token-12345')
  router.push('/users')
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <AppInput
      v-model="username"
      label="Логін"
      placeholder="Введіть логін (мін. 3 символи)"
      :errorMessage="usernameError"
    />
    <AppInput
      v-model="password"
      type="password"
      label="Пароль"
      placeholder="Введіть пароль (мін. 6 символів)"
      :errorMessage="passwordError"
    />
    <AppButton label="Увійти" severity="primary" type="submit" />
  </form>
</template>

<style scoped lang="scss">
.login-form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

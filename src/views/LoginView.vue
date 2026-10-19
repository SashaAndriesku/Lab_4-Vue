<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const errorMessage = ref('')

const schema = yup.object({
  username: yup.string().required("Ім'я користувача обов'язкове"),
  password: yup.string().min(6, 'Пароль має бути щонайменше 6 символів').required("Пароль обов'язковий"),
})

const { handleSubmit, isSubmitting } = useForm({ validationSchema: schema })

const { value: username, errorMessage: usernameError } = useField<string>('username')
const { value: password, errorMessage: passwordError } = useField<string>('password')

const onSubmit = handleSubmit(async (values) => {
  errorMessage.value = ''
  try {
    await authStore.login({ username: username.value, password: password.value })
    const redirectPath = (route.query.redirect as string) || '/users'
    router.push(redirectPath)
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'Помилка авторизації'
  }
})
</script>

<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-5">
      <div class="card shadow-sm p-4">
        <h3 class="card-title text-center mb-4">Вхід у систему</h3>
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label class="form-label">Логін (Username)</label>
            <input v-model="username" type="text" class="form-control" :class="{ 'is-invalid': usernameError }" />
            <div class="invalid-feedback">{{ usernameError }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Пароль</label>
            <input v-model="password" type="password" class="form-control" :class="{ 'is-invalid': passwordError }" />
            <div class="invalid-feedback">{{ passwordError }}</div>
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
            Увійти
          </button>
        </form>
        <div class="mt-3 text-muted small">
          <strong>Тестові дані:</strong><br />
          Логін: <code>emilys</code><br />
          Пароль: <code>emilyspass</code>
        </div>
      </div>
    </div>
  </div>
</template>

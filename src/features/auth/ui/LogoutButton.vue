<script setup lang="ts">
import { useSessionStore } from '@/entities/session'
import { AppButton } from '@/shared/ui'

const sessionStore = useSessionStore()
</script>

<template>
  <AppButton
    label="Вийти"
    severity="danger"
    @click="sessionStore.clearSession()"
  />
</template>

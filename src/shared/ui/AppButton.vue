<script setup lang="ts">
import Button from 'primevue/button'

defineProps<{
  label?: string
  icon?: string
  loading?: boolean
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger'
  href?: string
}>()

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()
</script>

<template>
  <a v-if="href" :href="href" target="_blank" class="p-button-wrapper">
    <Button :label="label" :icon="icon" :severity="severity" />
  </a>
  <Button
    v-else
    :label="label"
    :icon="icon"
    :loading="loading"
    :severity="severity"
    @click="$emit('click', $event)"
  />
</template>

<style scoped>
.p-button-wrapper { text-decoration: none; }
</style>

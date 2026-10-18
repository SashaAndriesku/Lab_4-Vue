<script setup lang="ts">
import InputText from 'primevue/inputtext'

defineProps<{
  modelValue?: string
  label?: string
  placeholder?: string
  errorMessage?: string
  type?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="app-input-field">
    <label v-if="label" class="app-input-label">{{ label }}</label>
    <InputText
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :class="{ 'p-invalid': !!errorMessage }"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <small v-if="errorMessage" class="p-error">{{ errorMessage }}</small>
  </div>
</template>

<style scoped lang="scss">
.app-input-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.app-input-label { font-weight: 600; font-size: 0.9rem; }
.p-error { color: #ef4444; margin-top: 4px; }
</style>

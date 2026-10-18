<script setup lang="ts">
defineProps<{ label?: string; icon?: string; href?: string }>()
</script>
<template>
  <a v-if="href" :href="href" target="_blank" class="app-button">
    <i v-if="icon" :class="icon"></i><span>{{ label }}</span>
  </a>
  <button v-else class="app-button">
    <i v-if="icon" :class="icon"></i><span>{{ label }}</span>
  </button>
</template>
<style scoped lang="scss">
.app-button {
  display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px;
  background-color: var(--p-primary-color, #10b981); color: #fff;
  border-radius: 6px; text-decoration: none; border: none; cursor: pointer;
}
</style>

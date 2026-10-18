<template>
  <div class="app-card"><slot /></div>
</template>

<style scoped lang="scss">
.app-card {
  padding: 24px;
  background: var(--p-content-background, #18181b);
  border-radius: 8px;
  border: 1px solid var(--p-content-border-color, #27272a);
  max-width: 1200px;
  margin: 24px auto;
}
</style>

<template>
  <nav class="app-navigation">
    <router-link to="/">Головна</router-link>
    <router-link to="/about">Про автора</router-link>
  </nav>
</template>

<style scoped lang="scss">
.app-navigation {
  display: flex;
  gap: 16px;
  a {
    text-decoration: none;
    color: inherit;
    &.router-link-active {
      font-weight: bold;
    }
  }
}
</style>

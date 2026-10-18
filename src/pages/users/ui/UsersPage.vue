<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/entities/user'
import { AppCard, AppButton } from '@/shared/ui'

const usersStore = useUsersStore()
const { users, isLoading, error } = storeToRefs(usersStore)
const { fetchUsers, removeUser } = usersStore

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <AppCard>
    <h1 class="page-title">Список користувачів</h1>
    <div v-if="isLoading" class="loading">Завантаження користувачів...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="users-list">
      <div v-for="user in users" :key="user.id" class="user-card">
        <div class="user-info">
          <strong>{{ user.firstName }} {{ user.lastName }}</strong>
          <span class="email">{{ user.email }}</span>
        </div>
        <AppButton label="Видалити" severity="danger" @click="removeUser(user.id)" />
      </div>
    </div>
  </AppCard>
</template>

<style scoped lang="scss">
.page-title { margin-bottom: 20px; }
.loading { padding: 20px 0; color: #a1a1aa; }
.error { color: #ef4444; }
.users-list { display: flex; flex-direction: column; gap: 12px; }
.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #27272a;
  border-radius: 6px;
  .user-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .email { font-size: 0.85rem; color: #a1a1aa; }
  }
}
</style>

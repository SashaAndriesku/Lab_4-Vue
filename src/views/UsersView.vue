<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()
const route = useRoute()
const router = useRouter()

function syncFromRoute() {
  const page = Number(route.query.page) || 1
  const q = (route.query.q as string) || ''
  usersStore.fetchUsers(page, q)
}

onMounted(syncFromRoute)
watch(() => route.query, syncFromRoute)

function setPage(p: number) {
  router.push({ query: { ...route.query, page: p > 1 ? String(p) : undefined } })
}
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Список користувачів</h2>
      <button class="btn btn-warning" :disabled="!usersStore.canPickWinner" @click="usersStore.pickWinner">
        <i class="bi bi-trophy-fill me-1"></i> Обрати переможця
      </button>
    </div>

    <div v-if="usersStore.winners.length > 0" class="alert alert-warning mb-4">
      <h5 class="alert-heading"><i class="bi bi-award me-2"></i>Переможці лотереї:</h5>
      <div class="d-flex gap-2 mt-2">
        <span v-for="w in usersStore.winners" :key="w.id" class="badge bg-dark fs-6">
          {{ w.firstName }} {{ w.lastName }}
          <i class="bi bi-x-circle ms-2" style="cursor: pointer" @click="usersStore.removeWinner(w.id)"></i>
        </span>
      </div>
    </div>

    <div v-if="usersStore.isLoading" class="text-center py-5">
      <div class="spinner-border text-primary"></div>
    </div>

    <div v-else-if="usersStore.error" class="alert alert-danger">
      {{ usersStore.error }}
    </div>

    <div v-else>
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Аватар</th>
              <th>Ім'я</th>
              <th>Email</th>
              <th>Вік</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersStore.users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>
                <img :src="user.image || 'https://via.placeholder.com/40'" class="rounded-circle" width="40" height="40" />
              </td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }}</td>
              <td><span class="badge bg-info text-dark">{{ user.role || 'User' }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav v-if="usersStore.totalPages > 1" class="d-flex justify-content-center mt-4">
        <ul class="pagination">
          <li v-for="p in usersStore.totalPages" :key="p" class="page-item">
            <button class="page-link" @click="setPage(p)">{{ p }}</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

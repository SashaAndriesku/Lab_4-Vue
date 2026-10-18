import { httpClient } from '@/shared/api'
import type { User, CreateUserDto, UpdateUserDto } from '../model/types'

export class UserService {
  async getAll(params?: { limit?: number; skip?: number }): Promise<{ users: User[]; total: number }> {
    const { limit = 10, skip = 0 } = params || {}
    const response = await httpClient.get(`/users?limit=${limit}&skip=${skip}`)
    return response.data
  }

  async getById(id: number): Promise<User> {
    const response = await httpClient.get(`/users/${id}`)
    return response.data
  }

  async create(dto: CreateUserDto): Promise<User> {
    const response = await httpClient.post('/users/add', dto)
    return response.data
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const response = await httpClient.put(`/users/${id}`, dto)
    return response.data
  }

  async delete(id: number): Promise<User> {
    const response = await httpClient.delete(`/users/${id}`)
    return response.data
  }
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  age?: number
  phone?: string
  username?: string
  image?: string
}

export interface CreateUserDto {
  firstName: string
  lastName: string
  email: string
  age?: number
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}

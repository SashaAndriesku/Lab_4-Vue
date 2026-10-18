const BASE_URL = import.meta.env.VITE_API_URL || 'https://dummyjson.com'

export const httpClient = {
  async get(url: string) {
    const res = await fetch(`${BASE_URL}${url}`)
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    return { data: await res.json() }
  },
  async post(url: string, body: unknown) {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    return { data: await res.json() }
  },
  async put(url: string, body: unknown) {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    return { data: await res.json() }
  },
  async delete(url: string) {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    return { data: await res.json() }
  }
}

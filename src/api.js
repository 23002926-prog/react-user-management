const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'

async function request(path, options = {}) {
  const response = await fetch(`${BASE}${path}`, options)

  if (!response.ok) {
    throw new Error('Falha ao comunicar com a API mock.')
  }

  return response.json()
}

export async function getUsers() {
  return request('/users')
}

export async function createUser(user) {
  return request('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
}

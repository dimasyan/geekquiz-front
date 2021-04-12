import axios from 'axios'

const client = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseUrl: 'http://127.0.0.1:8000/',
})

export const login = (data) => client.post('auth/login/', { ...data })

export const register = (data) => client.post('auth/register/', { ...data })

export const profile = (token) =>
  client.get('user/', {
    headers: { Authorization: `Bearer ${token}` },
  })

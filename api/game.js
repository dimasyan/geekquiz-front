import axios from 'axios'

const client = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://127.0.0.1:8000/',
})

export const createGame = (packId, token) => {
  const config = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : null
  return client.get(`start-game/?pack=${packId}`, config)
}

export const updateGame = (gameId, score, token) => {
  const config = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : null
  return client.put(`game/${gameId}`, { score }, config)
}

export const getHistory = (token) =>
  client.get(`games/`, { headers: { Authorization: `Bearer ${token}` } })

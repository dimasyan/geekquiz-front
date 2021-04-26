import axios from 'axios'

const client = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://127.0.0.1:8000/',
})

export const createGame = (packId) => client.get(`start-game/?pack=${packId}`)

export const updateGame = (gameId, score) =>
  client.put(`game/${gameId}`, { score })

export const updateGameAuth = (gameId, score, token) =>
  client.put(
    `game/${gameId}`,
    { score },
    { headers: { Authorization: `Bearer ${token}` } }
  )

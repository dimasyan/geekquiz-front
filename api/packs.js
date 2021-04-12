import axios from 'axios'

const client = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseUrl: 'http://127.0.0.1:8000/',
})

export const getPacks = () => client.get('packs/')

export const getPack = (id) => client.get(`pack/${id}`)

import axios from 'axios'

const packClient = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://127.0.0.1:8000/',
})

export const getPacks = () => packClient.get('packs/')

export const getPack = (id) => packClient.get(`pack/${id}`)

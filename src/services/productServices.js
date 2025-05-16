import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)

const getItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

const addItemService = (data, token) => axios.post(`${BASE_URL}/items`, data, {
  headers: {
    AUTHORIZATION: `Bearer ${token}`
  }
})

export { getAllItemsService, getItemService, addItemService }

import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const getAllItemsService = () => axios.get(`${BASE_URL}/items`)

const getItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

export { getAllItemsService, getItemService }

import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const signUpUserService = (data) => axios.post(`${BASE_URL}/register`, data)

export { signUpUserService }

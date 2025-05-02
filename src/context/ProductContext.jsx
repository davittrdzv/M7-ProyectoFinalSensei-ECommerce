import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-json-jwt.onrender.com/items')
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const data = {
    products, loading
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }

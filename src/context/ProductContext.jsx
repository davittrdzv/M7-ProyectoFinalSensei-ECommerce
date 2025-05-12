import { createContext, useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/productServices'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllItemsService()
        setProducts(response.data)
        setFilteredProducts(response.data)
        const uniqueCategories = [...new Set(response.data.map(product => product.category))].sort()
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const data = {
    products, filteredProducts, setFilteredProducts, loading, searchTerm, setSearchTerm, categories
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }

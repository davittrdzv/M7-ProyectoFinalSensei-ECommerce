import { createContext } from 'react'
import database from '@/assets/database.json'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const products = database.items
  const data = {
    products
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }

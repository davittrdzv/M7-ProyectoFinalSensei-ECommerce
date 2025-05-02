import { useContext } from 'react'
import { ProductContext } from '@/context/ProductContext'

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext debe ser usado dentro de un ProductProvider')
  }
  return context
}

import { useContext } from 'react'
import { ShopCartContext } from '@/context/ShopCartContext'

export const useShopCartContext = () => {
  const context = useContext(ShopCartContext)
  if (!context) {
    throw new Error('useShopCartContext debe ser usado dentro de un ShopCartProvider')
  }
  return context
}

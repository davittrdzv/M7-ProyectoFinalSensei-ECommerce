import { createContext, useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useProductContext } from '@/hooks/useProductContext'

const ShopCartContext = createContext()

const ShopCartProvider = ({ children }) => {
  const { user } = useAuthContext()
  const { products } = useProductContext()
  const userShopCartStorage = `${user.email}shopCart`
  const [userShopCart, setUserShopCart] = useState(() => {
    const storedUserShopCart = localStorage.getItem(userShopCartStorage)
    return storedUserShopCart ? JSON.parse(storedUserShopCart) : []
  })

  const addToShopCart = (productId) => {
    const addedProduct = products.find(product => product.id === productId)
    addedProduct.quantity = 1
    setUserShopCart([...userShopCart, addedProduct])
  }

  useEffect(() => {
    localStorage.setItem(userShopCartStorage, JSON.stringify(userShopCart))
    console.log(userShopCart)
  }, [userShopCart])

  const data = {
    userShopCart,
    addToShopCart
  }

  return (
    <ShopCartContext.Provider value={data}>
      {children}
    </ShopCartContext.Provider>
  )
}

export { ShopCartContext, ShopCartProvider }

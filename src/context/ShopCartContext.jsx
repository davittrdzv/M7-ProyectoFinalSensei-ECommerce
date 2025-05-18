import { createContext, useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useProductContext } from '@/hooks/useProductContext'

const ShopCartContext = createContext()

const ShopCartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuthContext()
  const { products } = useProductContext()

  const [userShopCart, setUserShopCart] = useState([])

  // Cargar carrito del usuario cuando esté autenticado y user.email esté disponible
  useEffect(() => {
    if (isAuthenticated && user?.email) {
      const key = `${user.email}_shopCart`
      const storedCart = localStorage.getItem(key)
      setUserShopCart(storedCart ? JSON.parse(storedCart) : [])
    } else {
      setUserShopCart([]) // Limpiar carrito si se hace logout
    }
  }, [isAuthenticated, user?.email])

  // Guardar en localStorage si hay usuario autenticado
  useEffect(() => {
    if (isAuthenticated && user?.email) {
      const key = `${user.email}_shopCart`
      localStorage.setItem(key, JSON.stringify(userShopCart))
    }
  }, [userShopCart, isAuthenticated, user?.email])

  const addToShopCart = (productId) => {
    if (!isAuthenticated || !user?.email) return
    const existingProduct = userShopCart.find(p => p.id === productId)
    if (existingProduct) {
      setUserShopCart(userShopCart.map(p =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      ))
    } else {
      const addedProduct = products.find(product => product.id === productId)
      if (!addedProduct) return
      setUserShopCart([...userShopCart, { ...addedProduct, quantity: 1 }])
    }
  }

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

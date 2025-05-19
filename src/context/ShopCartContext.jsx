import { createContext, useState, useEffect, useMemo } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useProductContext } from '@/hooks/useProductContext'

const ShopCartContext = createContext()

const ShopCartProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuthContext()
  const { products } = useProductContext()

  const [userShopCart, setUserShopCart] = useState([])
  const [isCartReady, setIsCartReady] = useState(false)

  // Cargar carrito cuando el usuario esté listo
  useEffect(() => {
    if (isAuthenticated && user?.email) {
      const key = `${user.email}_shopCart`
      const storedCart = localStorage.getItem(key)
      const parsedCart = storedCart ? JSON.parse(storedCart) : []
      setUserShopCart(parsedCart)
      setIsCartReady(true) // ✅ Marcar que ya se cargó desde localStorage
    } else {
      setUserShopCart([])
      setIsCartReady(false)
    }
  }, [isAuthenticated, user?.email])

  // Guardar en localStorage cuando cambie el carrito
  useEffect(() => {
    if (isAuthenticated && user?.email && isCartReady) {
      const key = `${user.email}_shopCart`
      localStorage.setItem(key, JSON.stringify(userShopCart))
    }
  }, [userShopCart, isAuthenticated, user?.email, isCartReady])

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

  const increaseQty = (productId) => {
    if (!isAuthenticated || !user?.email) return
    setUserShopCart(userShopCart.map(p =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  const decreaseQty = (productId) => {
    if (!isAuthenticated || !user?.email) return
    setUserShopCart(userShopCart.map(p =>
      p.id === productId && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
    ))
  }

  const deleteProduct = (productId) => {
    if (!isAuthenticated || !user?.email) return
    const newShopCart = userShopCart.filter(product => product.id !== productId)
    setUserShopCart(newShopCart)
  }

  const total = useMemo(() => {
    const subtotal = userShopCart.reduce((sum, p) => sum + p.price * p.quantity, 0)
    const shippingCost = subtotal > 1000 ? 0 : 300
    return {
      subtotal,
      shippingCost,
      total: subtotal + shippingCost
    }
  }, [userShopCart])

  const data = {
    userShopCart,
    addToShopCart,
    increaseQty,
    decreaseQty,
    deleteProduct,
    total
  }

  return (
    <ShopCartContext.Provider value={data}>
      {children}
    </ShopCartContext.Provider>
  )
}

export { ShopCartContext, ShopCartProvider }

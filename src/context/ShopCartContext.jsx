import { createContext } from 'react'

const ShopCartContext = createContext()

const ShopCartProvider = ({ children }) => {
  const data = {}

  return (
    <ShopCartContext.Provider value={data}>
      {children}
    </ShopCartContext.Provider>
  )
}

export { ShopCartContext, ShopCartProvider }

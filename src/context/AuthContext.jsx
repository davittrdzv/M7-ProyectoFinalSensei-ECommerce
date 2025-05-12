import { createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const data = {}

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

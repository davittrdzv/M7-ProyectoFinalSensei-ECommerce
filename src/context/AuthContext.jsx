import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token)
    setUserPayload(payload)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const payload = jwtDecode(token)
      setUserPayload(payload)
      setIsAuthenticated(true)
    }
  }, [])

  const data = {
    isAuthenticated,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

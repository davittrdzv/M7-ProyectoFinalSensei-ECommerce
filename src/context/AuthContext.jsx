import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { getMeUserService } from '@/services/userServices'

const AuthContext = createContext()
// Checar uso de promesa para lo de sweet alert
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userPayload, setUserPayload] = useState(null)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const login = async (token) => {
    localStorage.setItem('token', token)
    setToken(token)
    const payload = jwtDecode(token)
    setUserPayload(payload)
    setIsAuthenticated(true)
    try {
      const { status, data } = await getMeUserService(token)
      if (status === 200) {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        return data
      }
    } catch (error) {
      console.error('Error fetching user data during login:', error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUserPayload(null)
    setIsAuthenticated(false)
    setUser(null)
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { status, data } = await getMeUserService(token)
        if (status === 200) {
          setUser(data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    if (token) {
      const payload = jwtDecode(token)
      setUserPayload(payload)
      setIsAuthenticated(true)
      fetchUser()
    }
  }, [token])

  const data = {
    isAuthenticated,
    userPayload,
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

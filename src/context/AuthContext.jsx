import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { getMeUserService } from '@/services/userServices'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    return storedAuth ? JSON.parse(storedAuth) : false
  })
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
    localStorage.setItem('isAuthenticated', true)
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
    localStorage.removeItem('isAuthenticated')
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
      } finally {
        setLoading(false)
      }
    }
    if (token) {
      const payload = jwtDecode(token)
      setUserPayload(payload)
      setIsAuthenticated(true)
      fetchUser()
    } else {
      setLoading(false)
    }
  }, [token])

  const data = {
    isAuthenticated,
    userPayload,
    user,
    login,
    logout,
    loading,
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

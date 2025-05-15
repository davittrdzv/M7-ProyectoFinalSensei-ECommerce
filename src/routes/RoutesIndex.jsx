import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const RoutesIndex = () => {
  const { isAuthenticated } = useAuthContext()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!isAuthenticated ? <SignUp /> : <Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesIndex

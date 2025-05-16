import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import About from '@/pages/About'
import UserProfile from '@/pages/UserProfile'
import AddProducts from '@/pages/AddProducts'
import ShoppingCart from '@/pages/ShoppingCart'
import NotFound from '@/pages/NotFound'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const RoutesIndex = () => {
  const { isAuthenticated, user } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!isAuthenticated ? <SignUp /> : <Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/userprofile' element={isAuthenticated ? <UserProfile /> : <Navigate to='/' />} />
        <Route path='/shoppingcart' element={isAuthenticated ? <ShoppingCart /> : <Navigate to='/' />} />
        <Route path='/addproducts' element={isAuthenticated && user?.role === 'ADMIN' ? <AddProducts /> : <Navigate to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesIndex

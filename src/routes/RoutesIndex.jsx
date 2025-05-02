import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesIndex

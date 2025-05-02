import { Route, Routes } from 'react-router-dom'
import { ProductProvider } from '@/context/productContext.jsx'
import Home from '@/pages/Home'
import ProductDetails from '@/pages/ProductDetails'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductProvider><Home /></ProductProvider>} />
        <Route path='/productdetails/:productId' element={<ProductProvider><ProductDetails /></ProductProvider>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesIndex

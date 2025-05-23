import '@/styles/styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext.jsx'
import { ProductProvider } from '@/context/ProductContext.jsx'
import { ShopCartProvider } from '@/context/ShopCartContext.jsx'
import NavBar from '@/components/NavBar.jsx'
import Footer from '@/components/Footer.jsx'
import RoutesIndex from '@/routes/RoutesIndex'

const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <AuthProvider>
          <ProductProvider>
            <ShopCartProvider>
              <NavBar />
              <main className='flex-grow-1'>
                <RoutesIndex />
              </main>
            </ShopCartProvider>
          </ProductProvider>
        </AuthProvider>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

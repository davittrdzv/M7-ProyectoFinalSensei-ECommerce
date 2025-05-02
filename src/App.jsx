import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from '@/context/productContext.jsx'
import NavBar from '@/components/NavBar.jsx'
import Footer from '@/components/Footer.jsx'
import RoutesIndex from '@/routes/RoutesIndex'
import '@/styles/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <ProductProvider>
          <NavBar />
          <main className='flex-grow-1'>
            <RoutesIndex />
          </main>
        </ProductProvider>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

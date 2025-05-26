import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext.jsx'
import { ProductProvider } from '@/context/ProductContext.jsx'
import { ShopCartProvider } from '@/context/ShopCartContext.jsx'
import '@/styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <ShopCartProvider>
            <App />
          </ShopCartProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

import NavBar from '@/components/NavBar.jsx'
import Footer from '@/components/Footer.jsx'
import RoutesIndex from '@/routes/RoutesIndex'
import ShopCartIcon from '@/components/ShopCartIcon.jsx'
import ShopCartSideBar from '@/components/ShopCartSideBar.jsx'
import { useState } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext.jsx'

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { isAuthenticated } = useAuthContext()

  return (
    <div className='d-flex flex-column min-vh-100 position-relative'>
      <NavBar />
      <main className='flex-grow-1'>
        <RoutesIndex />
      </main>
      {isAuthenticated && (
        <>
          <ShopCartIcon onClick={() => setIsCartOpen(true)} />
          <ShopCartSideBar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App

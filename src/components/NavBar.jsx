import * as bootstrap from 'bootstrap'
import { NavLink } from 'react-router-dom'
import SearchBar from '@/components/SearchBar.jsx'
import UserDropDownMenu from '@/components/UserDropDownMenu.jsx'
import mePic from '@/assets/mePic.png'
import { useAuthContext } from '@/hooks/useAuthContext'
import useIsMobile from '@/hooks/useIsMobile'

const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuthContext()
  const isMobile = useIsMobile()

  const collapseNavbar = () => {
    const navbar = document.getElementById('navbarNavAltMarkup')
    const bsCollapse = bootstrap.Collapse.getInstance(navbar)
    if (bsCollapse) {
      bsCollapse.hide()
    }
  }

  return (
    <nav className='navbar navbar-expand-lg fixed-top border-bottom border-primary navbar-custom'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center'>
          <img src={mePic} alt='DRV E-COMMERCE' className='img-fluid custom-img' />
          <span className='navbar-brand mb-0 h1'>DRV E-COMMERCE</span>
        </div>
        <button
          className='navbar-toggler custom-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center w-100 gap-3'>
            <div className='navbar-nav'>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  collapseNavbar()
                }}
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  collapseNavbar()
                }}
                to='/about'
              >
                About
              </NavLink>
            </div>
            <div className='flex-grow-1 px-3'>
              <SearchBar onSearchComplete={collapseNavbar} />
            </div>
            <div className='d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3'>
              <span className='mb-0'>
                {user ? `Hi, ${user.first_name} ${user.last_name}!` : 'Hi, Guest!'}
              </span>
              {isAuthenticated
                ? (
                    !isMobile
                      ? (
                        <UserDropDownMenu />
                        )
                      : (
                        <>
                          <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                              collapseNavbar()
                            }}
                            to='/userprofile'
                          >
                            My Profile
                          </NavLink>
                          <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                              collapseNavbar()
                            }}
                            to='/shoppingcart'
                          >
                            My Shopping Cart
                          </NavLink>
                          {user?.role === 'ADMIN' && (
                            <NavLink
                              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                collapseNavbar()
                              }}
                              to='/addproducts'
                            >
                              Add New Products
                            </NavLink>
                          )}
                          <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                              logout()
                              collapseNavbar()
                            }}
                            to='/login'
                          >
                            Sign Out
                          </NavLink>
                        </>
                        )
                  )
                : (
                  <>
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        collapseNavbar()
                      }}
                      to='/login'
                    >
                      Log in
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        collapseNavbar()
                      }}
                      to='/signup'
                    >
                      Sign up
                    </NavLink>
                  </>
                  )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

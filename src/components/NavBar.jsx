import { NavLink } from 'react-router-dom'
import SearchBar from '@/components/SearchBar.jsx'
import UserDropDownMenu from '@/components/UserDropDownMenu.jsx'
import mePic from '@/assets/mePic.png'
import { useAuthContext } from '@/hooks/useAuthContext'

const NavBar = () => {
  const { isAuthenticated, user } = useAuthContext()
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to='/about'
              >
                About
              </NavLink>
            </div>
            <div className='flex-grow-1 px-3'>
              <SearchBar />
            </div>
            <div className='d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-3'>
              <span className='mb-0'>
                {user ? `Hi, ${user.first_name} ${user.last_name}!` : 'Hi, Guest!'}
              </span>
              {isAuthenticated
                ? <UserDropDownMenu />
                : (
                  <>
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      to='/login'
                    >
                      Log in
                    </NavLink>
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

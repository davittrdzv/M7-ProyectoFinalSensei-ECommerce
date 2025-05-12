import { NavLink } from 'react-router-dom'
import SearchBar from '@/components/SearchBar.jsx'
import mePic from '@/assets/mePic.png'
import { useAuthContext } from '@/hooks/useAuthContext'

const NavBar = () => {
  const { isAuthenticated, logout } = useAuthContext()
  return (
    <nav className='navbar navbar-expand-lg fixed-top border-bottom border-primary navbar-custom'>
      <div className='container-fluid'>
        <img src={mePic} alt='DRV E-COMMERCE' className='img-fluid custom-img' />
        <span className='navbar-brand'>DRV E-COMMERCE</span>
        <button
          className='navbar-toggler'
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
          <div className='navbar-nav'>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              aria-current='page'
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
            <SearchBar />
            <span>Hi, Guest!</span> {/** Aquí hay que poner el nombre del usuario, cuando esté funcional/ */}
            {isAuthenticated
              ? (
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
                )
              : (
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to='/'
                  onClick={
                    () => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      logout()
                    }
                  }
                >
                  Log Out
                </NavLink>
                )}

          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

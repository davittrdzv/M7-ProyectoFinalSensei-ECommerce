import { NavLink } from 'react-router-dom'
import SearchBar from '@/components/SearchBar.jsx'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top border-bottom border-primary navbar-custom'>
      <div className='container-fluid'>
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
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/'>
              Home
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/about#'>
              About
            </NavLink>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

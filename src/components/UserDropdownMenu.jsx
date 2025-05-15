import { Link } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const UserDropDownMenu = () => {
  const { logout } = useAuthContext()
  return (
    <div className='dropdown text-end position-relative p-4'>
      <Link
        to='/'
        className='d-block link-body-emphasis text-decoration-none dropdown-toggle'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <img
          src='https://github.com/mdo.png'
          alt='User Profile Picture'
          width={32}
          height={32}
          className='rounded-circle'
        />
      </Link>
      <ul className='dropdown-menu text-small'>
        <li>
          <Link className='dropdown-item' to='/'>My Profile</Link>
        </li>
        <li>
          <Link className='dropdown-item' to='/'>My Shopping Cart</Link>
        </li>
        <li><hr className='dropdown-divider' /></li>
        <li>
          <Link
            className='dropdown-item'
            to='/login'
            onClick={
                    () => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      logout()
                    }
                  }
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default UserDropDownMenu

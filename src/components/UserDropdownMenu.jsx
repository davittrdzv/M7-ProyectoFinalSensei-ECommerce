import { Link } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const UserDropDownMenu = () => {
  const { logout, user } = useAuthContext()

  return (
    <div className='dropdown text-end position-relative'>
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
      <ul className='dropdown-menu dropdown-menu-lg-end text-small'>
        <li>
          <span className='dropdown-item'>{`${user?.first_name} ${user?.last_name}`}</span>
        </li>
        <li><hr className='dropdown-divider' /></li>
        <li>
          <Link className='dropdown-item' to='/userprofile'>My Profile</Link>
        </li>
        <li>
          <Link className='dropdown-item' to='/shoppingcart'>My Shopping Cart</Link>
        </li>
        {user?.role === 'ADMIN' && (
          <li>
            <Link className='dropdown-item' to='/addproducts'>Add New Products</Link>
          </li>
        )}
        <li><hr className='dropdown-divider' /></li>
        <li>
          <Link
            className='dropdown-item'
            to='/login'
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              logout()
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default UserDropDownMenu

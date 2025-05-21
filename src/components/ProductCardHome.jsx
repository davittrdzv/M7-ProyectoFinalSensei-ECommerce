import { Link } from 'react-router-dom'
import { placeholderPic, handlePicError } from '@/utils/placeholderPic'
import { Tooltip } from 'bootstrap'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useShopCartContext } from '@/hooks/useShopCartContext'
import { useEffect } from 'react'

const ProductCardHome = ({ image, name, price, productId }) => {
  const { isAuthenticated, loading } = useAuthContext()
  const { addToShopCart } = useShopCartContext()

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // eslint-disable-next-line no-unused-vars
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    )
  }, [])

  const tooltipAttrs = !isAuthenticated
    ? {
        'data-bs-toggle': 'tooltip',
        'data-bs-placement': 'top',
        title: 'You must log in to add an item to your cart',
      }
    : {}

  if (loading) return null

  return (
    <div className='col'>
      <div className='card h-100 card-dark for-hover'>
        <img
          src={image || placeholderPic}
          className='card-img-top object-fit-cover'
          alt={name}
          onError={handlePicError}
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title text-center'>{name}</h5>
          <h6 className='card-text text-center'>
            {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </h6>
          <div className='d-flex justify-content-around gap-2'>
            <Link to={`/productdetails/${productId}`} className='btn btn-custom-dark w-100'>Details</Link>
            {
              isAuthenticated
                ? (
                  <button
                    className='btn btn-custom-gold w-100 '
                    onClick={() => addToShopCart(productId)}
                  >
                    Add to Cart
                  </button>
                  )
                : (
                  <button
                    className='btn btn-custom-gold w-100 disabled'
                    {...tooltipAttrs}
                  >
                    Add to Cart
                  </button>
                  )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardHome

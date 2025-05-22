import { placeholderPic, handlePicError } from '@/utils/placeholderPic'
import { useTooltips, getTooltipAttrs } from '@/hooks/useTooltips'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ProductCardDetails = ({ productId, image, name, description, price, category, brand, sku, isActive }) => {
  const { isAuthenticated, loading } = useAuthContext()
  const { addToShopCart } = useShopCartContext()

  useTooltips()
  const tooltipAttrs = getTooltipAttrs(isAuthenticated)
  if (loading) return null

  if (loading) return null

  return (
    <div className='card card-dark'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={image || placeholderPic}
            className='img-fluid rounded-start'
            alt={name}
            onError={handlePicError}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h1 className='card-title'>{name}</h1>
            <p className='card-text text-justify'><small><strong>SKU: {sku}</strong></small></p>
            <p className='card-text text-justify'><small><strong>Department: {category}</strong></small></p>
            <p className='card-text text-justify'><small><strong>Brand: {brand}</strong></small></p>
            <h4 className='card-text text-justify'>
              <strong>
                Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </strong>
            </h4>
            <p className='card-text text-justify'>{description}</p>
            <h5 className='card-text text-justify'><strong>{isActive ? 'Available' : 'Unavailable'}</strong></h5>
            <div className='container'>
              {
                isAuthenticated
                  ? (
                    <button
                      className='btn btn-custom-gold'
                      onClick={() => addToShopCart(productId)}
                    >
                      Add to Cart
                    </button>
                    )
                  : (
                    <button
                      className='btn btn-custom-gold disabled'
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
    </div>
  )
}

export default ProductCardDetails

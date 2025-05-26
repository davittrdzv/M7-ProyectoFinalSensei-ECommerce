import ProductCardShopCart from '@/components/ProductCardShopCart.jsx'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShoppingCart = () => {
  const { userShopCart, total } = useShopCartContext()
  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <div className='card mt-2 mb-2 card-dark'>
        <h1 className='text-center'>Your Shopping Cart</h1>
      </div>
      {userShopCart.length > 0
        ? (
          <>
            {userShopCart.map(product => (
              <ProductCardShopCart
                key={product.id}
                productId={product.id}
                image={product.image || product.images}
                name={product.product_name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
            <div className='container card card-dark cart-summary for-hover'>
              <p className='shipping-note text-center'>
                Free shipping on orders over $1,000.00!
              </p>
              <div className='cart-summary-row'>
                <span>Subtotal:</span>
                <span>{total.subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              </div>
              <div className='cart-summary-row'>
                <span>Shipping Costs:</span>
                <span>{total.shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              </div>
              <div className='cart-summary-row total'>
                <span>Total:</span>
                <span>{total.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              </div>
            </div>
          </>
          )
        : (
          <>
            <h5 className='text-center'>Your Shopping Cart is currently empty.</h5>
          </>
          )}
    </div>
  )
}

export default ShoppingCart

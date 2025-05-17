import ProductCardShopCart from '@/components/ProductCardShopCart.jsx'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShoppingCart = () => {
  const { userShopCart } = useShopCartContext()
  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <h1 className='text-center'>Shopping Cart</h1>
      {userShopCart.length > 0
        ? (
          <>
            {userShopCart.map(product => (
              <ProductCardShopCart
                key={product.id}
                image={product.image || product.images}
                name={product.product_name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
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

import ProductCardShopCart from '@/components/ProductCardShopCart.jsx'

const ShoppingCart = () => {
  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <h1 className='text-center'>Shopping Cart</h1>
      <ProductCardShopCart />
    </div>
  )
}

export default ShoppingCart

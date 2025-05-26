import '@/styles/ShopCartSideBar.css'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShopCartSideBar = () => {
  const { userShopCart, total } = useShopCartContext()

  return (
    <div
      className='d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary border-top border-danger mt-4_0rem'
      style={{ width: 380 }}
    >
      <a
        href='/'
        className='d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom'
      >
        <svg className='bi pe-none me-2' width={30} height={24} aria-hidden='true'>
          <use xlinkHref='#bootstrap' />
        </svg>
        <span className='fs-5 fw-semibold'>Your Shopping Cart</span>
      </a>
      {userShopCart.length > 0
        ? (
          <>
            {userShopCart.map(product => (
              <div className='list-group list-group-flush border-bottom scrollarea' key={product.id}>
                <a
                  href='#'
                  className='list-group-item list-group-item-action active py-3 lh-sm'
                  aria-current='true'
                >
                  <div className='d-flex w-100 align-items-center justify-content-between'>
                    <span><strong className='mb-1'>{product.product_name}</strong> x {product.quantity}</span>
                    <small>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
                  </div>
                  <div className='col-10 mb-1 small'>
                    {product.description}
                  </div>
                </a>
              </div>
            ))}
            <div className='list-group list-group-flush border-bottom scrollarea'>
              <a
                href='#'
                className='list-group-item list-group-item-action active py-3 lh-sm'
                aria-current='true'
              >
                <div className='d-flex w-100 align-items-center justify-content-between'>
                  <span className='mb-1'>SUBTOTAL</span>
                  <small>{total.subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
                </div>
                <div className='d-flex w-100 align-items-center justify-content-between'>
                  <span className='mb-1'>SHIPPING COST</span>
                  <small>{total.shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
                </div>
                <div className='d-flex w-100 align-items-center justify-content-between'>
                  <strong className='mb-1'>TOTAL</strong>
                  <small>{total.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
                </div>
              </a>
            </div>
          </>)
        : (<h5>Your Shopping Cart is currently empty.</h5>
          )}
    </div>
  )
}

export default ShopCartSideBar

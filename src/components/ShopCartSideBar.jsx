import '@/styles/ShopCartSideBar.css'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShopCartSideBar = ({ isOpen, onClose }) => {
  const { userShopCart, total } = useShopCartContext()

  return (
    <div
      className='position-fixed top-0 end-0 h-100 bg-white border-start shadow-lg d-flex flex-column'
      style={{
        width: isOpen ? '380px' : '0',
        overflowX: 'hidden',
        zIndex: 1045,
        transition: 'width 0.3s ease-in-out'
      }}
    >
      <button
        className='btn btn-sm btn-outline-secondary m-2'
        onClick={onClose}
      >
        ✕
      </button>

      {isOpen && (
        <>
          <a
            href='/'
            className='d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom'
          >
            <span className='fs-5 fw-semibold'>Your Shopping Cart</span>
          </a>
          <div
            className='flex-grow-1 overflow-auto px-2'
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          >
            {userShopCart.length > 0
              ? userShopCart.map(product => (
                <div className='list-group list-group-flush border-bottom' key={product.id}>
                  <div
                    className='list-group-item list-group-item-action py-3 lh-sm'
                  >
                    <div className='d-flex w-100 align-items-center justify-content-between'>
                      <span><strong>{product.product_name}</strong> x {product.quantity}</span>
                      <small>{(product.price * product.quantity).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      })}
                      </small>
                    </div>
                    <div className='col-10 mb-1 small'>
                      <small>{product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      })} (each)
                      </small>
                    </div>
                  </div>
                </div>
              ))
              : <h5 className='text-center mt-4'>Your Shopping Cart is currently empty.</h5>}
          </div>
          {userShopCart.length > 0 && (
            <div className='border-top px-3 py-2 bg-light'>
              <div className='d-flex justify-content-between'>
                <span>SUBTOTAL</span>
                <small>{total.subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
              </div>
              <div className='d-flex justify-content-between'>
                <span>SHIPPING COST</span>
                <small>{total.shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
              </div>
              <div className='d-flex justify-content-between fw-bold'>
                <span>TOTAL</span>
                <small>{total.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</small>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ShopCartSideBar

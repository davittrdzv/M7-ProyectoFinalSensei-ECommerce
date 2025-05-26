import '@/styles/ShopCartSideBar.css'
import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShopCartSideBar = ({ isOpen, onClose }) => {
  const { userShopCart, total, increaseQty, decreaseQty, deleteProduct } = useShopCartContext()

  return (
    <div
      className='shopcart-sidebar position-fixed top-0 end-0 h-100 border-start shadow-lg d-flex flex-column'
      style={{
        width: isOpen ? '380px' : '0',
        overflowX: 'hidden',
        zIndex: 1045,
        transition: 'width 0.3s ease-in-out'
      }}
    >

      <button
        className='btn btn-sm btn-custom-gold m-2'
        onClick={onClose}
      >
        Close
      </button>

      {isOpen && (
        <>
          <h1 className='fs-5 fw-semibold text-center mb-3'>Your Shopping Cart</h1>
          <div
            className='flex-grow-1 overflow-auto px-2'
            style={{ maxHeight: 'calc(100vh - 200px)' }}
          >
            {userShopCart.length > 0
              ? userShopCart.map(product => (
                <div className='list-group list-group-flush border-bottom' key={product.id}>
                  <div
                    className='list-group-item list-group-item py-3 lh-sm'
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
                      <div className='d-flex align-items-center gap-2 flex-wrap'>
                        {product.quantity === 1
                          ? (
                            <button
                              className='btn-trash'
                              onClick={() => deleteProduct(product.id)}
                              aria-label='Delete item'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 48 48'
                                width='20'
                                height='20'
                                fill='currentColor'
                              >
                                <path d='M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z' />
                              </svg>
                            </button>
                            )
                          : (
                            <button
                              className='btn btn-sm btn-qty'
                              onClick={() => decreaseQty(product.id)}
                            >
                              –
                            </button>
                            )}
                        <span className='qty-display'>{product.quantity}</span>
                        <button
                          className='btn btn-sm btn-qty'
                          onClick={() => increaseQty(product.id)}
                        >
                          +
                        </button>
                      </div>
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

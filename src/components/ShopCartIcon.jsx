import { useShopCartContext } from '@/hooks/useShopCartContext'

const ShopCartIcon = ({ onClick }) => {
  const { totalItems } = useShopCartContext()
  return (
    <button
      onClick={onClick}
      className='btn btn-custom-gold rounded-circle shadow position-fixed'
      style={{
        bottom: '1.5rem',
        right: '1.5rem',
        width: '60px',
        height: '60px',
        zIndex: 1040
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '-6px',
          right: '-6px',
          backgroundColor: '#232F3E',
          color: '#FFD700',
          borderRadius: '999px',
          width: '20px',
          height: '20px',
          fontSize: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          boxShadow: '0 0 4px rgba(0,0,0,0.5)'
        }}
      >
        {totalItems}
      </span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        fill='currentColor'
        width='36'
        height='36'
      >
        <title>Shopping Cart</title>
        <g id='Shopping_Cart' data-name='Shopping Cart'>
          <g id='Shopping_Cart-2' data-name='Shopping Cart'>
            <path d='M351.9,329.5063H206.81l-3.0723-12.56H368.1614l26.63-116.019L177.5618,174.8861l-9.9526-58.0885h-50.4v21.945h31.8934l35.2332,191.2465a32.927,32.927,0,1,0,36.3628,21.4622H320.9431A32.8248,32.8248,0,1,0,351.9,329.5063ZM181.4272,197.4486l186.5106,22.3589-17.2592,75.194H198.9174Z' />
          </g>
        </g>
      </svg>
    </button>
  )
}

export default ShopCartIcon

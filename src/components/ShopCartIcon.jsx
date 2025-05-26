const ShopCartIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn btn-primary rounded-circle shadow'
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        width: '60px',
        height: '60px',
        zIndex: 1050
      }}
    >
      🛒
    </button>
  )
}

export default ShopCartIcon

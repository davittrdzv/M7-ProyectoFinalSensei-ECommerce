const ProductCardShopCart = ({ image, name, description, price, quantity }) => {
  const placeholderPic = 'https://picsum.photos/200'
  const handlePicError = (e) => {
    e.target.src = placeholderPic
  }
  return (
    <div className='card mb-3'>
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
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>
              {description}
            </p>
            <p className='card-text'>
              <strong>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong>
            </p>
            <div>
              <button>- o Borrar</button>
              <span>{quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardShopCart

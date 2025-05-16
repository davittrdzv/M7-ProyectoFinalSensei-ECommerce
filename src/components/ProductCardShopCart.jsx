const ProductCardShopCart = () => {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src='...' className='img-fluid rounded-start' alt='...' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Nombre del Producto</h5>
            <p className='card-text'>
              Descripción.
            </p>
            <p className='card-text'>
              Precio
            </p>
            <div>
              <button>- o Borrar</button>
              <span>Cantidad</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardShopCart

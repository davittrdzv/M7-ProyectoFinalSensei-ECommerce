import { Link } from 'react-router-dom'

const ProductCardHome = ({ image, name, price, productId }) => {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={image} className='card-img-top object-fit-cover' alt={name} />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title text-center'>{name}</h5>
          <h6 className='card-text text-center'>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </h6>
          <div className='d-flex justify-content-around gap-2'>
            <Link to={`/productdetails/${productId}`} className='btn btn-primary w-100'>Details</Link>
            <Link to='/about' className='btn btn-secondary w-100'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardHome

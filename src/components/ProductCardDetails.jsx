import { Link } from 'react-router-dom'

const ProductCardDetails = ({ image, name, description, price, category, brand, sku, isActive }) => {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={image} className='img-fluid rounded-start' alt={name} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h1 className='card-title'>{name}</h1>
            <p className='card-text text-justify'><small><strong>SKU: {sku}</strong></small></p>
            <p className='card-text text-justify'><small><strong>Department: {category}</strong></small></p>
            <p className='card-text text-justify'><small><strong>Brand: {brand}</strong></small></p>
            <h4 className='card-text text-justify'><strong>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong></h4>
            <p className='card-text text-justify'>{description}</p>
            <h5 className='card-text text-justify'><strong>{isActive ? 'Available' : 'Unavailable'}</strong></h5>
            <div className='container'>
              <Link to='/about' className={`btn ${isActive ? 'btn-primary' : 'btn-secondary disabled'}`}>Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardDetails

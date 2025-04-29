import { Link } from 'react-router-dom'

const ProductCardHome = () => {
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src='https://picsum.photos/200' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title text-center'>Product Name</h5>
          <p className='card-text'>Description</p>
          <h6 className='card-text'>Price</h6>
          <div className='d-flex justify-content-around'>
            <Link to='/about' className='btn btn-primary'>Details</Link>
            <Link to='/about' className='btn btn-secondary'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardHome

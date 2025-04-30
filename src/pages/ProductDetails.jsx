import { useParams, Navigate } from 'react-router-dom'
import database from '../assets/database.json'

const ProductDetails = () => {
  const { productId } = useParams()
  const products = database.items
  const currentProduct = products.find(product => product.id === productId)
  return (
    currentProduct
      ? (
        <div className='text-center border-top border-danger mt-4_0rem'>
          <h1>Product Details</h1>
          <h1>{currentProduct.id}</h1>
          <h1>{currentProduct.product_name}</h1>
        </div>
        )
      : (
        <Navigate to='/not-found' replace />
        )
  )
}

export default ProductDetails

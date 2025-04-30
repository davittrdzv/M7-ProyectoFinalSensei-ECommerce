import { useParams, Navigate } from 'react-router-dom'
import ProductCardDetails from '../components/ProductCardDetails.jsx'
import database from '../assets/database.json'

const ProductDetails = () => {
  const { productId } = useParams()
  const products = database.items
  const currentProduct = products.find(product => product.id === productId)
  return (
    currentProduct
      ? (
        <div className='container text-center border-top border-danger mt-4_0rem'>
          <h1>Product Details</h1>
          <ProductCardDetails
            image={currentProduct.image || currentProduct.images || 'https://picsum.photos/200'}
            name={currentProduct.product_name}
            description={currentProduct.description}
            sku={currentProduct.sku}
            category={currentProduct.category}
            isActive={currentProduct.isActive}
            brand={currentProduct.brand}
            price={currentProduct.price}
          />
        </div>
        )
      : (
        <Navigate to='/not-found' replace />
        )
  )
}

export default ProductDetails

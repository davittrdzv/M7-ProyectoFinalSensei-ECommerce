import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ProductCardDetails from '@/components/ProductCardDetails.jsx'
import { getItemService } from '@/services/productServices'

const ProductDetails = () => {
  const { productId } = useParams()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getItemService(productId)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [productId])

  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <h1 className='text-center'>Product Details</h1>
      {loading
        ? <h1 className='text-center'>Loading...</h1>
        : product
          ? (
            <div className='container text-center'>
              <ProductCardDetails
                productId={product.id}
                image={product.image || product.images || 'https://picsum.photos/200'}
                name={product.product_name}
                description={product.description}
                sku={product.sku}
                category={product.category}
                isActive={product.isActive}
                brand={product.brand}
                price={product.price}
              />
            </div>
            )
          : <Navigate to='/not-found' replace />}
    </div>
  )
}

export default ProductDetails

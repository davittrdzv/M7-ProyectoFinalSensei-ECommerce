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
    <div className='p-1 border-top mt-4_0rem product-details-wrapper'>
      {loading
        ? (
          <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '300px' }}>
            <div className='text-center d-flex flex-column align-items-center gap-3'>
              <div>Loading content, please wait, it may take even a minute.</div>
              <div className='spinner' />
            </div>
          </div>

          )
        : product
          ? (
            <div className='mt-1 text-center'>
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

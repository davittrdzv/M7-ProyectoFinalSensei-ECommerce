import ProductCardHome from '@/components/ProductCardHome.jsx'
import { useProductContext } from '@/hooks/useProductContext'

const Home = () => {
  const { filteredProducts, loading, searchTerm } = useProductContext()

  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <div className='card mt-2 mb-3 card-dark'>
        <h1 className='text-center'>Welcome to DRV E-COMMERCE!</h1>
        {searchTerm
          ? (<h6 className='text-center'>{`Results for "${searchTerm}"`}</h6>)
          : (<h6 className='text-center'>Please browse through all our products, or search for one.</h6>)}
      </div>
      {loading
        ? (
          <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '300px' }}>
            <div className='text-center d-flex flex-column align-items-center gap-3'>
              <div>Loading content, please wait, it may take even a minute.</div>
              <div className='spinner' />
            </div>
          </div>

          )
        : filteredProducts.length === 0
          ? (
            <h5 className='text-center'>{`We found no products with the keyword "${searchTerm}"`}</h5>
            )
          : (
            <div className='row row-cols-1 row-cols-md-4 g-4'>
              {filteredProducts.map(product => (
                <ProductCardHome
                  image={product.image || product.images}
                  key={product.id}
                  name={product.product_name}
                  price={product.price}
                  productId={product.id}
                />
              ))}
            </div>
            )}
    </div>
  )
}

export default Home

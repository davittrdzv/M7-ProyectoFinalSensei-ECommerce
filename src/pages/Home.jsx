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
          <h1 className='text-center'>Loading...</h1>
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

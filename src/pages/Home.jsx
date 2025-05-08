import ProductCardHome from '@/components/ProductCardHome.jsx'
import { useProductContext } from '@/hooks/useProductContext'

const Home = () => {
  const { filteredProducts, loading, searchTerm } = useProductContext()

  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <h1 className='text-center'>Home</h1>

      {loading
        ? (
          <h1 className='text-center'>Loading...</h1>
          )
        : filteredProducts.length === 0
          ? (
            <h5 className='text-center'>{`We found no products with the keyword "${searchTerm}"`}</h5>
            )
          : (
            <div className='row row-cols-1 row-cols-md-4 g-4'> {/* Este div es solo para mostrar los productos */}
              {filteredProducts.map(product => (
                <ProductCardHome
                  image={product.image || product.images || 'https://picsum.photos/200'} /* La tercer imagen es por el momento como alternativa mientras construyo la página */
                  key={product.sku}
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

import ProductCardHome from '@/components/ProductCardHome.jsx'
import { useProductContext } from '@/hooks/useProductContext'

const Home = () => {
  const { products } = useProductContext()
  return (
    <div className='container border-top border-danger mt-4_0rem'> {/* border-top border-danger son para referencia */}
      <h1 className='text-center'>Home</h1>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {products.map(product => (
          <ProductCardHome
            image={product.image || product.images || 'https://picsum.photos/200'} /* La tercer imagen es por el momento como alternativa mientras construyo la página */
            key={product.sku}
            name={product.product_name}
            price={product.price}
            productId={product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

import ProductCardHome from '../components/ProductCardHome.jsx'
import database from '../assets/database.json'

const Home = () => {
  const products = database.items
  return (
    <div className='container border-top border-danger mt-4_0rem'>
      <h1 className='text-center'>Home</h1>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {products.map(product => (
          <ProductCardHome
            image={product.image || product.images || 'https://picsum.photos/200'}
            key={product.sku}
            name={product.product_name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

import ProductCardHome from '../components/ProductCardHome.jsx'

const Home = () => {
  return (
    <div className='border-top border-danger mt-4_0rem'>
      <h1>Home</h1>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        <ProductCardHome />
      </div>
    </div>
  )
}

export default Home

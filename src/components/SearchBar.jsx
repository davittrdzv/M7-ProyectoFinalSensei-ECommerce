import { useNavigate } from 'react-router-dom'
import { useProductContext } from '@/hooks/useProductContext'
import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const { products, setFilteredProducts, setSearchTerm } = useProductContext()
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    const searchedProduct = products.filter(product => {
      return product.product_name.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredProducts(searchedProduct)
    setSearchTerm(search)
    setSearch('')
    navigate('/') // redirige a Home después de actualizar el estado
  }

  return (
    <form onSubmit={handleSearch}>
      <div className='input-group mb-3'>
        <button
          className='btn btn-outline-secondary dropdown-toggle'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Search by Category
        </button>
        <ul className='dropdown-menu'>
          <li><a className='dropdown-item' href='#'>All categories</a></li>
          <li><hr className='dropdown-divider' /></li>
          <li><a className='dropdown-item' href='#'>Category 1</a></li>
          <li><a className='dropdown-item' href='#'>Category 2</a></li>
          <li><a className='dropdown-item' href='#'>Category 3</a></li>
        </ul>
        <input
          type='text'
          className='form-control'
          aria-label='Text input with dropdown button'
          placeholder='Search for a product'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          className='btn btn-outline-secondary'
          type='submit'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              d='M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar

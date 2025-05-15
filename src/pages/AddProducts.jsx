import '@/styles/form.css'
import { useProductContext } from '@/hooks/useProductContext'

const AddProducts = () => {
  const { categories } = useProductContext()
  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={console.log('Hola')}>
          <h1 className='h3 mb-3 fw-normal text-center'>Add a New Product</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementFirst'
              placeholder='Product Name'
              id='product_name'
              name='product_name'
            //   {...register('product_name', { required: true })}
            /><label htmlFor='product_name'>Product Name</label>
            {/* <p className='text-center error-msg mb-0'>{errors.product_name?.message}</p> */}
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementBetween'
              placeholder='Description'
              id='price'
              name='price'
            //   {...register('price', { required: true })}
            /><label htmlFor='price'>Description</label>
            {/* <p className='text-center error-msg mb-0'>{errors.price?.message}</p> */}
          </div>
          <div className='form-floating'>
            <input
              type='number'
              className='form-control formElementBetween'
              placeholder='Price'
              id='price'
              name='price'
              min='0'
            //   {...register('price', { required: true })}
            /><label htmlFor='price'>Price</label>
            {/* <p className='text-center error-msg mb-0'>{errors.price?.message}</p> */}
          </div>
          <div className='form-floating'>
            <select
              className='form-select formElementBetween'
              id='category'
              name='category'
              defaultValue=''
            //   {...register('category', { required: true })}
            >
              <option value='' disabled>Select the Category</option>
              {categories
                ? (
                    categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))
                  )
                : (
                  <></>
                  )}
            </select>
            <label htmlFor='category'>Category</label>
            {/* <p className='text-center error-msg mb-0'>{errors.category?.message}</p> */}
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementLast'
              placeholder='Brand'
              id='brand'
              name='brand'
            //   {...register('brand', { required: true })}
            /><label htmlFor='brand'>Brand</label>
            {/* <p className='text-center error-msg mb-0'>{errors.brand?.message}</p> */}
          </div>
          <button
            className='btn btn-custom-gold w-100 py-2'
            type='submit'
          >
            Add Product
          </button>
        </form>
      </main>
    </div>
  )
}

export default AddProducts

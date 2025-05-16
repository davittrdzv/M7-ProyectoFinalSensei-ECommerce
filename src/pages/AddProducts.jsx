import '@/styles/form.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useProductContext } from '@/hooks/useProductContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { addItemService } from '@/services/productServices'

const schema = yup.object({
  product_name: yup
    .string()
    .required('Product Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  description: yup
    .string()
    .required('Description is required'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .integer('Price must not have decimals'),
  category: yup
    .string()
    .required('Category is required'),
  brand: yup
    .string()
    .required('Brand is required')
}).required()

const AddProducts = () => {
  const signUpSuccess = withReactContent(Swal)
  const { categories, fetchProducts } = useProductContext()
  const { token } = useAuthContext()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      data.sku = crypto.randomUUID()
      data.image = 'https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg'
      const { status } = await addItemService(data, token)
      if (status === 200) {
        reset()
        signUpSuccess.fire({
          title: `Product "${data.product_name}" added successfully!`,
          icon: 'success',
          draggable: false,
          confirmButtonColor: '#FFD700',
          background: 'black',
          color: '#ffffff',
          customClass: {
            confirmButton: 'btn-swal-ok'
          }
        })
        fetchProducts()
      }
    } catch (error) {
      console.error('Error Adding Product:', error)
    }
  }

  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='h3 mb-3 fw-normal text-center'>Add a New Product</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementFirst'
              placeholder='Product Name'
              id='product_name'
              name='product_name'
              {...register('product_name', { required: true })}
            /><label htmlFor='product_name'>Product Name</label>
            <p className='text-center error-msg mb-0'>{errors.product_name?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementBetween'
              placeholder='Description'
              id='description'
              name='description'
              {...register('description', { required: true })}
            /><label htmlFor='price'>Description</label>
            <p className='text-center error-msg mb-0'>{errors.description?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='number'
              className='form-control formElementBetween'
              placeholder='Price'
              id='price'
              name='price'
              min='0'
              {...register('price', { required: true })}
            /><label htmlFor='price'>Price</label>
            <p className='text-center error-msg mb-0'>{errors.price?.message}</p>
          </div>
          <div className='form-floating'>
            <select
              className='form-select formElementBetween'
              id='category'
              name='category'
              defaultValue=''
              {...register('category', { required: true })}
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
            <p className='text-center error-msg mb-0'>{errors.category?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementLast'
              placeholder='Brand'
              id='brand'
              name='brand'
              {...register('brand', { required: true })}
            /><label htmlFor='brand'>Brand</label>
            <p className='text-center error-msg mb-0'>{errors.brand?.message}</p>
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

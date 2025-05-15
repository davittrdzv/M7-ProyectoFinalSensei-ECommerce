import '@/styles/form.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signUpUserService } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  first_name: yup
    .string()
    .required('First Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  last_name: yup
    .string()
    .required('Last Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  gender: yup
    .string()
    .required('Gender is required'),
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'The password must have at least 8 characters, one number, one uppercase letter, one lowercase letter and one special character'),
}).required()

const SignUp = () => {
  const navigate = useNavigate()
  const signUpSuccess = withReactContent(Swal)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await signUpUserService(data)
      if (status === 201) {
        console.log('User registered successfully')
        console.log(data)
        reset()
        signUpSuccess.fire({
          title: 'User registered successfully!',
          icon: 'success',
          draggable: false,
          confirmButtonColor: '#FFD700',
          background: 'black',
          color: '#ffffff',
          customClass: {
            confirmButton: 'btn-swal-ok'
          }
        })
        navigate('/login')
      }
    } catch (error) {
      console.error('Error registering user:', error)
    }
  }

  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='h3 mb-3 fw-normal text-center'>Create your Account</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementFirst'
              placeholder='First Name'
              id='first_name'
              name='first_name'
              {...register('first_name', { required: true })}
            /><label htmlFor='first_name'>First Name</label>
            <p className='text-center error-msg mb-0'>{errors.first_name?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control formElementBetween'
              placeholder='Last Name'
              id='last_name'
              name='last_name'
              {...register('last_name', { required: true })}
            /><label htmlFor='last_name'>Last Name</label>
            <p className='text-center error-msg mb-0'>{errors.last_name?.message}</p>
          </div>
          <div className='form-floating'>
            <select
              className='form-select formElementBetween'
              id='gender'
              name='gender'
              defaultValue=''
              {...register('gender', { required: true })}
            >
              <option value='' disabled>Select your Gender</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
            <p className='text-center error-msg mb-0'>{errors.gender?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control formElementBetween'
              placeholder='E-Mail'
              id='email'
              name='email'
              {...register('email', { required: true })}
            /><label htmlFor='email'>E-Mail</label>
            <p className='text-center error-msg mb-0'>{errors.email?.message}</p>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control formElementLast'
              placeholder='Password'
              id='password'
              name='password'
              {...register('password', { required: true })}
            /><label htmlFor='password'>Password</label>
            <p className='text-center error-msg mb-0'>{errors.password?.message}</p>
          </div>
          <button
            className='btn btn-custom-gold w-100 py-2'
            type='submit'
          >
            Sign Up
          </button>
        </form>
      </main>
    </div>
  )
}

export default SignUp

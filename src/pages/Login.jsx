import '@/styles/form.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { logInUserService } from '@/services/userServices'

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
}).required()

const Login = () => {
  const navigate = useNavigate()
  const logInSuccess = withReactContent(Swal)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData) => {
    try {
      const { status, data } = await logInUserService(formData)
      if (status === 200) {
        console.log('Login successful')
        console.log(data)
        reset()
        logInSuccess.fire({
          title: 'Login successful!',
          icon: 'success',
          draggable: false,
          confirmButtonColor: '#FFD700',
          background: 'black',
          color: '#ffffff',
          customClass: {
            confirmButton: 'btn-swal-ok'
          }
        })
        navigate('/')
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }
  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='mb-3 fw-normal text-center'>Hi Guest!</h3>
          <p className='mb-3 fw-normal text-center'>Type your E-Mail and Password to Log In</p>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control email-login'
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
              className='form-control'
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
            Log In
          </button>
          <p className='mt-3 fw-normal text-center'>
            <span>Don't have an account? <Link to='/signup'>Click here</Link></span>
            <span> to Sign Up.</span>
          </p>
        </form>
      </main>
    </div>
  )
}

export default Login

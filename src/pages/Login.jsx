import '@/styles/form.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form>
          <h3 className='mb-3 fw-normal text-center'>Hi Guest!</h3>
          <p className='mb-3 fw-normal text-center'>Type your E-Mail and Password to Log In</p>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control email-login'
              placeholder='E-Mail'
              id='email'
              name='email'
            /><label htmlFor='email'>E-Mail</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
            /><label htmlFor='password'>Password</label>
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

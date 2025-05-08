import '@/styles/form.css'

const SignUp = () => {
  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form>
          <h1 className='h3 mb-3 fw-normal text-center'>Create your Account</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='First Name'
              id='first_name'
              name='first_name'
            /><label htmlFor='first_name'>First Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              id='last_name'
              name='last_name'
            /><label htmlFor='last_name'>Last Name</label>
          </div>
          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
            >
              <option value='' disabled>Select your Gender</option> {/* No se regresa a este cuando hago refresh */}
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control email-signup'
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
            Sign Up
          </button>
        </form>
      </main>
    </div>
  )
}

export default SignUp

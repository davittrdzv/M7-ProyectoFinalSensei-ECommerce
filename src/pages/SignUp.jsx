import '@/styles/form.css'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div className='border-top border-danger mt-4_0rem'>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='h3 mb-3 fw-normal text-center'>Create your Account</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='First Name'
              id='first_name'
              name='first_name'
              {...register('first_name', { required: true })}
            /><label htmlFor='first_name'>First Name</label>
            {errors.first_name && <p className='text-center mb-0'>This field is required</p>}
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              id='last_name'
              name='last_name'
              {...register('last_name', { required: true })}
            /><label htmlFor='last_name'>Last Name</label>
            {errors.last_name && <p className='text-center mb-0'>This field is required</p>}
          </div>
          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              defaultValue=''
                            {...register('gender', { required: true })}
            >
              <option value='' disabled>Select your Gender</option> {/* No se regresa a este cuando hago refresh */}
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
            {errors.gender && <p className='text-center mb-0'>This field is required</p>}
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control email-signup'
              placeholder='E-Mail'
              id='email'
              name='email'
              {...register('email', { required: true })}
            /><label htmlFor='email'>E-Mail</label>
            {errors.email && <p className='text-center mb-0'>This field is required</p>}
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
            {errors.email && <p className='text-center mb-0'>This field is required</p>}
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

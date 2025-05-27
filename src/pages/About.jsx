import mePic from '@/assets/mePic.png'

const About = () => {
  return (
    <div className='container border-top mt-4_0rem'>
      <div className='card mt-2 mb-2 card-dark'>
        <h1 className='text-center'>About</h1>
      </div>
      <h1 className='text-center'>Welcome to my E-Commerce Website!</h1>
      <img src={mePic} alt='Me' className='about-pic d-block mx-auto' />
      <div className='card mt-2 mb-2 card-dark'>
        <h2 className='text-center'>About the Website</h2>
      </div>
      <div className='text-justify'>
        <p>
          This is the website I created as the final project for Module 7 of my Web Development program at DEV.F.
          It's built using <u>React</u>, <u>React Router DOM</u>, and <u>Bootstrap</u>.
        </p>
        <p>
          The site includes <u>client-side routing</u>, dynamic views, role-based route protection, and persistent shopping cart functionality using <u>localStorage</u>.
          It makes use of <u>React Hooks</u> such as <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, and <code>useMemo</code>, plus <u>custom hooks</u> for viewport detection and context consumption.
          The use of <code>useContext</code> allows for sharing data like authentication status and cart content across multiple components, avoiding prop drilling.
        </p>
        <p>
          One of the key features is <b>role-based rendering and route protection</b>, which adapts the interface depending on whether the user is an admin or a regular user.
          Another important feature is <b>conditional rendering based on login status, user role, and viewport resolution</b>, making the UI responsive and context-aware.
        </p>
        <p>
          Forms are handled using <u>react-hook-form</u> and validated with <u>yup</u>. Utility logic was abstracted for reusability, such as broken link correction, image fallback handling, and SweetAlert2 usage for clean and interactive alerts.
        </p>
        <p>
          The app interacts with a mock API for login, product management, and purchase functions using <code>axios</code>. It includes admin-only views for product creation, and user-only features like the shopping cart and checkout.
        </p>
        <p>
          Navigation is managed with <code>useNavigate</code>, <code>Link</code>, <code>NavLink</code>, and <code>Routes</code> from React Router DOM. All routes are centralized in a <code>RoutesIndex</code> component. A custom 404 page handles invalid paths.
        </p>
        <p>
          You can log in using one of the following pre-registered users:
        </p>
        <ul>
          <li><b>User Role</b> — Email: <code>drstrange@marvel.com</code> | Password: <code>multiverso</code></li>
          <li><b>Admin Role</b> — Email: <code>superman@dc.com</code> | Password: <code>superman</code></li>
        </ul>
        <p>
          Admins can create products, while regular users can browse and purchase.
          You can also create your own account on the <b>Sign Up</b> page. It’s not necessary to provide a real email — the information is only stored on the mock server and will be lost when the server "sleeps" due to inactivity.
        </p>
      </div>
      <div className='card mt-2 mb-2 card-dark'>
        <h2 className='text-center'>About Me</h2>
      </div>
      <div className='text-justify'>
        <p>
          My name is David. I'm from Mexico. I studied law at the Universidad Nacional Autónoma de México (Facultad de Estudios Superiores Acatlán).
          I've worked as a lawyer since 2010 and until April 30, 2024. In 2023, I decided to start a new path in programming. I've always liked computing,
          so now I'm studying Web Development.
        </p>
      </div>
      <a href='https://github.com/davittrdzv' target='_blank' rel='noopener noreferrer'>
        <svg
          width='98'
          height='96'
          xmlns='http://www.w3.org/2000/svg'
          className='github-icon d-block mx-auto'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
            fill='#232F3E'
          />
        </svg>
      </a>
      <div className='card mt-2 mb-2 card-dark'>
        <h2 className='text-center'>External Links and Mentions</h2>
      </div>
      <div className='text-justify'>
        <ul>
          <li>
            <a
              href='https://github.com/warderer/json-server-jwt'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-button p-1 rounded-3'
            >
              Server Documentation
            </a>
            <p className='mt-1'>This is the documentation for the server used in this project, which handles authentication and mock data.</p>
          </li>
          <li>
            <a
              href='https://ecommerce-json-jwt.onrender.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-button p-1 rounded-3'
            >
              Live API Server
            </a>
            <p className='mt-1'>Live instance of the mock API for testing authentication and product data.</p>
          </li>
          <li>
            <a
              href='https://github.com/davittrdzv/M7-ProyectoFinalSensei-ECommerce'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-button p-1 rounded-3'
            >
              GitHub Repository (Project Code)
            </a>
            <p className='mt-1'>This is the full source code of this website for public reference.</p>
          </li>
          <li>
            <a
              href='https://edu.devf.la/en'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-button p-1 rounded-3'
            >
              DEVF
            </a>
            <p className='mt-1'>DEV.F is the school where I'm currently studying Web Development.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About

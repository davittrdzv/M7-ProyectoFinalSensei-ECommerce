import { useAuthContext } from '@/hooks/useAuthContext'

const UserProfile = () => {
  const { user } = useAuthContext()
  return (
    <div className='container border-top border-danger mt-4_0rem'>
      <div className='card mt-2 mb-3 card-dark'>
        <h1 className='text-center'>{`Welcome to your Profile Information, ${user.first_name} ${user.last_name}!`}</h1>
      </div>
      <div className='mx-auto mt-4 user-table-container'>
        <table className='table table-bordered table-striped mb-5'>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender === 'M' ? 'Male' : 'Female'}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{user.role}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(user.createdAt).toString()}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(user.updatedAt).toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default UserProfile

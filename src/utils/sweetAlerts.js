import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

const swalSuccess = (message) => {
  return mySwal.fire({
    title: `${message}`,
    icon: 'success',
    draggable: false,
    confirmButtonColor: '#FFD700',
    background: 'black',
    color: '#ffffff',
    customClass: {
      confirmButton: 'btn-swal-ok'
    }
  })
}

const swalError = (message, error) => {
  return mySwal.fire({
    title: 'Oops...',
    text: `${message}`,
    footer: `${error}`,
    icon: 'error',
    draggable: false,
    confirmButtonColor: '#FFD700',
    background: 'black',
    color: '#ffffff',
    customClass: {
      confirmButton: 'btn-swal-ok'
    }
  })
}

export { swalSuccess, swalError }

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

const swalSuccess = (message) => {
  return mySwal.fire({
    title: `${message}`,
    icon: 'success',
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
    confirmButtonColor: '#FFD700',
    background: 'black',
    color: '#ffffff',
    customClass: {
      confirmButton: 'btn-swal-ok'
    }
  })
}

const swalLoading = (message = 'Awaiting server response, please wait, it may take even a minute.') => {
  return mySwal.fire({
    title: message,
    allowOutsideClick: false,
    allowEscapeKey: false,
    background: 'black',
    color: '#ffffff',
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

export { swalSuccess, swalError, swalLoading }

import Swal from 'sweetalert2'

// SweetAlert2 public config
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export { Toast }
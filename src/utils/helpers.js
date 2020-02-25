import axios from 'axios'
import Swal from 'sweetalert2'

const apiHelper = axios.create({
  baseURL: 'https://lighthouse-user-api.herokuapp.com/api/v1'
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export { apiHelper, Toast }
import axios from 'axios'

const apiHelper = axios.create({
  baseURL: 'https://forum-express-api.herokuapp.com/api'
})

export { apiHelper }
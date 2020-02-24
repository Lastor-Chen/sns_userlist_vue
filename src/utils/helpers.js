import axios from 'axios'

const apiHelper = axios.create({
  baseURL: 'https://lighthouse-user-api.herokuapp.com/api/v1'
})

export { apiHelper }
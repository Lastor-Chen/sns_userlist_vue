import { apiHelper } from '../utils/helpers.js'

export default {
  getUsers() {
    return apiHelper.get('/users')
  }
}
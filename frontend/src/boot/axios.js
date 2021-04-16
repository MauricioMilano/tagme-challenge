import Vue from 'vue'
import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.14:3000'
})
export default ({ app, router, Vue, store }) => {

  Vue.prototype.$axios = axiosInstance
  Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${store.getters['auth/getToken']}`
}
export { axiosInstance }


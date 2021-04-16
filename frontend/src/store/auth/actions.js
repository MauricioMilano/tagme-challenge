import Vue from 'vue'

export const AUTH_REQUEST = ({ commit, dispatch }, credential) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/auth/login', credential)
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`
        commit('AUTH_SUCCESS', resp)
        resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        reject(err)
      })
  })
}

export const AUTH_LOGOUT = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    commit('AUTH_LOGOUT')
    localStorage.removeItem('token')
    resolve()
  })
}

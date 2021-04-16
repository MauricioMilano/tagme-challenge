function parseJwt (token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''))

  return JSON.parse(jsonPayload)
}

export const AUTH_SUCCESS = (state, resp) => {
  state.token = resp.data.token
  state.payload = parseJwt(resp.data.token)
}

export const AUTH_ERROR = (state) => {
  state.status = 'error'
}

export const AUTH_LOGOUT = (state) => {
  state.token = ''
  state.payload = {}
}

export const AUTH_PAYLOAD = (state, token) => {
  state.payload = parseJwt(token)
}

export default async ({ app, router, Vue, store }) => {
  const tokenRestored = localStorage.getItem('token')
  if (tokenRestored) store.commit('auth/AUTH_PAYLOAD', tokenRestored)
  router.beforeEach((to, from, next) => {
    const toRoute = to.matched.slice(-1)[0]
    console.log(toRoute.path)

    if (toRoute.meta.requiresAuth) {
      if (store.getters['auth/isAuthenticated']) {
        if (toRoute.meta.roles && toRoute.meta.roles.indexOf(store.getters['auth/getRole']) === -1) {
          next({ path: '/404' })
          return
        }
        next()
        return
      }

      next({ path: '/login', params: { nextUrl: to.fullPath } })
    } else {
      next()
    }
  })
}

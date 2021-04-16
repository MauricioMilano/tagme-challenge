export default async ({ app, router, Vue }) => {
  Vue.prototype.$notifs = function (type, message) {
    if (type === 'negative') {
      this.$q.notify({ color: 'negative', icon: 'block', position: 'top', message: message, timeout: 2500 })
    }
    if (type === 'positive') {
      this.$q.notify({ color: 'light-green-5', icon: 'done', position: 'top', message: message, timeout: 2500 })
    }
    if (type === 'info') {
      this.$q.notify({ color: 'light-blue', icon: 'description', position: 'top', message: message, timeout: 2500 })
    }
  }
}

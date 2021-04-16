<template>
  <div class="row bg">
    <div class=".col-md-6 .offset-md-3 box" >
      <div class="col-3 logo" >
        <q-img
          src="~assets/logo-coco-bambu.png"
        />
      </div>
      <q-input color="orange" outlined class="field" filled v-model="name" label="Nome do Usuario" v-on:keyup.enter="login" >
        <template v-slot:prepend>
          <q-icon class="loginField" />
        </template>
      </q-input>
      <q-input color="orange" outlined class="field" filled type="password" v-model="password" v-on:keyup.enter="login" label="Senha">
        <template v-slot:prepend>
          <q-icon class="passField" />
        </template>
      </q-input>
      <q-btn color="primary" label="Acessar" class="btnLogin" @click="login" :loading="isLoading"/>
    </div>
  </div>
</template>

<script>
import { LoadingBar } from 'quasar'
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: '',
      isLoading: false
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    if (this.$store.getters['auth/isAuthenticated']) this.$router.push({ path:'/receitas' })
    console.log(this.$moment().format('MMMM Do YYYY, h:mm:ss a'))
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    async login () {
      LoadingBar.start()
      try {
        this.isLoading = !this.isLoading
        await this.$store.dispatch('auth/AUTH_REQUEST', { name: this.name, password: this.password })
        this.$notifs('positive', "Logado com sucesso")
        LoadingBar.stop()
        this.$router.push({ path:'/receitas' })
        this.isLoading = !this.isLoading
      } catch (error) {
        this.$notifs('negative', "Erro ao fazer login")
        LoadingBar.stop()
        this.isLoading = !this.isLoading
      }
    }
  }
}
</script>
<style>
.loginField{
  background-image: url("../assets/icon-login.png");
}
.passField{
  background-image: url("../assets/icon-key.png");
}
.bg{
  background-image: url("../assets/img-bg-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height:900px;
}
.field{
  background-color: white;
  width: 300px;
  margin-bottom: 30px;
}
.btnLogin{
  width: 300px;
}
.box{
  margin: 15% auto ;
}
.logo{
  width: 200px;
  margin: 30px auto;
}
</style>

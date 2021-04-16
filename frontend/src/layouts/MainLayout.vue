<template>
  <q-layout view="lhh Lpr lFf">
    <q-header  class= "header">
      <q-toolbar>

        <q-toolbar-title>
        <q-img
          class="img_header"
          src="~/assets/logo-coco-bambu-mini.png"
          @click="pushPage('/')"
        />
        </q-toolbar-title>
        <q-input color="white" class="input" outlined filled label="Busque sua receita">
        <template v-slot:append >
          <q-avatar>
            <img src="~/assets/icon-busca.png">
          </q-avatar>
        </template>
      </q-input>
          <q-btn icon="feed" label= "Menu" @click="pushPage('/')"/>
          <q-btn icon="food_bank" label="Receitas" @click="pushPage('/receitas')"/>
          <q-btn icon="logout" label="Logout" @click="logout()" />
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { LoadingBar } from 'quasar'
export default {
  name: 'MainLayout',
  components: { },
  data () {
    return {

    }
  },
  methods:{
    pushPage(path){
      this.$router.push({ path:path })
    },
    async logout(){
      LoadingBar.start()
      await this.$store.dispatch('auth/AUTH_LOGOUT');
      this.$router.push({path:'/'})
      LoadingBar.stop()
      this.$notifs('positive', "Deslogado com sucesso")
    }
  }
}
</script>
<style scoped>
.img_header{
  width:150px;
}
.input{
  width: 600px;
  max-width:700px;
  font-style: italic;
  background-color: white;

  margin-right: 100px;
  margin-left: 100px;
}
</style>

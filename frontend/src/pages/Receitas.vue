<template>
<div class="q-pa-md" style="max-width: 1500px">
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      active-icon="restaurant_menu"

      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Escolha a Receita"
        icon="fastfood"
        :done="step > 1"
        :header-nav="step > 1"
      >
      <q-list bordered padding>
      <div v-for="receita in receitas" :key="receita.nome" @click="updateSection(receita)">
      <q-item  >
        <q-item-section top avatar  >
          <img class="image_thumb" src="../assets/prato-arroz-grande.jpg">
        </q-item-section>

        <q-item-section >
          <q-item-label top>{{receita.nome}}</q-item-label>
          <q-item-label caption>{{receita.descricao}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
      </div>
    </q-list>
      </q-step>

      <q-step
        :name="2"
        title="Cozinhe"
        caption=""
        icon="outdoor_grill"
        :done="step > 2"
        :header-nav="step > 2"
      >
        <div class="q-pa-md">
    <q-list>
      <q-item tag="label" v-ripple v-for="ingrediente in receitaEscolhida.ingredientes" :key="ingrediente.nome">
        <q-item-section avatar>
          <q-checkbox v-model="ingredientesSelecionados" v-bind:val="ingrediente.nome" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ingrediente.medida}} de {{ingrediente.nome}}</q-item-label>
        </q-item-section>
      </q-item>
        </q-list>
         </div>
           <q-expansion-item
      v-model="expanded"
      icon="menu_book"
      label="Modo de Preparo"
    >
      <q-card>
        <q-card-section>
          <q-list separator>

      <q-item tag="label" v-ripple v-for="step in receitaEscolhida.steps" :key="step" >
        <q-item-section avatar>
          <q-checkbox v-model="stepsSelecionados" v-bind:val="step" color="primary" />
          </q-item-section>
        <q-item-section>
          <q-item-label>{{step}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

        </q-card-section>
      </q-card>
    </q-expansion-item>
        <q-stepper-navigation>
          <q-btn v-bind:disable="disableButton()" @click="validaIngredientesEFinaliza()" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Finalizar e entregar Pedido"
        icon="dinner_dining"
        :header-nav="step > 3"
      >
        Pronto!!

        Pedido finalizado, você levou {{diferencaHorarioEmMin}}

        <q-stepper-navigation>
          <q-btn color="primary" @click="goStep(1)" label="Finalizar" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
</div>
</template>

<script>
import { LoadingBar } from 'quasar'
export default {
  name: 'Receitas',
  data() {
     return {
       receitas:[],
       step: 1,
       receitaEscolhida:{},
       ingredientesSelecionados:[],
       stepsSelecionados:[],
       expanded: true,
       horarioInicial: "",
       horarioFinal:"",
       diferencaHorarioEmMin:""
     }
  },
  created(){
    this.updateReceitas()
  },
  methods:{
    disableButton(){
          return !((this.receitaEscolhida.ingredientes?.length === this.ingredientesSelecionados?.length)
          && (this.receitaEscolhida.steps.length === this.stepsSelecionados.length))
    },
    goStep(step){
      this.step = step
    },
    async updateReceitas(){
      LoadingBar.start()
      try{

        const response = await this.$axios.get('/receitas/all');
        LoadingBar.stop()
        this.$notifs('positive', "Sucesso ao carregar Receitas")
        this.receitas = response.data
        this.receitas.forEach(receita => {
          receita.steps = receita.modoPreparo.split("\n");
        })
      }catch(err){
        this.$notifs('negative', "Erro ao carregar receitas")
        console.log(err)

      }
    },
    updateSection(receita){
      this.receitaEscolhida = receita
      this.goStep(2)
      this.horarioInicial = this.$moment().format('MMMM Do YYYY, h:mm:ss a');
      console.log(this.horarioInicial);
    },
    validaIngredientesEFinaliza () {
      this.diferencaHorarioEmMin = this.$moment(this.horarioInicial, "MMMM Do YYYY, h:mm:ss a").fromNow(true);
      if(this.diferencaHorarioEmMin === "a few seconds"){
        this.$notifs('negative', "Tempo insuficiente")
      }else{
        console.log(this.diferencaHorarioEmMin)
        this.diferencaHorarioEmMin = this.diferencaHorarioEmMin.replace("an","1").replace("a","1").replace("hour","hora").replace("minute", "minuto")
        if (!this.disableButton()) this.goStep(3)
      }
      console.log(this.diferencaHorarioEmMin)
     }
  }
}
</script>
<style scoped>
.image_thumb{
  max-width: 150px;
}
.modo_preparo{
  white-space: pre;
  font-weight: bold;
}
</style>

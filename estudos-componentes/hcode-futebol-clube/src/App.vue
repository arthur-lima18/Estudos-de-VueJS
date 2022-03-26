<template>
  <div id="app">
  
      <HcodeHeader 
        v-on:select-championship="changeChampionship" 
        v-on:change-component="changeComponent"  
      />
      <HcodeSection
        v-bind:current-component="currentSectionComponent"  
      />
      <HcodeFooter />

  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader.vue'
import HcodeFooter from './components/HcodeFooter.vue'
import HcodeSection from './components/HcodeSection.vue'
// import { mapMutations } from 'vuex' //importacao para uso de mutations
import { mapActions } from 'vuex' //importacao para uso de actions

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data: function() {
    return {
      currentSectionComponent: 'HcodeSectionBanner'
    }
  },
  methods: {

    //uso de Mutations
    // ...mapMutations({
    //   changeChampionship: 'setChampionship'
    // }),

    //uso de Actions
    ...mapActions(['changeChampionship']), //podemos usar array quando o nome do metodo criado for igual ao do Action no store.js
    changeComponent: function(value) {

      let component

      switch(value){
        case 'home':
        default:
          component = 'HcodeSectionBanner'
        break;
        
        case 'news':
          component = 'HcodeSectionNews'
        break;
      }

      this.currentSectionComponent = component

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

</style>

<!-- IMPORTANTE!!!!!!!!
Mutations alteram os dados do State
Actions acionam os Mutations, podendo realizar ações assincronas

Usamos Actions em questoes assincronas

Ao inves de 'commit' usamos 'dispatch'
-->
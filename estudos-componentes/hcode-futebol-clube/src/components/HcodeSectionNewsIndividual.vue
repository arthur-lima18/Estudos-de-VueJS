<template>
  
  <div class="row div-news">

    <div class="col-3">

      <img v-bind:src="require('../assets/' + this.imgName)" v-bind:alt="imgAlt">

    </div>
    <div class="col-9">

      <!-- <h2 v-on:click="goToPage(`/news/${idNotice}`)">{{ title }}</h2> -->
      <router-link v-bind:to="{ name: 'notice', params: {idnotice: idNotice} }" tag="h2">{{ title }}</router-link>
      
      <!-- <slot>Notícia Padrão</slot> -->
      <p>{{ content | truncate(200)}}</p>

      <span class="font-italic">{{ formatDate(newsDate) }}</span>

    </div>

  </div>

</template>

<script>
import Utils from './../mixins/UtilsMixins' //possui funcoes para uso em todo o codigo

export default {
  methods: {
    // goToPage: function(page) {
    //   this.$router.push(page)
    // }
  },
  props: {
    imgName: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    title:{ 
      type: String,
      required: true
    },
    content: { //remover em caso de uso da tag slot
      type: String,
      required: true
    },
    newsDate:{
      type: String,
      required: true
    },
     idNotice: {
      type: Number,
      required: true
    },
  },
  mixins: [Utils]
}

/**
 * possiveis validações de props:
 * type = tipo de dado
 * required = se é obrigatoria ou nao
 * default = define um valor padrao para a prop
 * validator = funcao personalizada para validação
 * 
 * na maioria dos casos é valido informar "v-bind"
 */
</script>

<style>/** nao possui o 'scoped' para podermos utilizar o estilo em HcodeSectionNewsNotice */
.div-news {
  margin-bottom: 30px;
}
.div-news img {
  width: 100%;
}
.div-news h2 {
  cursor: pointer;
  color: #fff;
}
</style>
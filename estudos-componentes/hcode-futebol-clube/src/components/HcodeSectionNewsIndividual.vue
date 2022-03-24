<template>
  
  <div class="row">

    <div class="col-3">

      <img v-bind:src="require('../assets/' + this.imgName)" v-bind:alt="imgInfo">

    </div>
    <div class="col-9">

      <h2>{{ title }}</h2>
      <p>{{ content | truncate(200)}}</p>

      <span class="font-italic">{{ newsDate }}</span>

    </div>

  </div>

</template>

<script>
export default {
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
    content: {
      type: String,
      required: true
    },
    newsDate:{
      type: String,
      required: true
    }
  }
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

<style scoped>
.row {
  margin-bottom: 30px;
}
img {
  width: 100%;
}
h2{
  cursor: pointer;
  color: #fff;
}
</style>
<template>

  <section class="section-news">

    <div class="container">

      <!-- com componentes é obrigatorio o uso de uma "v-bind:key" no "v-for" -->
      <HcodeSectionNewsIndividual
        v-for="notice in news"
        v-bind:key="notice.id"
        v-bind:id-notice="notice.id"
        v-bind:img-name="notice.img"
        v-bind:img-alt="notice.imgAlt"
        v-bind:title="notice.title"
        v-bind:content="notice.content"
        v-bind:news-date="notice.date"
      >

        <!-- <p>{{ notice.content | truncate(200)}}</p> --> <!-- interação com a tag slot -->
      
      </HcodeSectionNewsIndividual>
    </div>

  </section>

</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
import { mapGetters } from 'vuex'

export default {
  components: {
    HcodeSectionNewsIndividual
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      news: 'getNews'
    })
  }
}
</script>

<style> /** nao possui o 'scoped' para podermos utilizar o estilo em HcodeSectionNewsNotice */
.section-news {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>
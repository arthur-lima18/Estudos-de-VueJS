<template>

  <section>

    <div class="container">

      <HcodeSectionNewsIndividual 
        img-name="news1.jpg"
        img-alt="Notícia 1"
        title="Começaram os treinos para a nova temporada"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?"
        news-date="01/01/2022"
      />

      <HcodeSectionNewsIndividual 
        img-name="news2.jpg"
        img-alt="Notícia 2"
        title="Jogo de quarta-feira termina empatado"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?"
        news-date="12/01/2022"
      />

      <HcodeSectionNewsIndividual 
        img-name="news3.jpg"
        img-alt="Notícia 3"
        title="A inauguração do novo estádio ocorrerá na próxima semana"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi blanditiis tempora natus voluptates fugiat facere aliquam molestiae quis. Ut mollitia animi ullam placeat fugiat! Eum quae modi illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae ullam a debitis vitae itaque autem ad, quia quis enim ut dignissimos et. Iste, excepturi quia ut ea minus nemo?"
        news-date="18/01/2022"
      />

    </div>

  </section>

</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
export default {
  components: {
    HcodeSectionNewsIndividual
  }
}
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>
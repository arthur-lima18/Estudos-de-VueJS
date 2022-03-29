<template>

    <section class="section-news">

        <div class="container">

            <div class="row div-news">

                <div class="col-6">
                    <img v-bind:src="require(`../assets/${notice.img}`)" v-bind:alt="notice.imgAlt">
                </div>
                <div class="col-6">
                    <h2>{{ notice.title }}</h2>
                    <p>{{ notice.content }}</p>
                    <span>{{ formatDate(notice.date) }}</span>
                </div>

            </div>

        </div>

    </section>

</template>

<script>
import Utils from './../mixins/UtilsMixins'
export default {
    computed: {
        notice: function() {
            return this.$store.getters.getNoticeFromId(this.$route.params.idnotice)
        }
    },
    mixins: [Utils],
    beforeRouteEnter: (to, from, next) => {

        let params = to.params;

        if(!parseInt(params.idnotice) > 0) //se o id nao for maior que 0(valor inexistente de ID)
            next('/')

        next()
    }
}
</script>

<style scoped>
h2 {
    cursor: auto;
    color: #000;
}
</style>
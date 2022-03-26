<template>
  <input type="text" class="form-control" placeholder="Digite seu clube" v-bind:value="clubName" v-on:keyup="changeClubName($event.target.value)">
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    clubName: 'getClubName'
  }),
  methods: mapActions(['changeClubName'])
}
</script>

<style scoped>

</style>
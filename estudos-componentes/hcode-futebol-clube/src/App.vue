<template>
  <div id="app">
  
      <HcodeHeader />
      <HcodeSection />
      <HcodeFooter />

  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader.vue'
import HcodeFooter from './components/HcodeFooter.vue'
import HcodeSection from './components/HcodeSection.vue'

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');

</style>

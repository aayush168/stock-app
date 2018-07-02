<template>
  <div id="app">
    <navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'LayoutMain',
  data () {
    return {
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="stylus">
</style>

<template>
  <div class="mainWrapper">
    <dashboard/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'home',
  components: {
    Dashboard,
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
}
</script>
<style lang="stylus">
</style>


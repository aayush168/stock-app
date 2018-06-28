<template>
  <div class="home">
    <navbar/>
    <br>
    <dashboard class="dashboard"/>
    <br>
    <compant-setup/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Dashboard from '@/components/Dashboard'
import CompantSetup from '@/components/CompantSetup'

export default {
  name: 'home',
  components: {
    Navbar,
    Dashboard,
    CompantSetup
  }
}
</script>
<style lang="stylus">
.dashboard {
  padding: 0 32px;
}
</style>


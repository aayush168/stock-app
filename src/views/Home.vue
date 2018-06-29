<template>
  <div class="home">
    <navbar/>
    <br>
    <dashboard class="dashboard"/>
    <br>
    <company-setup/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Dashboard from '@/components/Dashboard'
import CompanySetup from '@/components/CompanySetup'

export default {
  name: 'home',
  components: {
    Navbar,
    Dashboard,
    CompanySetup
  }
}
</script>
<style lang="stylus">
.dashboard {
  padding: 0 32px;
}
</style>


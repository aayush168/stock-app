<template>
  <div id="app">
    <div class="mainWrapper highlight">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
.mainWrapper {
  padding: 30px 0;
}
.label {
  font-weight: 400;
}
.select, .select select {
  width: 100%;
}
.navbar-link::after {
  border-color: #167df0 !important;
}
.icon {
  margin-right: 1.5px !important;
}
a{
  color #4a4a4a;
}
</style>

<template>
  <div id="app">
    <div class="mainWrapper">
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
  padding: 20px;
}
.label {
  font-weight: 400;
}
.select, .select select {
  width: 100%;
}
</style>

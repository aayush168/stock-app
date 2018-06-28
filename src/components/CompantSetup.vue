<template>
  <section class="addProducts">
    
    <b-modal :active.sync="isCardModalActive" :width="500" scroll="keep">
      <div class="card">
        <p class="titleLabel">Setup your Company Profile</p>
        <form>
          <b-field label="Company Name">
              <b-input v-model="name"></b-input>
          </b-field>
          <b-field label="Mobile /Phone Number">
              <b-input v-model="name"></b-input>
          </b-field>
        </form>
      </div>
    </b-modal>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isCardModalActive: true
    }
  }
}

</script>
<style lang="stylus">
.addProducts {
  .titleLabel {
    text-align center
  }
}
</style>


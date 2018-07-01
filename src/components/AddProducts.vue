<template>
  <div class="addProducts">
    <form @submit.prevent="setCompanyProfile()">
      <b-field label="Company Name">
          <b-input v-model="companyName" required></b-input>
      </b-field>
      <b-field label="Mobile / Phone Number">
          <b-input v-model="contactNo" required type="number"></b-input>
      </b-field>
      <p class="buttonWrapper">
        <button class="button is-success">Create</button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
}
</script>
<style lang="stylus">

</style>


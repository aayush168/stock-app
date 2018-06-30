<template>
  <div class="companySetupContainer">
    <b-modal :active.sync="isCardModalActive" :width="500" scroll="keep">
      <div class="card">
        <p class="titleLabel">Setup your Company Profile</p>
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
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isCardModalActive: true,
      companyName: '',
      contactNo: ''
    }
  },
  methods: {
    ...mapActions(['createCompanyProfile']),
    setCompanyProfile() {
      this.createCompanyProfile({
        companyName: this.companyName,
        contactNo: this.contactNo
      })
    }
  }
}

</script>
<style lang="stylus">
.companySetupContainer {
  .card {
    padding: 30px
    border-radius 5px
    .titleLabel {
      text-align center
      font-size: 1.25rem
      margin-bottom: 20px
    }
    .buttonWrapper {
      text-align: center;
      margin-top: 30px;
    }
  }
}
</style>


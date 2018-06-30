<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Sign-Up</h3>
            <div class="box">
              <figure class="avatar">
                  Welcome to StockApp
              </figure>
              <br>
              <form @submit.prevent="createNewUser()">
                <div class="field">
                  <b-input v-model="email" type="email" placeholder="Your Email" required></b-input>
                </div>
                <div class="field">
                  <b-input v-model="password" type="password" placeholder="Your Password" autofocus="" required></b-input>
                </div>
                <br>
                <button class="button is-block is-info is-fullwidth" @click="createNewUser()">Register</button>
              </form>
              <br>
              <button class="button is-block is-fullwidth is-danger" @click="pushtoLogin()">Back</button>           
            </div>
            <p class="has-text-grey">
              <a href="../">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['signUp']),
    createNewUser() {
      this.signUp({
        email: this.email,
        password: this.password
      })
    },
    pushtoLogin() {
      this.$router.push('/login')
    }
  }
  }
</script>
<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <figure class="avatar">
                    <img src="https://placehold.it/128x128">
                </figure>
                <br>
                <form @submit.prevent="loginUser()">
                  <div class="field">
                    <b-input v-model="email" type="email" placeholder="Your Email" required></b-input>
                  </div>
                  <div class="field">
                    <b-input v-model="password" type="password" placeholder="Your Password" autofocus="" required></b-input>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                  <button class="button is-block is-info is-fullwidth" @click="loginUser()">Login</button>
                </form>
                <br>
                <button class="button is-block is-fullwidth" @click="googleLoginUser()">Login With Google</button>              
              </div>
              <p class="has-text-grey">
                  <a @click="pushtoSignUp()">Sign Up</a> &nbsp;·&nbsp;
                  <a href="../">Forgot Password</a> &nbsp;·&nbsp;
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
    ...mapActions((['login', 'googleLogin'])),
    loginUser() {
      this.login({
        email: this.email,
        password: this.password,
      })
    },
    googleLoginUser() {
      this.googleLogin()
    },
    pushtoSignUp() {
      this.$router.push('/signup')
    }
  }
}
</script>
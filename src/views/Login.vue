<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <h2 class="subtitle has-text-grey">Welcome to StockApp</h2>
                <form @submit.prevent="loginUser()">
                  <custom-input v-model='form.email' name="email" type="email" :formData="form" label="Email" :handler="$v" placeholder="Your Email" required @change="inputChange('email')"/>
                  <custom-input v-model='form.password' name="password" type="password" :formData="form" label="Password" :handler="$v" placeholder="Your Password" required @change="inputChange('password')"/>
                  <p v-if="defaultError != ''" id="errorLogin">{{defaultError}}</p>
                  <br>
                  <button :class="pendingLogin ? 'button is-block is-success is-fullwidth is-loading': 'button is-block is-success is-fullwidth'">Login</button>
                </form>
                <br>
                <button :class="pendingGoogle ? 'button is-block is-light is-fullwidth is-loading': 'button is-block is-light is-fullwidth' " @click="googleLoginUser()">Login With Google</button>              
              </div>
              <p class="has-text-grey">
                <a @click="pushtoSignUp()">Sign Up</a>
              </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CustomInput from '@/components/CustomInput';

  
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        errorMessages: {
          email: {},
          password: {}
        },
        errorResponses: {
          email: {},
          password: {}
        }
      },
      defaultError: ''
    }
  },
  validations: {
    form: {
      email:{},
      password:{}
    }
  },
  components: {
    CustomInput
  },
  computed: {
    ...mapGetters(['pendingLogin', 'pendingGoogle'])
  },
  methods: {
    ...mapActions((['login', 'googleLogin'])),
    loginUser() {
      this.$v.form.$touch()
      if(this.$v.form.$error) {
        console.log('error')
      } else {
        this.login({
        email: this.form.email,
        password: this.form.password,
        }).catch(err => {
          this.defaultError = 'Invalid email or password.' 
        }) 
      }
    },
    googleLoginUser() {
      this.googleLogin().catch(err => {
        this.$snackbar.open({
          message: err.message,
          type: 'is-warning',
          position: 'is-top-right',
          actionText: null,
          duration: 3000
        })
      })
    },
    pushtoSignUp() {
      this.$router.push('/signup')
    },
    inputChange(name) {
      this.defaultError = ''
      Object.keys(this.form.errorResponses[name]).forEach((key, index) => {
        this.form.errorResponses[name][key] = false
      })
    },
  }
}
</script>

<style lang="stylus">
#errorLogin {
  font-size: 0.8rem;
  text-align: right;
  color: #ff3860;
}
</style>

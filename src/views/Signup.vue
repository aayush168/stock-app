<template>
  <div class="signUpWrapper">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Sign-Up</h3>
            <div class="box">
              <h2 class="subtitle has-text-grey">Welcome to StockApp</h2>
              <form @submit.prevent="createNewUser()">
                <custom-input v-model='form.email' name="email" type="email" :formData="form" label="Email" :handler="$v" placeholder="Your Email" required @change="inputChange('email')"/>
                <custom-input v-model='form.password' name="password" type="password" label="Password" :formData="form" :handler="$v" placeholder="Your Password" required/>
                <div class="field has-text-grey" id="checkboxSignUp">
                  <b-checkbox v-model="form.checkbox" type="is-success" @change="$v.checky.$touch()" :handler="$v">
                    I agree to <span class="link" @click="termsCondition()">terms and conditions.</span>
                  </b-checkbox>
                </div>
                <button :class="pendingSignup ? 'button is-block is-light is-fullwidth is-loading':'button is-block is-light is-fullwidth'" id="signUpButton" :loading="pending">Register</button>
              </form>
              <br>
              <button class="button is-block is-fullwidth is-danger" @click="pushtoLogin()">Back</button>           
            </div>
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
        checkbox: false,
        errorMessages: {
          email: {
            usernameExist: 'The email address is already in use by another account'
          },
          password: {
            validPassword: 'Must have an alphabet and a number'
          },
          checkbox: {
            required: 'Required'
          }
        },
        errorResponses: {
          email: {
            'Member.Username.Exist': false
          }
        }
      }
    }
  },
  validations: {
    form: {
      email: {
        usernameExist() {
           return !this.form.errorResponses.email['Member.Username.Exist']
        }
      },
      password: {
        validPassword(value) {
          if (value === '') {
            return true
          }
          else {
            return /(?=.*[0-9])(?=.*[a-zA-Z])/i.test(value)
          }
        },
      },
    }
  },
  computed: {
    ...mapGetters(['pendingSignup'])
  },
  components: {
    CustomInput
  },
  methods: {
    ...mapActions(['signUp']),
    createNewUser() {
      this.$v.form.$touch()
      if(this.$v.form.$error) {
        console.log('error')
      } else {
        this.signUp({
          email: this.form.email,
          password: this.form.password
        }).catch(err => {
          if(err.code === 'auth/email-already-in-use') {
            this.form.errorResponses.email['Member.Username.Exist'] = true
          } else {
            this.$snackbar.open({
              message: err.message,
              type: 'is-warning',
              position: 'is-top-right',
              actionText: null,
              duration: 3000
            })
          }
        })
      }
    },
    inputChange(name) {
      Object.keys(this.form.errorResponses[name]).forEach((key, index) => {
        this.form.errorResponses[name][key] = false
      })
    },
    termsCondition() {

    },
    pushtoLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus">
#signUpButton {
  box-shadow: 2px 2px 2px 0 #ccc;
}
#checkboxSignUp {
  text-align: left;
  font-size: 0.8rem;
  margin: 20px 0;
  .link {
    font-weight: 500;
  }
}
</style>

<template>
  <nav class="navbar has-shadow is-spaced">
    <div class="container is-widescreen">
      <div class="navbar-brand">
        <a class="navbar-item" href="/" id="logo">
          <strong class="subtitle is-4">StockApp</strong>
        </a>
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">
            <span class="icon has-text-info">
              <i class="fas fa-home"></i>
            </span>
            <span>Dashboard</span>
            </router-link>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
            <span class="icon has-text-info">
              <i class="fas fa-book"></i>
            </span>
              Accounts
            </a>
            <div class="navbar-dropdown is-boxed is-dark">
              <a class="navbar-item">
              <router-link to="/addInvoice">
                Sales
              </router-link>
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Purchases
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Inventory
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Assets
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Expenses
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              <span class="icon has-text-info">
                <i class="fas fa-signal"></i>
              </span>
              <span>Reports</span>
            </a>            
            <div class="navbar-dropdown is-boxed" id="moreDropdown">
              <a class="navbar-item" href="/documentation/overview/start/">
                Income Statement
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="/documentation/overview/start/">
                Balance Sheet
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item" href="/documentation/overview/start/">
                Cashflow
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
            <span class="icon has-text-info">
              <i class="far fa-file-alt "></i>
            </span>
            Inventory

            </a>            
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item">
                <router-link to="/addProducts">
                  Add Products
                </router-link>
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item">
                <router-link to="/inventoryList">
                  Inventory List
                </router-link>
              </a>
              <hr class="navbar-divider">

            </div>
          </div>
        </div>
        <div class="navbar-end" :class="{ 'is-active': showNav }">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              {{user.name}}
            </a>            
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" @click="logoutUser()">
                Log-out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
          
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      showNav: false
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
    }
  }
}
</script>

<style lang="stylus">
</style>

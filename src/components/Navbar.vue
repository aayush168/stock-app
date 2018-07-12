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
              <router-link to="/addInvoice" class="navbar-item">
                <span class="icon has-text-info">
                  <i class="fas fa-edit"></i>
                </span>
                Sales
              </router-link>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                <span class="icon has-text-info">
                  <i class="fas fa-cart-plus"></i>
                </span>
                Purchases
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                <span class="icon has-text-info">
                  <i class="fas fa-box-open"></i>
                </span>
                Inventory
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                <span class="icon has-text-info">
                  <i class="fas fa-university"></i>
                </span>
                Assets
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                <span class="icon has-text-info">
                  <i class="fas fa-wallet"></i>
                </span>
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
                <span class="icon has-text-info">
                  <i class="fas fa-chart-bar"></i>
                </span>
                Income Statement
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="/documentation/overview/start/">
                <span class="icon has-text-info">
                  <i class="fas fa-chart-area"></i>
                </span>
                Balance Sheet
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="/documentation/overview/start/">
                <span class="icon has-text-info">
                  <i class="far fa-money-bill-alt"></i>
                </span>
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
                <span class="icon has-text-info">
                  <i class="fas fa-pencil-alt"></i>              
                </span>
                  Add Products
                </router-link>
              </a>
              <hr class="navbar-divider">

              <a class="navbar-item">
                <router-link to="/inventoryList">
                <span class="icon has-text-info">
                  <i class="fas fa-list-ol"></i>           
                </span>
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
              <span class="icon has-text-info">
                <i class="far fa-user"></i>
              </span>
              {{user.name}}
            </a>            
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" @click="logoutUser()">
                <span class="icon has-text-danger">
                  <i class="far fa-window-close"></i>
                </span>
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

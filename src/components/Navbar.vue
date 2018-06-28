<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="/" id="logo">
        <strong>StockApp</strong>
      </a>
      <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Dashboard
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Accounts
          </a>
          <div class="navbar-dropdown is-boxed is-dark">
            <a class="navbar-item" href="/documentation/overview/start/">
              Sales
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Purchases
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Inventory
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Assets
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Expenses
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
           <a class="navbar-link" href="/">
            Reports
          </a>            
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/documentation/overview/start/">
              Income Statement
            </a>
            <a class="navbar-item" href="/documentation/overview/start/">
              Balance Sheet
            </a>
            <a class="navbar-item" href="/documentation/overview/start/">
              Cashflow
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
           <a class="navbar-link" href="/">
            Inventory
          </a>            
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/documentation/overview/start/">
              Add Products
            </a>
            <a class="navbar-item" href="/documentation/overview/start/">
              View Inventory
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  
export default {
  data () {
    return {
      showNav: false
    }
  },
}
</script>

<style lang="stylus">
#logo {
  margin-right: 50px;
}
</style>

<template>
  <div class="container mainWrapper">
    <h1 class="subtitle">Stock Lists</h1>
    <div class="columns">
      <div class="column">
        Product Name 
      </div>
      <div class="column">
        Product Quanity
      </div>
      <div class="column">
        Product Cost
      </div>
      <div class="column">
        Total Cost
      </div>
    </div>
    <div class="card is-spaced" v-for="(product, index) in productLists" :key="index">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            {{index+1+'.'+ ' '+ product.name}}
          </div>
          <div class="column">
            {{product.quantity+ ' ' +product.unit}}
          </div>
          <div class="column">
            {{product.cost}}
          </div>
          <div class="column">
            {{product.total}}
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        productData: []
      }
    },
    computed: {
      ...mapGetters(['productLists'])
    },
    methods: {
      ...mapActions(['getProducts'])
    },
    mounted() {
      this.getProducts()
    }
  }
</script>

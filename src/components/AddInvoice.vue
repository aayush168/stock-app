<template>
  <div class="mainWrapper">
    <h2 class="subtitle is-4">Add Invoice</h2>
      <div class="invoiceHeader">
        <b-field label="Customer">
          <b-input v-model="clientName" required type="text"></b-input>
        </b-field>
        <b-field label="Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today">
          </b-datepicker>
        </b-field>
        <b-field label="Due Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today">
          </b-datepicker>
        </b-field>
      </div>
      <div class="invoiceMain">
        <b-field label="Product Name">
          <b-input v-model="clientName" required type="text"></b-input>
        </b-field>
        <b-field label="Quanity">
          <b-input v-model="clientName" required type="text"></b-input>
        </b-field>
        <b-field label="Rate">
          <b-input v-model="clientName" required type="text"></b-input>
        </b-field>
        <b-field label="Total">
          <b-input v-model="clientName" required type="text"></b-input>
        </b-field>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unitList: ['Kilogram', 'Litre', 'Pieces', 'Packets', 'Units', 'Meter'],
      clientName: ''   
    }
  }
}
</script>

<style lang="stylus">
.invoiceHeader {
  display: flex;
}
.invoiceMain {
  display: flex;
}
</style>

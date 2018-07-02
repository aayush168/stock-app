<template>
  <div class="mainWrapper">
    <h2 class="subtitle is-4">Add Products</h2>
    <form @submit.prevent="setCompanyProfile()">
      <b-field label="Product Name">
        <b-input v-model="productName" required></b-input>
      </b-field>
      <b-field label="Product Description">
        <b-input v-model="productDescription" required type="number"></b-input>
      </b-field>
      <b-field label="Unit of Measure">
        <b-select placeholder="Select">
          <option
              v-for="unit in unitList"
              :value="unit"
              :key="unit">
              {{ unit }}
          </option>
        </b-select>
      </b-field>
      <div class="twoColumnWrapper">
        <b-field label="Initial Quantity in Hand">
          <b-input v-model="initialQuantity" required type="number"></b-input>
        </b-field>
        <b-field label="As on Date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today">
          </b-datepicker>
        </b-field>
      </div>
      <div class="twoColumnWrapper">
        <b-field label="Initial Cost / Unit">
          <b-input v-model="initialQuantity" required type="number"></b-input>
        </b-field>
        <b-field label="Value">
          <b-input v-model="initialQuantity" required type="text"></b-input>
        </b-field>
      </div>
      <br>
      <p class="buttonWrapper">
        <button class="button is-success">Add</button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      unitList: ['Kilogram', 'Litre', 'Pieces', 'Packets', 'Units', 'Meter'],
      productName: '',
      productDescription: '',
      initialQuantity: ''
    }
  }
}
</script>
<style lang="stylus">
.twoColumnWrapper {
  display: flex;
  width: 100%;
}
</style>


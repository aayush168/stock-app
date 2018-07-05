<template>
  <div class="mainWrapper is-light">
    <h2 class="subtitle is-4">Add Products</h2>
    <form @submit.prevent="setCompanyProfile()">
      <custom-input v-model='form.productName' name="productName" type="text" :formData="form" label="Product Name" :handler="$v" placeholder="Enter Product Name" required @change="inputChange('productName')"/>
      <custom-input v-model='form.productDescription' name="productDescription" type="text" :formData="form" label="Product Description" :handler="$v" placeholder="Enter Product Description" required @change="inputChange('productDescription')"/>
      <b-field label="Unit of Measure">
        <b-select placeholder="Select">
          <option
            v-for="unit in form.unitList"
            :value="unit"
            :key="unit">
            {{ unit }}
          </option>
        </b-select>
      </b-field>
      <div class="twoColumnWrapper">
        <b-field label="Initial Quantity in Hand">
          <b-input v-model="form.initialQuantity" required type="number"></b-input>
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
          <b-input v-model="form.initialQuantity" required type="number"></b-input>
        </b-field>
        <b-field label="Value">
          <b-input v-model="form.initialQuantity" required type="text"></b-input>
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
import CustomInput from '@/components/CustomInput';

export default {
  data () {
    return {
      form: {
        productName: '',
        productDescription: '',
        initialQuantity: '',
        unitList: ['Kilogram', 'Litre', 'Pieces', 'Packets', 'Units', 'Meter'],
        errorMessages: {
          productName: {},
          productDescription: {},
          initialQuantity: {},
          unitList: {}
        }
      }
    }
  },
  validations: {
    form: {
      productName: {},
      productDescription: {},
      initialQuantity: {},
      unitList: {}
    }
  },
  components: {
    CustomInput
  },
  inputChange(name) {
    this.defaultError = ''
    Object.keys(this.form.errorResponses[name]).forEach((key, index) => {
      this.form.errorResponses[name][key] = false
    })
  }
}
</script>
<style lang="stylus">
.twoColumnWrapper {
  display: flex;
  width: 100%;
}
</style>


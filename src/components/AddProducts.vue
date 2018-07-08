<template>
  <div class="mainWrapper is-light container is-widescreen">
    <h2 class="subtitle is-4">Add Products</h2>
    <p>Products and services that you buy from vendors are used as items on Bills to record those purchases, and the ones that you sell to customers are used as items on Invoices to record those sales.</p><br>
    <form @submit.prevent="setCompanyProfile()">
      <custom-input v-model='form.productName' name="productName" type="text" :formData="form" label="Product Name" :handler="$v" placeholder="Enter Product Name" required @change="inputChange('productName')"/>
      <custom-input v-model='form.productDescription' name="productDescription" type="text" :formData="form" label="Product Description" :handler="$v" placeholder="Enter Product Description" required @change="inputChange('productDescription')"/>
      <b-field label="Unit of Measure">
        <b-select placeholder="Select" v-model="form.productUnit">
          <option
            v-for="unit in unitList"
            :value="unit"
            :key="unit">
            {{ unit }}
          </option>
        </b-select>
      </b-field>
      <div class="twoColumnWrapper">
        <custom-input v-model='form.productQuantity' name="productQuantity" type="number" :formData="form" label="Initial Quantity in Hand" :handler="$v" placeholder="Enter Product Quantity" required/>
        <b-field label="As on Date" id="datePicker">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar-today"
            v-model="form.initialDate"
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="twoColumnWrapper">
        <custom-input v-model='form.productCost' name="productCost" type="number" :formData="form" label="Initial Cost/Unit" :handler="$v" placeholder="Enter Product Cost" required/>
        <custom-input v-model='form.totalAmount' name="totalAmount" type="number" :formData="form" label="Total Amount" :handler="$v" placeholder="value" readonly/>        
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
      unitList: ['Kilogram', 'Litre', 'Pieces', 'Packets', 'Units', 'Meter'],
      form: {
        productName: '',
        productDescription: '',
        productQuantity: '',
        productUnit: 'Kilogram',
        initialDate: new Date(),
        productCost: '',
        totalAmount: '',
        errorMessages: {
          productName: {},
          productDescription: {},
          productQuantity: {},
          productUnit: {},
          initialDate: {},
          productCost: {},
          totalAmount: {}
        }
      }
    }
  },
  validations: {
    form: {
      productName: {},
      productDescription: {},
      productQuantity: {},
      unitList: {},
      initialDate: {},
      productCost: {},
      totalAmount: {}
    }
  },
  components: {
    CustomInput
  },
  methods: {
    addProduct() {
      this.$v.form.$touch()
      if(this.$v.form.$error) {
        console.log('error')
      } else {
      }
    },
    inputChange(name) {
      this.defaultError = ''
      Object.keys(this.form.errorResponses[name]).forEach((key, index) => {
        this.form.errorResponses[name][key] = false
      })
    }
  }
}
</script>
<style lang="stylus">
.twoColumnWrapper {
  display: flex;
  width: 100%;
  .customInputWrapper {
    width: 47.5%;
    &:first-child {
      margin-right: 2.5%;
    }
    &:last-child {
      margin-left: 2.5%;
    }
    .field {
      width: 100% !important;
    }
  }
  #datePicker {
    margin-left: 2.5%;
    width: 47.5%;
  }
}
</style>


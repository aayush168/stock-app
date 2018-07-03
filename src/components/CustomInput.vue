<template>

  <div class="customInputWrapper">
    <div class="field">
      <label class="label">{{label}}</label>
      <b-input 
        v-model="state" 
        :type="type" 
        :placeholder="placeholder" 
        @input="input()" 
        :value="model" 
        :required="required" 
        :disabled="disabled" 
        :readonly="readonly"
        :class="formHandle.$error ? 'is-danger': ''"
      >
      </b-input>
      <p :class="formHandle.$error ? 'help is-danger': 'help'" v-if="formHandle.$error" v-for="error in errors" :key="error">{{ errorMessage[error] }}.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
      labelTitle: ''
    }
  },
  props: [
    'model',
    'type',
    'name',
    'handler',
    'formData',
    'placeholder',
    'disabled',
    'readonly',
    'required',
    'label'
  ],
  model: {
    prop: 'model',
    event: 'updateModel'
  },
  created() {
    this.state = this.model;
  },
  methods: {
    input() {
      this.$emit('updateModel', this.state);
      this.$emit('change')
    }
  },
  watch: {
    'model': function(){
      this.state = this.model
    }
  },
  computed: {
    errors: function(){
      return Object.getOwnPropertyNames(this.formHandle).filter(x => {
        return this.formHandle[x]===false&&x[0]!=='$';
      });
    },
    formHandle: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr];
      }, this.handler.form);
      return data;
    },
    errorMessage: function(){
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr];
      }, this.formData.errorMessages);
      return data;
    }
  }
}
</script>

<style lang="stylus">
.customInputWrapper {
  margin-bottom: 10px;
  .label {
    text-align: left;
    color: #7a7a7a;
  }
  .field {
    margin-bottom: 0px !important;
    .help {
      text-align: right;
    }
  }
}

</style>
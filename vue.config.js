module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.resolve.alias.vue$ = 'vue/dist/vue.min.js'
    } else {
      config.resolve.alias.vue$ = 'vue/dist/vue.js'
    }
  }
}

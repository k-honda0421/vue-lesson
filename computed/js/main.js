const app = Vue.createApp({
  data: () => ({
    message: 'hello vue.js',
    basePrice: 100,
  }),
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function () {
      // console.log("")
      return Math.random()
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function () {
        return this.basePrice * 1.1
      },
      set: function (value) {
        this.basePrice = value / 1.1
      }
    },
    computedNumber: function () {
      console.log("computed")
      return Math.random()
    },
  }
})
app.mount('#app')

const app = Vue.createApp({
  data: () => ({
    message: 'hello vue.js',
    km: 0,
    m: 0,
    firstName: '',
    lastName: '',
    fullName: '',
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ]
  }),
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    message: function (newValue, oldValue) {
      console.log('new: %s, old %s', newValue, oldValue);
    },
    km: function (value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
    },
    m: function (value) {
      this.km = value / 1000
    },
    firstName: function (value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function (value) {
      this.fullName = this.firstName + ' ' + value
    },
    colors: {
      handler: function (newValue, oldValue) {
        console.log('update')
      },
      deep: true,
    },
  },
  methods: {
    onClick: function () {
      this.colors[1].name = 'White'
    }
  }
})
app.mount('#app')

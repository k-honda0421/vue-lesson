const app = Vue.createApp({
  data: () => ({
    message: 'hello vue.js',
    message2: 'hello vue.js',
    message3: 'hello <span style="color:red;">vue.js</span>',
    message4: 'hello vue.js',
    message5: 'hello vue.js',
    message6: 'hello vue.js',
    number: 100,
    ok: true,
    url: 'https://www.google.com'
  }),
  methods: {
    clicHandler: function(event) {
      this.message = this.message.split('').reverse().join('');
    }
  }
})
app.mount('#app')

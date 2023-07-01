const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js',
    checked: false,
    colors: [],
    color: '',
    selected: '',
    arrSelected: [],
    age: 0,
  }),
})
app.mount('#app')

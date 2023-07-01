const helloComponent2 = {
  template: '<p>hello</p>'
}

const buttonCounter = {
  template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function (event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({
  }),
  components: {
    'hello-component2': helloComponent2,
    'button-counter': buttonCounter
  }
})

app.component('hello-component', {
  template: '<p>hello</p>'
})

app.mount('#app')

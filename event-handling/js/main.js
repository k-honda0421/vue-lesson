const app = Vue.createApp({
  data: () => ({
    counter: 0,
    event: '',
    message: '',
    time: '',
  }),
  methods: {
    clickHandler: function(event) {
      this.counter++;
      this.event = event.toString();
      console.log(event.target);
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
      console.log(event.target.type);
      console.log(event.target.id);
    },
    clickHandler2: function($event, message) {
      console.log(message);
      this.message = message;
      console.log($event)
    },
    clickHandler3: function() {
      this.time = new Date().toLocaleTimeString();
    }
  }
})
app.mount('#app')

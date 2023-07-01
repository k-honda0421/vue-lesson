const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true,
    },
    largeClass2: {
      'large': true,
      'bg-gray': true,
    },
    dangerClass2: {
      'text-danger': true,
    },
    isLarge2: true,
    color: 'blue',
    fontSize: 36,
    styleObject: {
      color: 'blue',
      fontSize: '48px',
    }
  }),
})
app.mount('#app')

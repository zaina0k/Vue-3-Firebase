const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    say(msg){
      console.log(msg)
    },
    handleEvent(e,num){
      //e is the event that can be used when an event occurs. e must be the first parameter
      console.log(e)
      console.log(num)
    },
    test(x){
      console.log("test")
      console.log(x)
    }
  }
})

app.mount('#app')
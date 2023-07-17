const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books : [
        {
          title: "name of the wind",
          author: "rothfuss",
          age:30
        },
        {
          title: "the way of kings",
          author: "sanderson",
          age:30
        },
        {
          title: "the final empire",
          author: "sanderson",
          age:30
        }
      ],
      x: 0,
      y: 0,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e.type, e)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')
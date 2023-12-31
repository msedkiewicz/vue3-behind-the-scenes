const app = Vue.createApp({ // first template of Vue app
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({ // second template of Vue app
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: 'lasagna'
    }
  }
})
app2.mount('#app2');
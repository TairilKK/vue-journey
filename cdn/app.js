const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },

  methods: {
    changeTitle() {
      this.title = "The Well of Ascension";
    },
  },
});

app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Zoo", author: "Author 1" },
        { title: "Monkey", author: "Author 2" },
        { title: "Donkey", author: "Author 3" },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      url: "https://vuejs.org/",
      showBooks: true,
      books: [
        { title: "Zoo", author: "Author 1", img: "https://picsum.photos/200" },
        {
          title: "Monkey",
          author: "Author 2",
          img: "https://picsum.photos/200",
        },
        {
          title: "Donkey",
          author: "Author 3",
          img: "https://picsum.photos/200",
        },
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

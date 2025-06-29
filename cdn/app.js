const app = Vue.createApp({
  data() {
    return {
      url: "https://vuejs.org/",
      showBooks: true,
      books: [
        {
          title: "Zoo",
          author: "Author 1",
          img: "https://picsum.photos/200",
          isFavorite: false,
        },
        {
          title: "Monkey",
          author: "Author 2",
          img: "https://picsum.photos/200",
          isFavorite: true,
        },
        {
          title: "Donkey",
          author: "Author 3",
          img: "https://picsum.photos/200",
          isFavorite: true,
        },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavorite(book) {
      book.isFavorite = !book.isFavorite;
    },
  },
});

app.mount("#app");

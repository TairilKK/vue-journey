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
          isFavourite: false,
        },
        {
          title: "Monkey",
          author: "Author 2",
          img: "https://picsum.photos/200",
          isFavourite: true,
        },
        {
          title: "Donkey",
          author: "Author 3",
          img: "https://picsum.photos/200",
          isFavourite: true,
        },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavourite(book) {
      book.isFavourite = !book.isFavourite;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFavourite);
    },
  },
});

app.mount("#app");

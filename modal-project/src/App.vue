<template>
  <h1>{{ title }}</h1>
  <p>Welcome ...</p>
  <div v-if="showModal">
    <Modal theme="red" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>

      <h1>Movie title</h1>
      <p>Some description</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">open modal(alt)</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Vue 3 Modal Project",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

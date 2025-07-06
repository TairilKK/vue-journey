<template>
  <form @submit.prevent="handleSubmit">
    <label for="title">Title:</label>
    <input type="text" name="title" required v-model="title" />

    <label for="deatils">Details:</label>
    <textarea type="text" name="details" v-model="details"></textarea>

    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id,
    };
  },
  mounted() {
    console.log(this.id);
    fetch(this.uri)
      .then((response) => response.json())
      .then((p) => {
        (this.title = p.title), (this.details = p.details);
      });
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style></style>

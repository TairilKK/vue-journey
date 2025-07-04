<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id {{ id }}</p>
    <p>{{ job.company }}</p>
  </div>
  <div v-else><p>Loading job...</p></div>
</template>

<script>
export default {
  name: "JobsDetailsView",
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>

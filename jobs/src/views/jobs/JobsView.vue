<template>
  <h1>Jobs:</h1>
  <div>
    <h2 v-for="job in jobs" :key="job.id">{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "JobsView",
  data() {
    return {
      jobs: [
        { id: 1, title: "Software Engineer", company: "Tech Corp" },
        { id: 2, title: "Data Scientist", company: "Data Inc." },
        { id: 3, title: "Web Developer", company: "Web Solutions" },
      ],
    };
  },
};
</script>

<style></style>

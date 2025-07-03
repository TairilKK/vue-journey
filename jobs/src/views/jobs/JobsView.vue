<template>
  <h1>Jobs:</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'job-details', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
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

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
  color: inherit;
}
</style>

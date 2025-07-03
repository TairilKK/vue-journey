<template>
  <h1>Job Details Page</h1>
  <p>The job id {{ id }}</p>
</template>

<script>
export default {
  name: "JobsDetailsView",
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
    };
  },
};
</script>

<style></style>

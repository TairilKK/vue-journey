<template>
  <div>
    <p>You're reaction time is {{ score }}ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja reflexes";
    } else if (this.score < 400) {
      this.rank = "Rapid reflexes";
    } else {
      this.rank = "Poor";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #42b983;
  font-weight: bold;
}
</style>

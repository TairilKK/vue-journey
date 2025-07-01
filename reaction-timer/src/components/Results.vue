<template>
  <div v-if="score !== 0">
    <p>
      You're reaction time: <strong>{{ score }}ms</strong>
    </p>
    <p class="rank">{{ rank }}</p>
  </div>
  <div v-else>
    <p class="cheated">Click the block when it appears!</p>
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
  display: inline-block;
  font-weight: bold;
  padding: 10px 20px;
  background: rgba(66, 185, 131, 20%);
  border-radius: 20px;
}
.cheated {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.4em;
  color: rgb(212, 55, 55);
  background: rgba(212, 55, 55, 20%);
  border-radius: 20px;
}
</style>

<template>
  <div class="placeholder" @click="check">
    <div class="block" v-if="showBlock" @click="stopTimer">Click me!</div>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
    check() {
      console.log("Clicked on placeholder");
      if (!this.showBlock) {
        clearInterval(this.timer);
        this.$emit("end", 0);
      }
    },
  },
};
</script>

<style>
.placeholder {
  width: 100%;
  height: 100vh;
}
.block {
  width: 40%;
  background-color: #42b983;
  color: white;
  text-align: center;
  margin: 40px auto;
  padding: 100px 0;
  border-radius: 25px;
}
</style>

<template>
  <div class="post-list">
    <div v-for="post of posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log("Component mounted"));
    onUnmounted(() => console.log("Component unmounted"));
    onUpdated(() => console.log("Compoenent updated"));
  },
};
</script>

<style></style>

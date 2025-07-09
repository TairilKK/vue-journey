<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="postsWithTag" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { Spinner, PostList },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    const postsWithTag = computed(() =>
      posts.value.filter((p) => p.tags.includes(route.params.tag))
    );
    return { error, posts, postsWithTag };
  },
};
</script>

<style></style>

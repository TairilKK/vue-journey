<template>
  <div class="tags">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { Spinner, PostList, TagCloud },
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

<style>
.tags {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>

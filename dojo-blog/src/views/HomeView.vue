<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref([
      "Anna",
      "Bartek",
      "Celina",
      "Damian",
      "Ewa",
      "Filip",
      "Grzegorz",
      "Hanna",
      "Igor",
      "Julia",
    ]);

    const matchingNames = computed(() =>
      names.value.filter((n) => n.includes(search.value))
    );

    return { names, search, matchingNames };
  },
};
</script>

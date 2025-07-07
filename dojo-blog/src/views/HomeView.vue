<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

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

    const stopWatch = watch(search, () => {
      console.log("watch function run");
    });

    const stopEffect = watchEffect(() => {
      console.log("watch effect ", search.value);
    });

    const matchingNames = computed(() =>
      names.value.filter((n) => n.includes(search.value))
    );

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>

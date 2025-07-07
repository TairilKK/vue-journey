<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    let name = ref("mario");
    let age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
    };

    return { name, age, handleClick };
  },
};
</script>

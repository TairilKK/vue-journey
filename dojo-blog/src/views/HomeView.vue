<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    console.log("setup");

    const p = ref(null);

    // not reactive
    let name = "mario";
    let age = "age";

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
    };

    return { name, age, handleClick, p };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

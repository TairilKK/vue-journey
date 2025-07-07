<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Ref</h2>
    <p>My name is {{ userOne.name }} my age is {{ userOne.age }}</p>
    <button @click="updateUserOne">Click me</button>

    <h2>Reactive</h2>
    <p>My name is {{ userTwo.name }} my age is {{ userTwo.age }}</p>
    <button @click="updateUserTwo">Click me</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const userOne = ref({ name: "mario", age: 30 });
    const userTwo = reactive({ name: "mario", age: 35 });

    const updateUserOne = () => {
      userOne.value.name = "luigi";
    };

    const updateUserTwo = () => {
      userTwo.name = "luigi";
    };
    return { userOne, updateUserOne, userTwo, updateUserTwo };
  },
};
</script>

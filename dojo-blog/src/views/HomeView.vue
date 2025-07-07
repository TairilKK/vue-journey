<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ userOne.name }} my age is {{ userOne.age }}</p>
    <button @click="updateUserOne">Click me</button>
    <button @click="userOne.age++">Add 1 to age</button>
    <input type="text" v-model="userOne.name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    let userOne = ref({ name: "mario", age: 30 });

    const updateUserOne = () => {
      userOne.value.name = "luigi";
    };

    return { userOne, updateUserOne };
  },
};
</script>

<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" name="email" required v-model="email" />

    <label for="password">password:</label>
    <input type="password" name="password" required v-model="password" />
  </form>
  <p>Email:{{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  padding: 40px;
  text-align: left;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
</style>

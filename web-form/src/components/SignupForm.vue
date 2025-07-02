<template>
  <form>
    <label for="email">Email:</label>
    <input type="email" name="email" required v-model="email" />

    <label for="password">Password:</label>
    <input type="password" name="password" required v-model="password" />

    <label for="role">Role:</label>
    <select name="role" required v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label for="skills">Skills:</label>
    <input
      type="text"
      name="skills"
      v-model="tempSkill"
      @keyup.alt="addSkill"
    />

    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="removeSkill(skill)"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" name="terms" required v-model="terms" />
      <label for="terms">I agree to the terms and conditions</label>
    </div>
  </form>

  <p>Email:{{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
  },
  watch: {},
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
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>

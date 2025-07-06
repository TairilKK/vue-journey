<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="filteredProjects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from "@/components/FilterNav.vue";
import { computed } from "vue";
import SingleProject from "../components/SingleProject.vue";

const filteredProjects = computed(() => {
  if (this.current === "completed") {
    return this.projects.filter((p) => p.complete);
  } else if (this.current === "ongoing") {
    return this.projects.filter((p) => !p.complete);
  }
  return this.projects;
});
export default {
  name: "HomeView",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
      filteredProjects: computed(() => {
        if (this.current === "completed") {
          return this.projects.filter((p) => p.complete);
        } else if (this.current === "ongoing") {
          return this.projects.filter((p) => !p.complete);
        }
        return this.projects;
      }),
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((p) => p.id != id);
    },
    handleComplete(id) {
      let project = this.projects.find((p) => p.id == id);
      project.complete = !project.complete;
    },
  },
};
</script>

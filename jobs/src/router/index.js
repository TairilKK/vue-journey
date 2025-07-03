import AboutView from "@/views/AboutView.vue";
import JobsDetailsView from "@/views/jobs/JobsDetailsView.vue";
import JobsView from "@/views/jobs/JobsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:id",
    name: "jobs-detail",
    component: JobsDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// import AboutView from "@/views/AboutView.vue";
import JobsDetailsView from "@/views/jobs/JobsDetailsView.vue";
import JobsView from "@/views/jobs/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
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
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:id",
    name: "job-details",
    component: JobsDetailsView,
    props: true,
  },
  {
    path: "/not-found",
    name: "not-found",
    component: NotFoundView,
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: { name: "jobs" },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "not-found" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

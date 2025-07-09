import CreateView from "@/views/CreateView.vue";
import DetailsView from "@/views/DetailsView.vue";
import TagView from "@/views/TagView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: DetailsView,
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: CreateView,
  },
  {
    path: "/tags/:tag",
    name: "Tags",
    component: TagView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

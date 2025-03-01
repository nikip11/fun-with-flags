import { createMemoryHistory, createRouter } from "vue-router";
import WelcomeView from "@/modules/Welcome/Views/WelcomeView.vue";

const routes = [
  { path: "/", component: WelcomeView },
  {
    path: "/about",
    component: () => import("@/modules/About/Views/AboutView.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

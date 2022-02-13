import { createRouter, createWebHashHistory } from "vue-router";
import MatchHistory from "@/views/MatchHistory.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/match-history",
    name: "MatchHistory",
    component: MatchHistory,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/roomCode",
      name: "roomCode",
      component: () => import("../views/RoomView.vue"),
    },
  ],
});

export default router;

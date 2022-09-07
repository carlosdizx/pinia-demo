import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Counter from "../views/CounterView.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/counter", name: "Counter", component: Counter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

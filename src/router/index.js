import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "layout",
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import { setDocumentTitle } from "@/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
      },
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
      },
      component: () => import("@/views/LoginView/login.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  setDocumentTitle(to.meta.title as string);
  next();
});
export default router;

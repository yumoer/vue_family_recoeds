import { createRouter, createWebHistory } from "vue-router";
import { setDocumentTitle } from "@/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: "首页",
      },
      component: () => import("@/views/Index.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
      },
      component: () => import("@/views/Login/login.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "关于我们",
      },
      component: () => import("@/views/About/about.vue"),
    },
    {
      path: "/services",
      name: "services",
      meta: {
        title: "服务",
      },
      component: () => import("@/views/Services/services.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      meta: {
        title: "服务",
      },
      component: () => import("@/views/Faq/faq.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      meta: {
        title: "服务",
      },
      component: () => import("@/views/Contact/contact.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      meta: {
        title: "博客",
      },
      component: () => import("@/views/Blog/blog.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      meta: {
        title: "日历",
      },
      component: () => import("@/views/layouts/Calendar/calendar.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  setDocumentTitle(to.meta.title as string);
  next();
});

export default router;

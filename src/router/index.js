import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogPage from "../views/Blog/Blog-page.vue";
import BlogDetailPage from "../views/Blog/Blog-detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blog-page",
    name: "BlogPage",
    component: BlogPage
  },
  {
    path: "/blog-detail",
    name: "BlogDetailPage",
    component: BlogDetailPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

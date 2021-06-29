import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogPage from "../views/Blog/Blog-page.vue";
<<<<<<< HEAD
import BlogDetailPage from "../views/Blog/Blog-detail.vue";
=======
import BlogDetail from "../views/Blog/Blog-detail.vue";
>>>>>>> master

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
<<<<<<< HEAD
    name: "BlogDetailPage",
    component: BlogDetailPage
=======
    name: "BlogDetail",
    component: BlogDetail
>>>>>>> master
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

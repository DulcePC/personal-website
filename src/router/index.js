import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CrudBlog from "../views/Blog/Crud-blog.vue";
import BlogPage from "../views/Blog/Blog-page.vue";
import BlogDetail from "../views/Blog/Blog-detail.vue";

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
    path: "/crud-blog",
    name: "CrudBlog",
    component: CrudBlog
  },
  {
    path: "/blog-page",
    name: "BlogPage",
    component: BlogPage
  },
  {
    path: "/blog-detail",
    name: "BlogDetail",
    component: BlogDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

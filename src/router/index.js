import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "@/views/Detail";
import Tag from "@/views/Tag";
import Category from "@/views/Category";
// import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/category/:name",
    name: "Category",
    component: Category
  },
  {
    path: "/tag/:name",
    name: "Tag",
    component: Tag
  }
];

const router = new VueRouter({
  routes
  // scrollBehavior() {
  //   console.log(2);
  //   return { x: 0, y: 0 };
  // }
});

export default router;

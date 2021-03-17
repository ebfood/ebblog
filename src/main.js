import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/CSS/normalize.css";
import "@/assets/CSS/iconfont/iconfont.css";
import "@/assets/CSS/darkdown.scss";
require("./mock");
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; //样式
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/CSS/normalize.css";
import "@/assets/CSS/iconfont/iconfont.css";
require("./mock");
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

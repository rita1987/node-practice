import Vue from "vue";
import App from "./App.vue";
import router from "./router/main";
import store from "./store";
import http from "./utils/http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

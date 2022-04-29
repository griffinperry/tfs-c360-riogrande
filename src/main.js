import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);
Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

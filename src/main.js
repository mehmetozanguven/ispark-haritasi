import Vue from "vue";
import App from "./App.vue";
import "./assets/app.scss";
Vue.config.productionTip = false;

export const bus = new Vue(); // event bus

new Vue({
  render: h => h(App)
}).$mount("#app");

import "./assets/sass/main.scss";
import App from "./App";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import mavonEditor from "mavon-editor";
import axios from "axios";
import "mavon-editor/dist/css/index.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/index.scss";
import setAxios from "./Axiosjwk.js";
import Cookies from "js-cookie";
Vue.config.productionTip = false;
setAxios();
var instance = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
  timeout: 10000
  // headers: { "X-Custom-Header": "foobar" }
});

Vue.prototype.$axios = instance;
Vue.use(ElementUI);
Vue.use(mavonEditor);

router.beforeEach((to, from, next) => {
  store.commit("SetToken", Cookies.get("token"));
  if (store.state.token) {
    store.commit("ChangeIsSign", 1);
  }
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({ name: "login" });
    }
  }
  console.log(to.path);
  console.log(from);
  next();
  // if (to.name === "home") {

  // }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

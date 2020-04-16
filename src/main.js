import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/index.scss";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor);

router.beforeEach((to, from, next) => {
  const token = "ssdsd";
  if (token) {
    store.commit("ChangeIsSign", "1");
  }
  if (to.path === "/") {
    if (token) {
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

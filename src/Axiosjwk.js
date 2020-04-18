import axios from "axios";
import store from "./store/index";

export default function setAxios() {
  //请求拦截
  axios.interceptors.request.use(config => {
    if (store.state.token) {
      config.headers["Authorization"] = `Bearer
   ${store.state.token}`;
    }
    return config;
  });
}

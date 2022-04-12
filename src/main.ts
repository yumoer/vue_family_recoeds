import { createApp } from "vue";
import store from "./stores/store";
// 引用 element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount("#app");

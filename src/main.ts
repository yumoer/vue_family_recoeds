import { createApp } from "vue";
import store from "./stores/store";
import router from "@/router";
// 引用 element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// @ts-ignore
import BaiduCalendar from "vue-baidu-calendar";
import App from "./App.vue";
const app = createApp(App);
app.use(BaiduCalendar);
app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount("#app");

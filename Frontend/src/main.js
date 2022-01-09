import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.js";
import store from "./store/index.js";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.use(router);
app.use(store);
app.mount("#app");

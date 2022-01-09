import { createRouter, createWebHistory } from "vue-router";

import HouseList from "../pages/houses/HouseList.vue";
import HouseDetail from "../pages/houses/HouseDetail.vue";
import NotFound from "../pages/NotFound.vue";
import RequestReceived from "../pages/requests/RequestReceived.vue";
import Home from "../pages/home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/detail", component: HouseDetail },
    { path: "/houses", component: HouseList },
    { path: "/houses/:id", component: HouseDetail, props: true },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

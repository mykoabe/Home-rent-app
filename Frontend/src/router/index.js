import { createRouter, createWebHistory } from "vue-router";

import HouseList from "../pages/houses/HouseList.vue";
import HouseDetail from "../pages/houses/HouseDetail.vue";
import NotFound from "../pages/NotFound.vue";
import RequestReceived from "../pages/requests/RequestReceived.vue";
import Home from "../pages/home/Home.vue";
import Registration from "../pages/register/Registration.vue";
import Login from "../pages/register/Login.vue";
import NewHome from "../pages/houses/NewHome.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/detail", component: HouseDetail },
    { path: "/houses", component: HouseList },
    { path: "/register", component: Registration },
    { path: "/addHouse", component: NewHome },
    { path: "/login", component: Login },
    { path: "/houses/:id", props: true, component: HouseDetail },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

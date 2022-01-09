import { createStore } from "vuex";
import appartmentModule from "./modules/appartment/index.js";

const store = createStore({
  modules: {
    appartment: appartmentModule,
  },
});

export default store;

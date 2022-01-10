import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      appartments: [
        {
          id: 1,
          name: "best home",
          description: "this is the best home ever",
          category: "Farm House",
          price: 234455,
          room_no: 10,
          floor_no: 4,
          state: "Amhara",
          subcity: "injibara",
          wereda: "Guagusa",
        },
        {
          id: 2,
          name: "Chatua Home",
          description: "This is the best villa ever made in lands of origin",
          category: "Appartment",
          price: 234455,
          room_no: 10,
          floor_no: 4,
          state: "Addis Ababa",
          subcity: "injibara",
          wereda: "Addis Alem",
        },
      ],
    };
  },
  actions,
  mutations,
  getters,
};

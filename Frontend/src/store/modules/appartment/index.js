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
          price: 234455,
          status: "free",
          propertyTypeId: 1,
          ownerId: 1,
        },
        {
          id: 2,
          name: "best home 2",
          description: "This is the second best home for ur comfort dude",
          price: 334455,
          status: "free",
          propertyTypeId: 1,
          ownerId: 1,
        },
      ],
    };
  },
  actions,
  mutations,
  getters,
};

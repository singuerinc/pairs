// import * as types from '../mutation-types';

const state = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  // checkout({ commit, state }, products) {
  //   const savedCartItems = [...state.added];
  //   commit(types.CHECKOUT_REQUEST);
  //   shop.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems }),
  //   );
  // },
};

// mutations
const mutations = {
  // [types.ADD_TO_CART](state, { id }) {
  //   state.lastCheckout = null;
  //   const record = state.added.find(p => p.id === id);
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1,
  //     });
  //   } else {
  //     record.quantity++;
  //   }
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

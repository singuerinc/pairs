import * as types from '../mutation-types';

const state = {
  cells: new Array(10),
  selectedCells: [],
};

// getters
const getters = {
  selectedCells: () => state.selectedCells,
  cells: () => state.cells,
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
  [types.UPDATE_NUM_CELLS](_state, { numCells }) {
    _state.cells = new Array(numCells);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

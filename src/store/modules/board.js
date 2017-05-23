import * as types from '../mutation-types';

function shuffle(array) {
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const colorsAll = [];
const colorNames = [
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

for (let i = 0; i < colorNames.length; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    colorsAll.push(`--oc-${colorNames[i]}-${j}`);
  }
}

const state = {
  userType: null,
  cells: new Array(10),
  selectedCells: [],
  colors: [],
};

// getters
const getters = {
  colors: () => state.colors,
  userType: () => state.userType,
  cells: () => state.cells,
  selectedCells: () => state.selectedCells,
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
  [types.USER_TYPE](_state, { userType }) {
    _state.userType = userType;
  },
  [types.UPDATE_NUM_CELLS](_state, { numCells }) {
    _state.cells = new Array(numCells);

    shuffle(colorsAll);
    let colors = colorsAll.slice(0, numCells / 2);
    colors = colors.concat(colors.slice());
    shuffle(colors);
    _state.colors = colors;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

import * as types from './mutation-types';

const updateUserType = ({ commit }, userType) => {
  commit(types.USER_TYPE, userType);
};

export { updateUserType as default };

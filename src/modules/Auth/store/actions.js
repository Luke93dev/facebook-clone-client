import TYPES from './types';

const loginUser = () => ({
  type: TYPES.LOGIN,
});

const logoutUser = () => ({
  type: TYPES.LOGOUT,
});

export default {
  loginUser,
  logoutUser,
};

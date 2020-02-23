import TYPES from './types';

const loginUser = () => ({
  type: TYPES.LOGIN,
});

const loginUserStart = () => ({
  type: TYPES.LOGIN_START,
});

const loginUserSuccess = () => ({
  type: TYPES.LOGIN_SUCCESS,
});

const logoutUser = () => ({
  type: TYPES.LOGOUT,
});

export default {
  loginUser,
  logoutUser,
  loginUserStart,
  loginUserSuccess,
};
